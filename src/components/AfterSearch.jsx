import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import Cards from "./Cards";
import CircleCards from "./CircleCards";

function AfterSearch() {
  return (
    <div className="AScontainer flex flex-col bg-[#121212] mt-[8vh] p-4 text-white gap-10">
      <div className="flex gap-3 fixed">
        <button className="bg-[#2A2A2A] rounded-full flex items-center text-md hover:bg-[#353535] py-1 px-4">
          All
        </button>
        <button className="bg-[#2A2A2A] rounded-full flex items-center text-md hover:bg-[#353535] py-1 px-4">
          Songs
        </button>
        <button className="bg-[#2A2A2A] rounded-full flex items-center text-md hover:bg-[#353535] py-1 px-4">
          Artists
        </button>
        <button className="bg-[#2A2A2A] rounded-full flex items-center text-md hover:bg-[#353535] py-1 px-4">
          Playlists
        </button>
        <button className="bg-[#2A2A2A] rounded-full flex items-center text-md hover:bg-[#353535] py-1 px-4">
          Albums
        </button>
        <button className="bg-[#2A2A2A] rounded-full flex items-center text-md hover:bg-[#353535] py-1 px-4">
          Podcasts & Shows
        </button>
        <button className="bg-[#2A2A2A] rounded-full flex items-center text-md hover:bg-[#353535] py-1 px-4">
          Profiles
        </button>
      </div>
      <div className="flex gap-3 mt-16">
        <div className="w-[25%]  flex flex-col gap-10 p-1">
          <div className="text-white font-bold text-2xl">
            <h1>Top result</h1>
          </div>
          <div className="topResult relative w-full bg-[#181818] rounded-xl flex flex-col gap-3 p-3 hover:bg-[#282828] cursor-pointer">
          <div className='topResultPlayBtn absolute h-[6vh] w-[3vw] bg-green-500 rounded-full left-[15vw] top-[8.5vw] hover:scale-105 hover:bg-green-400'><FaPlay className='w-1/2 h-1/2 translate-x-1/2 translate-y-1/2 text-black'/></div>
            <div className="h-[12vh] w-[6vw]">
              <img
                src="../testbanner.jpg"
                className="w-full h-full rounded-xl"
              />
            </div>
            <div className="text-white font-bold text-2xl">
              <h1>Faded</h1>
            </div>
            <div className="flex gap-2">
              <p className="text-gray-400">Song |</p>
              <h1>Alan Walker</h1>
            </div>
          </div>
        </div>

        <div className="w-[75%]  p-1 flex-col flex gap-2">
          <div className="text-white font-bold text-2xl">
            <h1>Songs</h1>
          </div>
          <div className="flex flex-col">
            <div className="songsContainer w-full rounded-md flex justify-between hover:bg-[#2A2A2A] p-2">
              <div className=" flex gap-2">
                <div className="h-12 w-12 rounded-md relative">
                  <img
                    src="../testbanner.jpg"
                    className="w-full rounded-md h-full object-cover"
                  />
                  <div className="hoverBannerPlayBtn absolute bg-[#2a2a2a9c] flex items-center justify-center h-12 w-12 top-0 rounded-md">
                    <button>
                      <FaPlay className="text-xl" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="font-bold">
                    <a href="#">Faded</a>
                  </div>
                  <div className="text-[#A3A3A3]">
                    <a href="#">Alan Walker</a>
                  </div>
                </div>
              </div>
              <div className="flex gap-10 justify-center items-center px-4">
                <div className="Liked flex items-center">
                  <button>
                    <IoIosHeartEmpty className="text-xl text-[#afafaf] hover:text-[#ffffff] " />
                  </button>
                </div>
                <div className="text-[#bababa]">3:32</div>
                <div className="threeDots flex items-center">
                  <button>
                    <BsThreeDots className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
            <div className="songsContainer w-full rounded-md flex justify-between hover:bg-[#2A2A2A] p-2">
              <div className=" flex gap-2">
                <div className="h-12 w-12 rounded-md relative">
                  <img
                    src="../testbanner.jpg"
                    className="w-full rounded-md h-full object-cover"
                  />
                  <div className="hoverBannerPlayBtn absolute bg-[#2a2a2a9c] flex items-center justify-center h-12 w-12 top-0 rounded-md">
                    <button>
                      <FaPlay className="text-xl" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="font-bold">
                    <a href="#">Faded</a>
                  </div>
                  <div className="text-[#A3A3A3]">
                    <a href="#">Alan Walker</a>
                  </div>
                </div>
              </div>
              <div className="flex gap-10 justify-center items-center px-4">
                <div className="Liked flex items-center">
                  <button>
                    <IoIosHeartEmpty className="text-xl text-[#afafaf] hover:text-[#ffffff] " />
                  </button>
                </div>
                <div className="text-[#bababa]">3:32</div>
                <div className="threeDots flex items-center">
                  <button>
                    <BsThreeDots className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
            <div className="songsContainer w-full rounded-md flex justify-between hover:bg-[#2A2A2A] p-2">
              <div className=" flex gap-2">
                <div className="h-12 w-12 rounded-md relative">
                  <img
                    src="../testbanner.jpg"
                    className="w-full rounded-md h-full object-cover"
                  />
                  <div className="hoverBannerPlayBtn absolute bg-[#2a2a2a9c] flex items-center justify-center h-12 w-12 top-0 rounded-md">
                    <button>
                      <FaPlay className="text-xl" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="font-bold">
                    <a href="#">Faded</a>
                  </div>
                  <div className="text-[#A3A3A3]">
                    <a href="#">Alan Walker</a>
                  </div>
                </div>
              </div>
              <div className="flex gap-10 justify-center items-center px-4">
                <div className="Liked flex items-center">
                  <button>
                    <IoIosHeartEmpty className="text-xl text-[#afafaf] hover:text-[#ffffff] " />
                  </button>
                </div>
                <div className="text-[#bababa]">3:32</div>
                <div className="threeDots flex items-center">
                  <button>
                    <BsThreeDots className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
            <div className="songsContainer w-full rounded-md flex justify-between hover:bg-[#2A2A2A] p-2">
              <div className=" flex gap-2">
                <div className="h-12 w-12 rounded-md relative">
                  <img
                    src="../testbanner.jpg"
                    className="w-full rounded-md h-full object-cover"
                  />
                  <div className="hoverBannerPlayBtn absolute bg-[#2a2a2a9c] flex items-center justify-center h-12 w-12 top-0 rounded-md">
                    <button>
                      <FaPlay className="text-xl" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="font-bold">
                    <a href="#">Faded</a>
                  </div>
                  <div className="text-[#A3A3A3]">
                    <a href="#">Alan Walker</a>
                  </div>
                </div>
              </div>
              <div className="flex gap-10 justify-center items-center px-4">
                <div className="Liked flex items-center">
                  <button>
                    <IoIosHeartEmpty className="text-xl text-[#afafaf] hover:text-[#ffffff] " />
                  </button>
                </div>
                <div className="text-[#bababa]">3:32</div>
                <div className="threeDots flex items-center">
                  <button>
                    <BsThreeDots className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-white font-bold text-2xl"><h1>Featuring</h1></div>
        <div className="flex gap-1">
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-white font-bold text-2xl"><h1>Artists</h1></div>
        <div className="flex gap-1">
          <CircleCards/>
        </div>
      </div>
    </div>
  );
}

export default AfterSearch;