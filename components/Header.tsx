import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <div className="w-full absolute flex justify-between pt-6 px-2 sm:px-4">
      <div className="flex justify-center align-middle">
        <img src="./logo.png" className="w-12 h-12 sm:w-16 sm:h-16" />
        <div className="sm:text-2xl font-bold self-center">SummarizeX</div>
      </div>

      <div className="flex sm:space-x-5 space-x-2 sm:pr-5 text-xs sm:text-base">
        <div className="py-1 px-2 sm:px-4 self-center">about us</div>
        <div className="py-1 px-2 sm:px-4 self-center">help</div>
        <div className="rounded-full bg-white text-[#1A4F6A] py-1 px-2 sm:px-4 self-center">
          start
        </div>
      </div>
    </div>
  );
}

export default Header;
