import React from "react";

const Hero = () => {
  return (
    // MAIN DIV

    <div
      className="bg-blue-400 h-80v w-screen bg-center bg-cover bg-no-repeat block flex"
      style={{
        "background-image":
          "linear-gradient(rgba(255, 255, 255, 0.7), rgba(200, 200, 200, 0.8)), url(/background1.jpeg)",
      }}
    >
      <div className="flex w-screen container mx-auto">
        {/* 1/2  */}
        <div className="w-6/12 h-full flex justify-center items-center content-center">
          <div className="mb-40">
            <h1 className="text-4xl font-bold text-gray-700 ">PIOTR GAJDA </h1>
            <h2>
              <span className="text-blue-500  text-5xl mb-8 block ">
                BUILDING SERVICES
              </span>
            </h2>

            <p className="text-gray-600 text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus illum eveniet vero autem ducimus distinctio laborum
              rerum dolor consequuntur iste!
            </p>
            <div className="flex justify-around p-10">
              <button className="border-b-4  border-gray-400 text-xl p-4 focus:outline-none flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                My Projects
              </button>
              <button className="border-b-4  border-gray-400 text-xl p-4 focus:outline-none flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                About Me
              </button>
            </div>
          </div>
        </div>

        {/* 1/2  */}
        <div className="w-6/12 h-full flex justify-center items-center content-center">
          <div className="bg-gray-100 w-3/5 h-3/5 rounded-2xl shadow-lg bg-opacity-80">
            <div className="flex-col p-4 m-4">
              <h1 className="text-center text-2xl font-bold mb-8 text-blue-500">
                Request a Free Quote:
              </h1>
              <input
                type="text"
                className="w-full p-4 border-2 border-blue-200 rounded-lg mb-8 shadow"
                placeholder="Name:"
              />

              <input
                type="text"
                className="w-full p-4 border-2 border-blue-200 rounded-lg mb-8 shadow"
                placeholder="E-Mail Address:"
              />

              <input
                type="text"
                className="w-full p-4 border-2 border-blue-200 rounded-lg mb-8 shadow"
                placeholder="Phone Number:"
              />

              <textarea
                type="textarea"
                className="form-textarea block w-full p-4 border-2 border-blue-200 rounded-lg mb-8 shadow resize-none"
                placeholder="How Can I Help?:"
                rows="3"
              />
              <button className="text-center mx-auto block p-4 bg-blue-400 rounded-lg text-gray-100">
                Request Callback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
