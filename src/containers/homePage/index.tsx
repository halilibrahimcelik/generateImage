"use client";
import ExampleImages from "@/components/exampleImage";
import Form from "@/components/form";
import PredictedImage from "@/components/predictedImage";
import PredictLoading from "@/components/predictedImage/loading";
import PromptTag from "@/components/prompTag";
import Wrapper from "@/components/wrapper";
import { useMainContext } from "@/hooks/useMain";
import { SessionProvider } from "next-auth/react";
import { PuffLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/all";
type Props = {};

const HomePageContainer = (props: Props) => {
  const { loading } = useMainContext();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".form-area", {
        x: 100,
        opacity: 0,
        duration: 0.3,
        delay: 0.3,
        ease: "sine.in",
      });
      gsap.from(".promp-tag", {
        opacity: 0,
        duration: 0.3,
        delay: 0.3,
        ease: "sine.in",
      });
      gsap.from(".example-wrapper", {
        opacity: 0,
        scale: 0.7,

        overflow: "hidden",
        duration: 0.4,
        start: "top top",
        scrollTrigger: {
          trigger: ".examples",
          scrub: 0,
          markers: false,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <SessionProvider>
      <Wrapper tag="section">
        <div className="form-area">
          <Form />
        </div>
        <div className="promp-tag">
          <PromptTag />
        </div>
        {loading ? (
          <div className="flex flex-col items-center justify-center gap-2">
            <PuffLoader
              size={100}
              cssOverride={{
                animation: "ease-in",
                backgroundColor: "transparent",
              }}
              color="#e3e3e3"
            />
            <PredictLoading />
          </div>
        ) : (
          <PredictedImage />
        )}
        <div className="example-wrapper examples">
          <ExampleImages />
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Wrapper>
    </SessionProvider>
  );
};

export default HomePageContainer;
