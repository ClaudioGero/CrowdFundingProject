import React from "react";

const Hero = () => {
  return (
    <div className=" text-center bg-white text-grey-800 py-24 px-6">
      <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
        <span className="capitalize">Bring creative projects to life on</span>
        <br />
        <span className="uppercase text-blue-500">Project CF</span>
      </h1>
      <div className="flex justify-center items-center space-x-6">
        <button
          type="button"
          className="inline-block px-10 py-2.5 bg-blue-400 font-medium text-s leading-tight rounded-xl shadow-md hover:bg-blue-600"
        >
          Add Project
        </button>
        <button
          type="button"
          className="inline-block px-10 py-2.5 bg-transparent border border-blue-400 font-medium text-s leading-tight rounded-xl shadow-md hover:bg-blue-600"
        >
          Fund Project
        </button>
      </div>
      <div>
        <div className="flex justify-center items-center mt-10">
          <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
            <span className="text-lg font-bold text-blue-400 leading-5 ">
              {0}
            </span>
            <span>Projects</span>
          </div>
          <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
            <span className="text-lg font-bold text-blue-400 leading-5 ">
              {0}
            </span>
            <span>Backings</span>
          </div>
          <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
            <span className="text-lg font-bold text-blue-400 leading-5 ">
              {0} Eth
            </span>
            <span>Donated</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
