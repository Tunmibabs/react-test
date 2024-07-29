import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}


const Navbar = () => {
  const linkClass = ({isActive}) => isActive ? ' bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 hideOnMobile' : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 hideOnMobile"
  const link = ({isActive}) => isActive ? ' bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 ' : "text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 "
  return (
    <>
      <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between bg">
          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-10 w-auto"
                src= { logo }
                alt="React Jobs"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >React Jobs</span
              >
            </NavLink>
            <div className="md:ml-auto ">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={linkClass} 
                  >Home</NavLink>
                <NavLink
                  to="/jobs"
                  className={linkClass}
                  >Jobs</NavLink>
                <NavLink
                  to="/add-job"
                  className={linkClass}
                  >Add Job</NavLink>
                <NavLink
                className="burger"
                  onClick={(showSidebar)}
                  to="#"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="white"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" className='hamburger'/></svg>
                </NavLink>
              </div>
            </div>
          </div>

          <div
            className="sidebar">
            <NavLink 
              className={close}
              onClick={(hideSidebar)}
            to="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="400px" fill="#5f6368"  className='close'><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </NavLink>
            <div className="md:ml-auto">
              <ul className="bar">
                <li
                  className={linkClass} 
                  ><NavLink className={link}to="/">Home</NavLink></li>
                <li
                  className={linkClass}
                  ><NavLink className={link} to="/jobs">Jobs</NavLink></li>
                <li
                  className={linkClass}
                  ><NavLink className={link} to="/add-job">Add Job</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
