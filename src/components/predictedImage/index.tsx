"use client";
import { useMainContext } from "@/hooks/useMain";
import FsLightbox from "fslightbox-react";

import React, { useEffect } from "react";
import PreviewSvg from "@/assets/preview.svg";
import Image from "next/image";
import { saveAs } from "file-saver";

type Props = {};

const PredictedImage = (props: Props) => {
  const { prediction } = useMainContext();
  const [toggler, setToggler] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const handleDownload = () => {
    const imageUrl = `${prediction?.output[0]}`;

    // Fetch the image as a blob
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        // Use file-saver to save the blob as a file
        saveAs(blob, "downloaded_image");
      })
      .catch((error) => {
        console.error("Error downloading image:", error);
      });
  };
  let timer: any;

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timer = setTimeout(() => {
      if (prediction?.output.length > 0) {
        setLoading(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  if (!loading) {
    return null;
  }

  return (
    <div
      id="generated-image"
      className="grid grid-cols-1 gap-3 grid-rows-1 mt-20 items-center justify-center"
    >
      <h2 className="text-2xl">Generated Image</h2>
      <div className="relative mx-auto group">
        <Image
          src={`${prediction?.output[0]}`}
          alt="Picture of the author"
          width={500}
          height={500}
          placeholder="blur"
          blurDataURL={`${prediction?.output[0]}`}
          className="w-full h-full rounded-md aspect-[2/1] object-cover  xl:w-[50rem]  "
        />
        <span
          onClick={() => setToggler(!toggler)}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer opacity-50  hover:opacity-100  ease-in duration-300 transition-opacity         
          "
        >
          <PreviewSvg />
        </span>
        <button
          onClick={handleDownload}
          className="btn-primary py-0 px-2 text-[1rem] lowercase right-0 bottom-0 absolute z-10 opacity-60 hover:opacity-100"
        >
          Download
        </button>
      </div>
      <FsLightbox
        toggler={toggler}
        type={"image"}
        sources={[`${prediction?.output[0]}`]}
      />
    </div>
  );
};

export default PredictedImage;
