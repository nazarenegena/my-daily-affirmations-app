import React from "react";
import Link from "next/link";
import { FaStarOfLife } from "react-icons/fa";

type Props = {};

const HeroSection = (props: Props) => {
  const BannerText =
    "lg:text-8xl ml-[2rem] md:text-8xl text-6xl tracking-widest font-serif text-center";
  const LinkTextStyles =
    "text-md font-medium text-zinc-800 font-dmsans hover:text-primary-500 transition ease-in-out duration-300 mt-5";

  return (
    <div className="mt-12 flex">
      {/*hero side bar  */}
      <div className="hidden lg:flex flex-col">
        <FaStarOfLife size={34} fontSize="1.5em" color="#e36d6e" />
        {/* nav links */}
        <div className="flex flex-col">
          <Link href={"/feature"} className={`${LinkTextStyles}`}>
            Features
          </Link>
          <Link href={"/categories"} className={`${LinkTextStyles}`}>
            Categories
          </Link>
          <Link href={"/motivations"} className={`${LinkTextStyles}`}>
            Motivations
          </Link>
          <Link href={"/contactus"} className={`${LinkTextStyles}`}>
            Contact us
          </Link>{" "}
        </div>
      </div>

      {/* hero header section */}
      <div className="flex flex-col justify-center lg:ml-[16rem]">
        <p className="text-md md:text-lg lg:text-xl text-zinc-500 tracking-wider text-center ">
          {" "}
          Get To Explore Our Extensive Affirmation And Quotes Collection.
        </p>
        <div className="mt-10">
          <h1 className={`${BannerText}`}>Your Daily </h1>{" "}
          <h1 className={`${BannerText} mt-8`}> Affirmations ...</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
