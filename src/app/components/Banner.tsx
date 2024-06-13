import React from "react";
import Image from "next/image";

import SmileFace from "@/assets/smileface.jpg";
import Potrait from "@/assets/potrait.jpg";
import FacePic from "@/assets/faceprofile.jpg";
import VisionPic from "@/assets/visionpic.jpg";

type Props = {};

const Banner = (props: Props) => {
  const imageStyles = "rounded-full w-14 h-14 object-cover";
  const cardStyles = "bg-white h-96 mt-16 shadow-lg rounded-xl py-4 px-5";
  return (
    <div className="flex">
      <div className={`${cardStyles} flex w-[30rem] `}>
        <p>hello</p>
      </div>
      <div className={`${cardStyles}  w-[50rem] ml-10 mt-5 `}>
        <div className="flex font-medium">
          <div className="text-4xl tracking-wider flex">
            <p className="text-primary-500">My-</p>
            <p>Daily</p>
          </div>
          <div className="flex  absolute ">
            <Image
              src={SmileFace}
              alt="smile-pic"
              className={`${imageStyles} relative left-44`}
            />
            <Image
              src={Potrait}
              alt="potrait"
              className={`${imageStyles} relative left-40`}
            />
          </div>
          <h1 className="text-4xl tracking-wider ml-32">FOR EVERYONE</h1>
        </div>
        <div>
          <div className="">
            We have telemedicine <br /> extremely easy to use for both{" "}
          </div>
          <div>
            <p>Esteemed Clients</p>
            <div>
              <Image src={Potrait} alt="potrait" className={`${imageStyles}`} />
              <Image
                src={SmileFace}
                alt="smileface"
                className={`${imageStyles}`}
              />
              <Image src={FacePic} alt="facepic" className={`${imageStyles}`} />
              <Image
                src={VisionPic}
                alt="visionpic"
                className={`${imageStyles}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
