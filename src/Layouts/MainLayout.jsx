import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from '../components/ErrorPage'

const MainLayout = () => {
  return (
    <>
     <ErrorBoundary 
     fallback={<ErrorPage />}>
        <Navbar />
        <Outlet />
        <ToastContainer />
     </ErrorBoundary>
    </>
  )
}

export default MainLayout
