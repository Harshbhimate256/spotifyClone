import React from 'react'
import { FaPlay } from "react-icons/fa"; 
function CircleCards() {
  return (
    <div  className='cardContainer h-[28vh] w-[9.5vw] flex justify-center items-center flex-col rounded-xl relative hover:bg-[#191919] text-white cursor-pointer'>
      <div className='banner h-[60%] w-[90%] rounded-full'>
        <img className='h-full w-full rounded-full overflow-hidden' src='../testbanner.jpg'/>
      </div>
      <div className='w-full ml-2 pb-4'>
        <h1 className='text-xl font-semibold'>Artist name</h1>
        <p className='text-[#868686]'>Artist</p>
      </div>
      <div className='playBtn absolute h-[6vh] w-[3vw] bg-green-500 rounded-full left-[6vw] top-[7.5vw] hover:scale-105 hover:bg-green-400'><FaPlay className='w-1/2 h-1/2 translate-x-1/2 translate-y-1/2 text-black'/></div>
    </div>
  )
}

export default CircleCards
