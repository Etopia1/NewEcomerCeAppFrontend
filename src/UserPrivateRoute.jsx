import React from 'react'
import PrivaRoue from './PrivaRoue'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Header from './MarchantDashboard/Header/Header'

const UserPrivateRoute = () => {
  return (
    <>
   <Header/>
      <Outlet/>
     
    </>
  )
}

export default UserPrivateRoute
