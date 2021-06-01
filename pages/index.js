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
        <div className="text-4xl text-gray-500 bg-gray-100">
          AREA OF EXPERTISE
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="h-60v container mx-auto flex ">
          <div className="bg-gray-200 w-4/12 mx-3 rounded shadow hover:shadow-lg">
            <div className="w-full p-4">
              <Image
                src="/area1.jpeg"
                width={969}
                height={646}
                layout="responsive"
              />
            </div>
            <div className=" w-full my-4 px-8">
              <h3 className="text-3xl font-bold text-gray-700 text-center mb-8">
                PAINTING & DECORATING
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti, autem saepe. Reprehenderit impedit amet deleniti
                adipisci quis sequi nulla aut dolore labore a. Quod deleniti
                iste eveniet voluptatum, dolorem necessitatibus.
              </p>
            </div>
          </div>

          {/* 2/3 */}

          <div className="bg-gray-200 w-4/12 mx-3 rounded shadow">
            <div className="w-full p-4">
              <Image
                src="/area1.jpeg"
                width={969}
                height={646}
                layout="responsive"
              />
            </div>
            <div className=" w-full my-4 px-8">
              <h3 className="text-3xl font-bold text-gray-700 text-center mb-8">
                PLUMBING
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti, autem saepe. Reprehenderit impedit amet deleniti
                adipisci quis sequi nulla aut dolore labore a. Quod deleniti
                iste eveniet voluptatum, dolorem necessitatibus.
              </p>
            </div>
          </div>

          {/* 3/3 */}

          <div className="bg-gray-200 w-4/12 mx-3 rounded shadow">
            <div className="w-full p-4">
              <Image
                src="/area1.jpeg"
                width={969}
                height={646}
                layout="responsive"
              />
            </div>
            <div className=" w-full my-4 px-8">
              <h3 className="text-3xl font-bold text-gray-700 text-center mb-8">
                REPAIRS
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti, autem saepe. Reprehenderit impedit amet deleniti
                adipisci quis sequi nulla aut dolore labore a. Quod deleniti
                iste eveniet voluptatum, dolorem necessitatibus.
              </p>
            </div>
          </div>
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
