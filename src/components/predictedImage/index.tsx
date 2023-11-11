"use client";
import { useMainContext } from "@/hooks/useMain";
import FsLightbox from "fslightbox-react";

import React from "react";
import image from "@/assets/example-1.png";
import Image from "next/image";
import { saveAs } from "file-saver";

type Props = {};

const PredictedImage = (props: Props) => {
  const { prediction } = useMainContext();
  const [toggler, setToggler] = React.useState(false);
  console.log(prediction?.output);
  const handleDownload = () => {
    const imageUrl = `${prediction?.output[0]}`; // Replace with the actual image URL

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
  if (prediction?.output.length === 0) {
    return <></>;
  }

  return (
    <div className="grid grid-cols-1 gap-3 grid-rows-1 mt-20 items-center justify-center">
      <h2 className="text-2xl">Generated Image</h2>
      <div className="relative mx-auto">
        <Image
          src={`${prediction?.output[0]}`}
          alt="Picture of the author"
          width={500}
          height={500}
          className="w-full h-full rounded-md aspect-[2/1] object-cover  xl:w-[50rem] cursor-pointer"
          onClick={() => setToggler(!toggler)}
        />
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
