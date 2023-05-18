import React from "react";

type Props = {};

function LinkForm({}: Props) {
  return (
    <div className="bg-white rounded-xl py-1 px-2 text-sm sm:text-base">
      <form action="#" method="post" className="flex">
        <input
          className="flex-1 focus:outline-none text-black"
          type="text"
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
