import Header from "@/components/Header";
import LinkForm from "@/components/LinkForm";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start h-screen">
      <Header />
      <div className="w-full flex justify-center bg-gradient-to-r from-[#90acbb] from-0% via-[#597d91] via-50% to-[#90acbb] to-100%">
        <div className="flex flex-col h-[50vh] w-10/12 sm:w-7/12 justify-center space-y-3 sm:space-y-10 ">
          <h2 className="self-center text-lg sm:text-2xl font-semibold">
            Paste An Amazon Product link Below then Click Send!
          </h2>
          <LinkForm />
        </div>
      </div>
    </main>
  );
}
