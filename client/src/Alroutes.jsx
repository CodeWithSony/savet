import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import DashBoared from './pages/DashBoared/DashBoared'
import Auth from './pages/Auth/Auth'

const Alroutes = () => {
  return (
    <>
    <Routes>
    {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/" element={<DashBoared/>} />
          <Route path="/Auth" element={<Auth/>} />
    </Routes>
      
    </>
  )
}

export default Alroutes
