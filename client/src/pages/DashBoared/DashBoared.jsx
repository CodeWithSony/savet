import React from 'react'
import LeftSidebar from './LeftSidebar'
import MainBar from './MainBar'

const DashBoared = () => {
  return (
    <div className='flex w-12/12 mx-auto bg-sky-400 h-screen gap-x-6 mt-[2rem]'>
      <LeftSidebar/>
      <MainBar/>
      
    </div>
  )
}

export default DashBoared
