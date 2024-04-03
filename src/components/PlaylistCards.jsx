import React from 'react'
import { FaPlay } from "react-icons/fa"; 

function PlaylistCards({items}) {
    const playlistData = items;

  return (
    <div  className='cardContainer h-[30vh] w-[10vw] flex justify-center gap-3 items-center flex-col rounded-xl relative hover:bg-[#191919] text-white cursor-pointer'>
      <div className='banner h-[60%] w-[90%] rounded-xl'>
        {/* <img className='h-full w-full rounded-xl overflow-hidden' src={playlistData.data.images.items[0].sources[0].url || "../banner.jpg"}/> */}
        {playlistData && playlistData.data.images.items[0].sources[0].url ? (
          <img className='h-full w-full rounded-xl overflow-hidden' src={playlistData.data.images.items[0].sources[0].url} alt="Playlist Banner"/>
        ) : (
          <img className='h-full w-full rounded-xl overflow-hidden' src="../banner.jpg" alt="Default Banner"/>
        )}
      </div>
      <div className='w-full ml-2 pb-4'>
        <h1 className='text-md font-medium'>{playlistData && playlistData.data.name ? playlistData.data.name : "Default Name"}</h1>
        <p className="text-[#A3A3A3] text-[13px] font-semibold pt-1">By {playlistData && playlistData.data.owner.name ? playlistData.data.owner.name : "Unknown"}</p>
      </div>
      <div className='playBtn absolute h-[6vh] w-[3vw] bg-green-500 rounded-full left-[6vw] top-[7.5vw] hover:scale-105 hover:bg-green-400'><FaPlay className='w-1/2 h-1/2 translate-x-1/2 translate-y-1/2 text-black'/></div>
    </div>
  )
}

export default PlaylistCards
