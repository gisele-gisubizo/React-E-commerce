import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'

function Layout() {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <Footer/>
        <Outlet/>
    </div>

  )
}

export default Layout