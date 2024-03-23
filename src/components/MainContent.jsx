import React from 'react'
import App from '../App'
import SearchFeed from './SearchFeed'
import HomeFeed from './HomeFeed'

function MainContent() {
  return (
    <div className='MCcontainer w-[80%] ml-[20%] h-full p-1'>
      {/* <SearchFeed/> */}
      <HomeFeed/>
    </div>
  )
}

export default MainContent
