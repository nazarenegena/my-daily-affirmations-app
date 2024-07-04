"use client";
import React, { useEffect, useState } from "react";

type Props = {};

interface IMotivationQuote {
  author: string;
  text: string;
}

interface IAffirmation {
  id: number;
  author: string;
  content: {
    rendered: string;
  };
}

const Content = (props: Props) => {
  const [quotes, setQuotes] = useState([]);

  const [affirmations, setAffirmations] = useState([]);

  useEffect(() => {
    const fetchAffirmations = async () => {
      const res = await fetch(
        "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand"
      );
      const result = await res.json();
      console.log(result, "the affirmations");
      setAffirmations(result);
    };

    fetchAffirmations();
  }, []);

  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      console.log(data, "the data");
      setQuotes(data);
    };
    fetchQuotes();
  });
  return (
    <div className="mt-20  ">
      <div className="bg-white grid grid-cols-2 gap-4 place-content-center pt-10 px-10 pb-5 rounded-xl">
        {affirmations.map((affirmation: IAffirmation, index) => (
          <div
            key={index}
            className=" bg-background-grey border border-zinc-300 shadow-inner  h-28 flex justify-center items-center text-center rounded-xl  "
          >
            <p className="font-serif tracking-wide">
              {affirmation.content.rendered.replaceAll(/<[^>]*>/g, "")}
            </p>
          </div>
        ))}
      </div>
      {/*quotes  */}
      <div className="bg-background-grey mt-10 flex flex-col items-center justify-center">
        {quotes.map((quote: IMotivationQuote, index) => (
          <div
            key={index}
            className="flex flex-col bg-white border shadow-xl rounded-2xl w-1/2  mt-7 p-10 "
          >
            <p className="font-medium tracking-wide text-base">{quote.text}</p>
            <p className="mt-5 italic text-primary-500">{quote.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
