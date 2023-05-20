import ClientProvider from "@/components/ClientProvider";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start h-screen">
      <Header />
      <div className="w-full flex justify-center bg-[url('../public/bgImg.png')] bg-center sm:bg-contain ">
        <div className="flex flex-col h-[50vh] w-10/12 sm:w-7/12 justify-center space-y-3 sm:space-y-10 ">
          <h2 className="self-center text-lg sm:text-2xl font-semibold">
            Insert An Amazon Product link Below then Click Send!
          </h2>
          <ClientProvider />
        </div>
      </div>
    </main>
  );
}
