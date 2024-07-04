import React from "react";
import Image from "next/image";
import SmileFace from "@/assets/smileface.jpg";
import Potrait from "@/assets/potrait.jpg";
import FacePic from "@/assets/faceprofile.jpg";
import VisionPic from "@/assets/visionpic.jpg";
import { BiSolidBadgeCheck } from "react-icons/bi";
import ActionButton from "./ActionButtion";
import BannerQuote from "./BannerQuote";

type Props = {};

const Banner = (props: Props) => {
  const imageStyles =
    "rounded-full lg:w-14 lg:h-14 md:w-12 md:h-12 w-10 h-10  object-cover";
  const cardStyles = "bg-white h-96 mt-16 shadow-lg rounded-xl py-4 px-5";
  return (
    <div className="lg:flex lg:flex-row flex flex-col">
      {/*the daily quotes  */}
      <div className="flex w-[30rem]">
        <BannerQuote />
      </div>

      {/* client appreciation section  */}
      <div className={`${cardStyles}  lg:w-[50rem] lg:ml-10 w-full ß`}>
        <div className="flex font-medium">
          <div className="text-4xl tracking-wider flex">
            <p className="text-primary-500">My-</p>
            <p>Daily</p>
          </div>
          <div className="flex absolute ">
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
          <h1 className="lg:text-4xl md:text-3xl sm:text-xl tracking-wider ml-32">
            FOR EVERYONE
          </h1>
        </div>
        <div className="mt-10 flex justify-between">
          <div className="mt-10 ml-10">
            <div className="text-sm font-medium text-zinc-500 font-montserrat text-center">
              We have telemedicine <br /> extremely easy to use for both{" "}
            </div>
            <ActionButton title="Explore" className="mt-16" />
          </div>

          {/* clients image */}
          <div className="bg-secondary-300 w-1/2 h-56 px-4 rounded-xl">
            <div className="flex justify-between mt-5">
              <p className=" font-bold text-lg ">Esteemed Clients</p>
              <BiSolidBadgeCheck color="#e3a76d" size={32} />
            </div>

            <div className="flex mt-4">
              <div className="grid grid-cols-2 gap-2 bg-white p-2  lg:w-1/2 md:w-40 h-36 w-56 rounded-xl">
                <Image
                  src={Potrait}
                  alt="potrait"
                  className={`${imageStyles}`}
                />
                <Image
                  src={SmileFace}
                  alt="smileface"
                  className={`${imageStyles}`}
                />
                <Image
                  src={FacePic}
                  alt="facepic"
                  className={`${imageStyles}`}
                />
                <Image
                  src={VisionPic}
                  alt="visionpic"
                  className={`${imageStyles}`}
                />
              </div>
              <div className="ml-7 lg:mt-5  mt-0">
                <div className="">
                  <p className="lg:text-sm text-xs font-semibold">
                    Bessie Cooper
                  </p>
                  <p className="hidden md:flex lg:flex text-xs lg:mt-1 mt-0 italic text-zinc-700">
                    member since 2021
                  </p>
                </div>
                <div className="mt-7">
                  <p className="lg:text-sm text-xs font-semibold">James Pete</p>
                  <p className="hidden md:flex lg:flex text-xs mt-1 italic text-zinc-700">
                    member since 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
