"use client";

import React, { useEffect, useState } from "react";
import LakeView from "@/assets/lake-view.jpg";

type Props = {};

interface IQuote {
  author: string;
  quote: string;
}

const BannerQuote = (props: Props) => {
  const [quoteData, setQuoteData] = useState<IQuote>({
    author: "",
    quote: "",
  });
  useEffect(() => {
    const fetchRandomQuotes = async () => {
      const response = await fetch(
        " https://api.breakingbadquotes.xyz/v1/quotes"
      );
      const data = await response.json();
      setQuoteData(data[0]);
    };
    fetchRandomQuotes();
  }, []);

  return (
    <div
      className="h-96 mt-16 shadow-lg rounded-xl py-4 px-5 flex w-[30rem] bg-cover"
      style={{ backgroundImage: `url(${LakeView.src})` }}
    >
      <div className="bg-zinc-500 bg-opacity-30 h-full flex flex-col justify-center items-center">
        <p className="text-white font-semibold z-20 text-xl italic text-center mt-10 leading-8">
          {quoteData.quote}
        </p>
        <p className="text-neutral-100 font-semibold  text-sm mt-10">
          ~ {quoteData.author}
        </p>
      </div>{" "}
    </div>
  );
};

export default BannerQuote;
