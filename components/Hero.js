import React from "react";

const Hero = () => {
  return (
    <div className="bg-blue-400 h-90v flex-col">
      <div className=" bg-indigo-400 h-2/4 mx-auto flex justify-center items-center content-center">
        <div className="w-5/6">
          <h1 className="">Pjetrek The Builder</h1>
          <p className="text-wr mb-4 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
            unde.asdasdsa
          </p>
          <div className="flex flex justify-center items-center content-center">
            <button className="p-4">click1</button>
            <button>click1</button>
          </div>
        </div>
      </div>
      <div className=" bg-red-400 h-2/4"></div>
    </div>
  );
};

export default Hero;
