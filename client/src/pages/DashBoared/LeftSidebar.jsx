import React from 'react'
import { Link } from 'react-router-dom'

const LeftSidebar = () => {
  return (
    <div className='flex flex-col w-1/5'>
      <ul className='flex flex-col bg-violet-400 pt-8 text-white w-full' >
      <li className='m-4'> <Link to="" className='p-2 text-white font-extrabold	text-4xl  ui-monospace'>Let's Go</Link> </li>
      <li className='m-4 hover:bg-green-400 p-2 pl-0'> <Link to="/Dashboard">Dashboard</Link> </li>
        <li className='m-4 hover:bg-green-400 p-2 pl-0'> <Link to="/UserManagement">User Management</Link> </li>
        <li className='m-4 hover:bg-green-400 p-2 pl-0'> <Link to="/PackageManagement">Package Management</Link> </li>
        <li className='m-4 hover:bg-green-400 p-2 pl-0'> <Link to="/ExpiredPackages">Expired Packages</Link> </li>
        <li className='m-4 hover:bg-green-400 p-2 pl-0'> <Link to="/BannerManagement">Banner Management</Link> </li>
        <li className='m-4 hover:bg-green-400 p-2 pl-0'> <Link to="/CategoryManagement"> Category Management</Link> </li>
        <li className='m-4 hover:bg-green-400 p-2 pl-0'> <Link to="/BookingManagement">Booking Management</Link> </li>
        <li className='m-4 hover:bg-green-400 p-2 pl-0'> <Link to="/OfferManagement">Offer Management</Link> </li>
        <li className='m-4 hover:bg-green-400 p-2 pl-0'> <Link to="/CouponManagement">Coupon Management</Link> </li>
        <li className='m-4 hover:bg-green-400 p-2 pl-0'> <Link to="/SalesReport">Sales Report</Link> </li>
        <li className='m-4 hover:bg-green-400 p-2 pl-0'> <Link to="/LogOut">Log Out</Link> </li>
      </ul>
    </div>
  )
}

export default LeftSidebar
