import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import Cards from './Cards';
function HomeFeed() {
  return (
    <div className='HFcontainer h-screen bg-[#101010] rounded-xl overflow-hidden'>
      <div className="flex w-full p-4 gap-3 bg-transparent fixed rounded-xl items-center">
        <button className="flex items-center text-white bg-black rounded-full text-2xl h-10 w-10 justify-center">
          <FaChevronLeft />
        </button>
        <button className="flex items-center text-white bg-black rounded-full text-2xl h-10 w-10 justify-center">
          <FaChevronRight />
        </button>
      </div>
      <div className="bg-[#121212] w-full mt-[8vh] p-6 flex flex-col gap-5">
        <a href='#'><h1 className="text-2xl font-bold text-white">Spotify Playlists</h1></a>
        <div className='flex flex-wrap gap-3'>
            <Cards/>
            <Cards/>
        </div>
      </div>
    </div>
  )
}

export default HomeFeed
