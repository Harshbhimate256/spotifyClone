import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import Cards from './Cards';
import { BiLogoInstagram } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa6";
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
      <div className='bg-[#121212] flex justify-between px-10 py-10 border-b border-[#ffffff21]'>
        <div className='flex gap-[10vw]'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-white font-bold text-[.9vw]'>Company</h1>
            <a href='#' className='text-[#A2A2A2] hover:text-white hover:underline'>About</a>
            <a href='#' className='text-[#A2A2A2] hover:text-white hover:underline'>Jobs</a>
            <a href='#' className='text-[#A2A2A2] hover:text-white hover:underline'>For the Record</a>
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-white font-bold text-[.9vw]'>Communities</h1>
            <a href='#' className='text-[#A2A2A2] hover:text-white hover:underline'>For Artists</a>
            <a href='#' className='text-[#A2A2A2] hover:text-white hover:underline'>Developers</a>
            <a href='#' className='text-[#A2A2A2] hover:text-white hover:underline'>Advertising</a>
            <a href='#' className='text-[#A2A2A2] hover:text-white hover:underline'>Investors</a>
            <a href='#' className='text-[#A2A2A2] hover:text-white hover:underline'>Vendors</a>
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-white font-bold text-[.9vw]'>Useful links</h1>
            <a href='#' className='text-[#A2A2A2] hover:text-white hover:underline'>Support</a>
            <a href='#' className='text-[#A2A2A2] hover:text-white hover:underline'>Free Mobile App</a>
          </div>
        </div>
        <div className=' h-14'>
          <div className='flex gap-5'>
          <a href='#' className='bg-[#242424] text-3xl flex items-center justify-center  rounded-full hover:bg-[#474646] p-3'>
            <div ><BiLogoInstagram className='text-white' /></div>
          </a>
          <a href='#' className='bg-[#242424] text-3xl flex items-center justify-center  rounded-full hover:bg-[#474646] p-3'>
            <div ><FaLinkedin className='text-white' /></div>
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeFeed
