import { FaPlay } from "react-icons/fa"; 
import React from 'react'

function PodcastCards({items}) {
    console.log(items);
    const podcastData = items;
  return (
    <div  className='cardContainer h-[30vh] w-[10vw] flex justify-center gap-3 items-center flex-col rounded-xl relative hover:bg-[#191919] text-white cursor-pointer'>
      <div className='banner h-[60%] w-[90%] rounded-xl'>
        {/* <img className='h-full w-full rounded-xl overflow-hidden' src={"../banner.jpg"}/> */}
        {podcastData && podcastData.data.coverArt.sources[1].url ? (
          <img className='h-full w-full rounded-xl overflow-hidden' src={podcastData.data.coverArt.sources[1].url} alt="Playlist Banner"/>
        ) : (
          <img className='h-full w-full rounded-xl overflow-hidden' src="../banner.jpg" alt="Default Banner"/>
        )}
      </div>
      <div className='w-full ml-2 pb-4'>
        <h1 className='text-md font-medium'>{podcastData && podcastData.data.name?podcastData.data.name  :"Default Name"}</h1>
        <p className="text-[#A3A3A3] text-[13px] font-semibold pt-1">{podcastData && podcastData.data.publisher.name?podcastData.data.publisher.name: "unknown"}</p>
      </div>
      <div className='playBtn absolute h-[6vh] w-[3vw] bg-green-500 rounded-full left-[6vw] top-[7.5vw] hover:scale-105 hover:bg-green-400'><FaPlay className='w-1/2 h-1/2 translate-x-1/2 translate-y-1/2 text-black'/></div>
    </div>
  )
}

export default PodcastCards
