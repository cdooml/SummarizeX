import React, { FormEvent, useEffect, useState } from "react";

type Props = { cache: string; review: string };

function SummaryCard({ cache, review }: Props) {
  const [prompt, setPrompt] = useState("");
  const [placeholder, setPlaceholer] = useState("");

  useEffect(() => {
    setPlaceholer(review);
  }, [review]);
  const sumbitQuestion = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    await fetch("/api/postQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: cache,
        question: prompt,
      }),
    }).then((response) => {
      response.json().then((data) => {
        setPlaceholer(data.answer);
      });
    });
  };

  const packaging = async () => {
    await fetch("/api/postQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: cache,
        question: "how is the packaging?",
      }),
    }).then((response) => {
      response.json().then((data) => {
        setPlaceholer(data.answer);
      });
    });
  };

  const quality = async () => {
    await fetch("/api/postQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: cache,
        question: "how is the quality?",
      }),
    }).then((response) => {
      response.json().then((data) => {
        setPlaceholer(data.answer);
      });
    });
  };
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
            {placeholder}
          </p>
        </div>
        <form onSubmit={sumbitQuestion} className="mt-2 sm:mx-5 mx-2 ">
          <div className="flex bg-white rounded-xl py-1 px-2 text-sm sm:text-base border-2 ">
            <input
              className="flex-1 focus:outline-none text-[#036381] placeholder:text-[#5D849A]"
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              id="question"
              name="question"
              placeholder="Have any questions? "
            />
            <button
              className="rounded-xl text-white bg-[#036381] px-1 py-1 sm:px-4 sm:py-2 text-base sm:text-xl self-end ml-2"
              type="submit"
            >
              Ask
            </button>
          </div>
        </form>
      </div>
      <div className="text-white text-sm sm:text-xl flex sm:flex-col justify-evenly my-2 sm:mt-0">
        <button
          onClick={() => setPlaceholer(review)}
          className="bg-[#1A4F6A] rounded-lg py-1 px-1 w-3/12 sm:w-full"
        >
          Summary
        </button>
        <button
          onClick={() => packaging()}
          className="bg-[#1A4F6A] rounded-lg py-1 px-1 w-3/12 sm:w-full"
        >
          Packaging
        </button>
        <button
          onClick={() => quality()}
          className="bg-[#1A4F6A] rounded-lg py-1 px-1 w-3/12 sm:w-full"
        >
          Quality
        </button>
      </div>
    </div>
  );
}

export default SummaryCard;
