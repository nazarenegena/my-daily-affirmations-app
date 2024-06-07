import React from "react";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";
  const navTextStyles = "text-lg font-medium font-dmsans";
  return (
    <nav className={`${flexBetween} px-9 py-6`}>
      {/* logo */}
      <div className="text-2xl font-dmsans font-extrabold ">
        <span className="text-primary-500">My</span>Daily
      </div>

      {/* features */}
      <div className={`${flexBetween} gap-8`}>
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
      <div className="">
        <button className="text-primary-500 mr-10 font-medium hover:underline hover:underline-offset-8">
          Sign In
        </button>
        <button className="border-primary-500 border-2 px-6 py-1 rounded-2xl hover:bg-primary-500 hover:text-white">
          Become a member
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
