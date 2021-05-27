import React from "react";

const Hero = () => {
  return (
    // MAIN DIV

    <div
      className="bg-blue-400 h-80v w-screen bg-center bg-cover bg-no-repeat block flex"
      style={{
        "background-image":
          "linear-gradient(rgba(63, 127, 191, 0.7), rgba(0, 0, 0, 0.5)), url(/background1.jpeg)",
      }}
    >
      <div className="flex w-screen container mx-auto">
        {/* 1/2  */}
        <div className="w-6/12 h-full flex justify-center items-start content-center">
          <div className="mt-32">
            <h1 className="text-4xl font-extrabold mb-8 text-gray-200">
              PIOTR GAJDA{" "}
              <span className="text-blue-200">BUILDING SERVICES</span>
            </h1>
            <p className="text-gray-200">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus illum eveniet vero autem ducimus distinctio laborum
              rerum dolor consequuntur iste!
            </p>
          </div>
        </div>

        {/* 1/2  */}
        <div className="w-6/12 h-full flex justify-center items-center content-center">
          <div className="bg-gray-100 w-3/5 h-3/4 rounded-2xl shadow-lg bg-opacity-80">
            <div className="flex-col p-4 m-4">
              <h1 className="text-center text-2xl font-bold mb-8 text-blue-800">
                Request a Free Quote:
              </h1>
              <input
                type="text"
                className="w-full p-4 border-2 border-blue-200 rounded-lg mb-8 shadow"
                placeholder="Name:"
              />

              <input
                type="text"
                className="w-full p-4 border-2 border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
