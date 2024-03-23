import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import BrowseCards from "./BrowseCards";

function SearchFeed() {
  return (
    <div className="SFcontainer h-screen bg-[#090909] rounded-xl overflow-hidden">
      <div className="flex w-full p-4 gap-3 bg-transparent fixed rounded-xl items-center">
        <button className="flex items-center text-white bg-black rounded-full text-2xl h-10 w-10 justify-center">
          <FaChevronLeft />
        </button>
        <button className="flex items-center text-white bg-black rounded-full text-2xl h-10 w-10 justify-center">
          <FaChevronRight />
        </button>
        <input
          className="rounded-full w-[17vw] h-12 p-5 bg-[#242424] hover:bg-[#2e2e2e] placeholder:text-[#6D6D6D] text-white"
          type="text"
          placeholder='What do you want to play?'
        />
      </div>
      <div className="bg-[#121212] w-full mt-[8vh] p-6 flex flex-col gap-5">
        <h1 className="text-2xl font-bold text-white">Browse all</h1>
        <BrowseCards/>
      </div>
    </div>
  );
}

export default SearchFeed;
