import React from 'react'
import { FaPlay } from "react-icons/fa";   
function Cards({items}) {
  // console.log(items)
  return (
    
    <div  className='cardContainer h-[30vh] w-[10vw] flex justify-center gap-3 items-center flex-col rounded-xl relative hover:bg-[#191919] text-white cursor-pointer'>
      <div className='banner h-[60%] w-[90%] rounded-xl'>
        <img className='h-full w-full rounded-xl overflow-hidden' src={items.data.images.items[0].sources[0].url}/>
      </div>
      <div className='w-full ml-2 pb-4'>
        <h1 className='text-md font-medium'>{items.data.name}</h1>
        <p className="text-[#A3A3A3] text-[13px] font-semibold pt-1">By {items.data.owner.name}</p>
      </div>
      <div className='playBtn absolute h-[6vh] w-[3vw] bg-green-500 rounded-full left-[6vw] top-[7.5vw] hover:scale-105 hover:bg-green-400'><FaPlay className='w-1/2 h-1/2 translate-x-1/2 translate-y-1/2 text-black'/></div>
    </div>
  )
}

export default Cards
