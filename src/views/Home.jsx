import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
const Home = () => {
  return (
    <>
      <Hero />
      <Cards />
      <div className="flex justify-center items-center my-5">
        <button
          type="button"
          className="inline-block px-10 py-2.5 bg-blue-400 font-medium text-s leading-tight rounded-xl shadow-md hover:bg-blue-800"
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default Home;
