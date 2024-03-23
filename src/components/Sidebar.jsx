import React from "react";
import { GoHomeFill } from "react-icons/go";
import { ImSearch } from "react-icons/im";
import { LuLibrary } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
import { PiGlobe } from "react-icons/pi";

function Sidebar() {
  return (
    <div className="SBcontainer w-[20%] h-screen  flex flex-col p-1 gap-2">
      <div className="p-5 bg-[#121212] rounded-xl flex flex-col gap-6">
        <div className="w-[6vw]">
          <a className="no-underline" href="#">
            <img
              className="w-full h-full object-cover"
              src="../spotify-logo.jpg"
            />
          </a>
        </div>
        <div className="text-[#797878] flex items-center">
            <button className="flex w-full items-center gap-8 hover:text-white transition ease-in-out duration-500">
                <GoHomeFill className="text-2xl"/>
                <h1 className="text-md font-bold">Home</h1>
            </button>
        </div>
        <div className="text-[#797878] flex items-center">
            <button className="flex w-full items-center gap-8 hover:text-white transition ease-in-out duration-500">
                <ImSearch className="text-2xl"/>
                <h1 className="text-md font-bold">Search</h1>
            </button>
        </div>
      </div>
      <div className="bg-[#121212] rounded-xl p-3 flex flex-col gap-3">
        <div className="flex justify-between p-1">
            <button className="text-[#797878] flex gap-3 hover:text-white transition ease-in-out duration-500"><LuLibrary className="text-2xl"/><h1 className="text-xl font-bold">Your Library</h1></button>
            <button className="text-[#797878] rounded-full flex items-center w-[1.5vw] justify-center hover:text-white transition ease-in-out duration-500 hover:bg-[#1A1A1A]"><LuPlus className="text-2xl"/></button>
        </div>
        <div className="flex flex-col p-4 rounded-xl bg-[#242424] gap-3">
            <h1 className="text-white font-bold text-xl">Create your first playlist</h1>
            <h1 className="text-white text-md">It's easy, we'll help you</h1>
            <button className="bg-white rounded-full text-black h-8 w-[8vw] hover:scale-105 "><h1 className="text-md">Create playlist</h1></button>
        </div>
        <div className="flex flex-col p-4 rounded-xl bg-[#242424] gap-3">
            <h1 className="text-white font-bold text-xl">Let's find some podcasts to follow</h1>
            <h1 className="text-white text-md">We'll keep you updated on new episodes</h1>
            <button className="bg-white rounded-full text-black h-8 w-[8vw] hover:scale-105 "><h1 className="text-md">Browse podcasts</h1></button>
        </div>
        <div className="rounded-xl bg-[#242424] h-[35vh] flex items-end p-5">
            <button className="text-white border-zinc-100 border-[1px] flex gap-1 rounded-full p-2 hover:scale-105"><PiGlobe className="text-3xl"/><h1 className="text-xl">English</h1></button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
