import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col justify-start items-center h-[50vh]">
        <h2>SummarizeX</h2>
        <div className="bg-white rounded-lg p-1">
          <form action="/send-data" method="post">
            <input
              className=""
              type="text"
              id="urlLink"
              name="urlLink"
              placeholder="Put Amazon product link "
            />

            <button className="rounded-lg bg-slate-800 p-2" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
