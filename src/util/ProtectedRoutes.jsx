import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BottomNavbar from '../components/BottomNavbar';

function ProtectedRoutes() {
    const user = null;
  return (
    <>
        <Navbar/>
        {
            user ? <Outlet/> : <Navigate to='/login'/>
        }
    </>
  )
}

export default ProtectedRoutes