import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { ErrorBoundary } from 'react-error-boundary';

const MainLayout = () => {
  return (
    <>
     <ErrorBoundary fallback={<h1>Error occured, please try again</h1>} >
        <Navbar />
        <Outlet />
        <ToastContainer />
     </ErrorBoundary>
    </>
  )
}

export default MainLayout
