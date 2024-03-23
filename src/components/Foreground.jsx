import React from 'react'
import App from '../App'
import Card from './Card'
import Sidebar from './Sidebar'
import MainContent from './MainContent'

function Foreground() {
  return (
    <div className='h-full w-full bg-black flex'>
      <Sidebar/>
      <MainContent/>
    {/* <App /> */}
    </div>
  )
}

export default Foreground
