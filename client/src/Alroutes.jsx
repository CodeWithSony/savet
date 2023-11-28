import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import DashBoared from './pages/DashBoared/DashBoared'
import Products from './pages/Products/Products'
import Detail from './pages/Products/Detail'
import Auth from './pages/Auth/Auth'
import UserManagement from './components/UserManagement/UserManagement'

const Alroutes = () => {
  return (
    <>
    <Routes>
    {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/" element={<DashBoared/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/Detail" element={<Detail/>} />
          {/* <R path='/Products'></R/> */}
          <Route path="/Auth" element={<Auth/>} />
          <Route path="/UserManagement" element={<UserManagement/>} />
    </Routes>
      
    </>
  )
}

export default Alroutes
