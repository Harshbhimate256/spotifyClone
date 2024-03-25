import React from 'react'
import App from '../App'
import SearchFeed from './SearchFeed'
import HomeFeed from './HomeFeed'

function MainContent({showSearch,data,setinput,call}) {
  return (
    <div className='MCcontainer w-[80%] ml-[20%] h-full p-1'>
      {showSearch ? <SearchFeed data={data} setInput={setinput} Call={call}/>: <HomeFeed/> }
    </div>
  )
}

export default MainContent
