"use client";

import React, { FormEvent, useState } from "react";

type Props = {
  setReview: Function;
  setCache: Function;
};

function LinkForm({ setCache, setReview }: Props) {
  const [link, setLink] = useState("");
  const submitLink = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!link) return;

    await fetch("/api/postRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: link,
      }),
    }).then((response) => {
      response.json().then((data) => {
        setCache(link);
        setReview(data.summary);
      });
    });
  };
  return (
    <div className=" ">
      <form onSubmit={submitLink}>
        <div className="flex bg-white rounded-xl py-1 px-2 text-sm sm:text-base">
          <input
            className="flex-1 focus:outline-none text-[#036381] placeholder:text-[#5D849A]"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            id="urlLink"
            name="urlLink"
            placeholder="Put Amazon product link "
          />
          <button
            className="rounded-xl text-white bg-[#036381] px-2 py-1 sm:px-4 sm:py-2 text-base sm:text-xl self-end ml-2"
            type="submit"
          >
            Send
          </button>
        </div>

        <select
          id="lang"
          name="Langauge"
          className="bg-white rounded-lg py-1 px-2 text-sm sm:text-base mt-2 text-[#036381]"
          placeholder="Langauge"
        >
          <option value="arabic">Arabic</option>
          <option value="english">English</option>
        </select>
      </form>
    </div>
  );
}
export default LinkForm;
