"use client";

import React, { FormEvent, useState } from "react";

type Props = {};

function LinkForm({}: Props) {
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
        console.log(data);
      });
    });
  };
  return (
    <div className="bg-white rounded-xl py-1 px-2 text-sm sm:text-base">
      <form onSubmit={submitLink} className="flex">
        <input
          className="flex-1 focus:outline-none text-black"
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          id="urlLink"
          name="urlLink"
          placeholder="Put Amazon product link "
        />

        <button
          className="rounded-xl text-white bg-gradient-to-r from-[#90acbb] from-0% via-[#597d91] via-50% to-[#90acbb] to-100% px-4 py-2 self-end"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}
export default LinkForm;
