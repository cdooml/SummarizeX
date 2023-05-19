import React from "react";

type Props = { review: string };

function SummaryCard({ review }: Props) {
  return (
    <div
      className={`${
        review != "" ? "transition ease-in duration-700" : "opacity-0"
      } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4  text-[#1A4F6A] max-h-[60%] w-[80%] sm:w-[50%] sm:max-h-[50%] flex flex-col sm:flex-row space-x-2`}
    >
      <div
        className={` text-[#1A4F6A] bg-white px-5 sm:px-10 py-5 rounded-xl shadow-2xl flex flex-col`}
      >
        <h4 className="text-xl sm:text-2xl font-semibold mb-4 ml-5">Summary</h4>
        <div
          className="overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-track-[#D9D9D9] scrollbar-thumb-[#5D849A] scrollbar-track-rounded-full scrollbar-thumb-rounded-full h-full w-full px-4 text-justify "
          dir="rtl"
        >
          <p className="text-sm sm:text-base" dir="ltr">
            {review}
          </p>
        </div>
      </div>
      <div className="text-white text-sm sm:text-xl flex sm:flex-col justify-evenly my-2 sm:mt-0">
        <button className="bg-[#1A4F6A] rounded-lg py-1 px-1 w-3/12 sm:w-full">
          All
        </button>
        <button className="bg-[#1A4F6A] rounded-lg py-1 px-1 w-3/12 sm:w-full">
          Packaging
        </button>
        <button className="bg-[#1A4F6A] rounded-lg py-1 px-1 w-3/12 sm:w-full">
          Quality
        </button>
      </div>
    </div>
  );
}

export default SummaryCard;
