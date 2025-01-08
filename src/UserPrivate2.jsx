import React from 'react'
import PrivaRoue from './PrivaRoue'
import { Navigate, Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Header from './MarchantDashboard/Pages/HomePage/Header'
import { useSelector } from 'react-redux'

const UserPrivate2 = () => {
  return (
    <>
<Header/>  
  <Outlet/> 

 
<Footer/>
    </>
  )
}

export default UserPrivate2
