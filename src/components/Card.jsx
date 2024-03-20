import React from 'react'
import { useEffect, useState } from "react";
function Card({albumData,key}) {
  const [coverArt, setcoverArt] = useState("");
  const coverArtData = albumData.data.coverArt.sources[0].url;

  return (
    <div className='h-[35vh] w-[15vw] bg-red-300 flex justify-center rounded-xl'>
      <div className='banner h-[65%] w-3/4 mt-4 bg-red-500 rounded-xl'>
        <img className='h-full w-full rounded-xl overflow-hidden' src={coverArtData}/>
      </div>
    </div>
  )
}

export default Card
