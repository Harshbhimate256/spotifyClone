import React from "react";
import { FaPlay } from "react-icons/fa";   
import { FaRegHeart } from "react-icons/fa";

function Track() {
  return (
    <div className="Tcontainer  h-[70vh] flex flex-col gap-5">
      <div className="flex bg-blue-700 h-[40vh] mt-[3.5vw] gap-5 pt-24 px-6">
        <div className="h-64 w-64 ">
          <img src="../banner.jpg" className="h-full w-full" />
        </div>
        <div className="flex flex-col  justify-end py-5 text-white">
          <h1 className="text-md font-bold">Song</h1>
          <h1 className="text-[4vw] font-bold">Track Name</h1>
          <div className="flex gap-1 justify-center items-center">
            <div className="h-8 w-8 rounded-full bg-black"></div>
            <a href="#" className="text-white hover:underline font-bold">
              Artist name
            </a>{" "}
            &#8226;{" "}
            <a href="#" className="text-white hover:underline">
              Album name
            </a>{" "}
            &#8226;
            <h1>2017</h1> &#8226;
            <h1>track duration</h1>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-5 px-10 items-center">
      <div className='playBtn  h-[6vh] w-[3vw] bg-green-500 rounded-full  hover:scale-105 hover:bg-green-400'><FaPlay className='w-1/2 h-1/2 translate-x-1/2 translate-y-1/2 text-black'/>
      </div>
      <a href="#">
        <FaRegHeart className="text-[#b1b0b0] text-[2vw] hover:text-white"/>
      </a>
      </div>
      
    </div>
  );
}

export default Track;
