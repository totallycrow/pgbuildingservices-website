import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="">
      <header className="">
        <Navbar />
        <Hero />
      </header>
      <div className="h-20 bg-gray-100 flex justify-center items-center content-center">
        <div className="text-4xl text-gray-500 bg-gray-100">MY WORK</div>
      </div>

      <div className="bg-gray-100">
        <div className="h-60v container mx-auto flex ">
          <div className="bg-red-500 w-4/12 mx-3">A</div>
          <div className="bg-red-400 w-4/12 mx-3">A</div>
          <div className="bg-red-300 w-4/12 mx-3">A</div>
        </div>
      </div>

      {/* ABOUT ME */}

      <div className="bg-gray-100 my-10">
        <div className="h-60v container mx-auto flex ">
          <div className="bg-blue-300 w-full mx-3">A</div>
        </div>
      </div>
    </div>
  );
}
