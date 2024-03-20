import React, { useRef } from 'react'
import { FaPlay } from "react-icons/fa";
import { useEffect, useState } from "react";
function Card({albumData} , {key}) {
  const [coverArt, setcoverArt] = useState("");
  const coverArtData = albumData.data.coverArt.sources[0].url;
  // setcoverArt(coverArtData);
  const albumName = albumData.data.name;
  const albumDate = albumData.data.date.year;
  const artistName = albumData.data.artists.items[0].profile.name;
  // const [hoverButton, sethoverButton] = useState("");
  // const playBtnDiv = useRef(null)
  // const hoverBtn = ()=>{
  //   sethoverButton("visible");
  //   playBtnDiv.classList.remove("invisible");
  //   playBtnDiv.classList.add("visible");
  // }

  return (

    <div  className='cardContainer h-[35vh] w-[15vw] bg-gradient-to-b from-sky-500 to-indigo-500 flex justify-center items-center flex-col rounded-xl relative'>
      <div className='banner h-[65%] w-3/4 mt-4  rounded-xl'>
        <img className='h-full w-full rounded-xl overflow-hidden' src={coverArtData}/>
      </div>
      <div className='w-full ml-2 pb-4'>
        <h1 className='text-3xl font-semibold'>{albumName}</h1>
        <p>{albumDate} . {artistName}</p>
      </div>
      <div className='playBtn absolute h-[8vh] w-[4vw] bg-gradient-to-b from-violet-500 to-fuchsia-500  rounded-full left-[10vw] top-[12.5vw] '><FaPlay className='w-1/2 h-1/2 translate-x-1/2 translate-y-1/2'/></div>
    </div>
  )
}

export default Card
