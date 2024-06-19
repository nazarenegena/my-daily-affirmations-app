import React from "react";
import Cliff from "@/assets/cliff.jpg";
// Make sure the path is correct

type Props = {};

const Quote = (props: Props) => {
  return (
    <div
      className="h-96 mt-16 shadow-lg rounded-xl py-4 px-5 flex w-[30rem] bg-cover"
      style={{ backgroundImage: `url(${Cliff.src})` }}
    >
      <div className="bg-zinc-500 bg-opacity-30 h-full flex flex-col justify-center items-center">
        <p className="text-white font-semibold z-30 text-xl italic text-center ">
          “The unexpected paths are often the most beautiful.”
        </p>
        <p className="text-neutral-100 font-semibold  text-sm mt-10">
          — Damiaan Denys
        </p>
      </div>{" "}
    </div>
  );
};

export default Quote;
