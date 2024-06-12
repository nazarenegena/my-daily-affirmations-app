"use client"
import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { CgMenuRound } from "react-icons/cg";


import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {

  const [sidebar, setSidebar] = useState(false);
  const flexBetween = "lg:flex items-center justify-between";
  const navTextStyles = "text-lg font-medium font-dmsans";
  
  return (
    <nav className={`${flexBetween} px-9 py-6`}>
      {/* logo */}
      <div className="text-2xl font-dmsans font-extrabold ">
        <span className="text-primary-500">My</span>Daily
      </div>

      {/* features */}
      <div className={`hidden ${flexBetween} gap-8`}>
        <Link href={"/"} className={`${navTextStyles}`}>
          Home
        </Link>
        <Link href={"/feature"} className={`${navTextStyles}`}>
          Features
        </Link>
        <Link href={"/categories"} className={`${navTextStyles}`}>
          Categories
        </Link>
        <Link href={"/motivations"} className={`${navTextStyles}`}>
          Motivations
        </Link>
        <Link href={"/contactus"} className={`${navTextStyles}`}>
          Contact us
        </Link>
      </div>

      {/* action button */}
      <div className="hidden lg:flex gap-2">
        <button className="text-primary-500 mr-10 font-medium hover:underline hover:underline-offset-8">
          Sign In
        </button>
        <button className="border-primary-500 border-2 px-6 py-1 rounded-2xl flex flex-col hover:bg-primary-500 hover:text-white ">
          Become a member
        </button>
      </div>
      {/* sidebar */}
      <button className="lg:hidden fixed  right-24 top-7 " onClick={() => setSidebar(true)}>
      <CgMenuRound size={48}  color="#e36d6e" fontSize="1.5em"/>
      </button>
        

        {sidebar ? (
                <div className="lg:hidden fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-300 drop-shadow-xl ">

          <div className="ml-[33%] flex flex-col gap-10 text-2xl mt-20 text-zinc-700 font-semibold">
            <Link href={"/"} className={`${navTextStyles}`}>
              Home
            </Link>
            <Link href={"/feature"} className={`${navTextStyles}`}>
              Features
            </Link>
            <Link href={"/categories"} className={`${navTextStyles}`}>
              Categories
            </Link>
            <Link href={"/motivations"} className={`${navTextStyles}`}>
              Motivations
            </Link>
            <Link href={"/contactus"} className={`${navTextStyles}`}>
              Contact us
            </Link>

            <button className="fixed top-4 right-3 text-zinc-700" onClick={() => setSidebar(false)}><MdOutlineCancel fontSize="1.5em"/>
            </button>
          </div>
          </div>

        ) : (
          null
        )}
    </nav>
  );
};

export default Navbar;
