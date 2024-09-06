import React from 'react'
import Logo from '../../assets/hunnovate.png'
import { useState } from 'react';
import { DASHBOARD_SIDEBAR_LINKS } from '../Lib/Constants/Navigation';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';



const linkClass = 'font-light px-3 py-2 hover:bg-neutral-700 active:bg-neutral-600 rounded-md text-base'

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  


  const [isOverviewOpen, setIsOverviewOpen] = useState(false);

  const toggleOverview = () => {
    setIsOverviewOpen(!isOverviewOpen);
  };




  return (
    <div className="flex h-screen text-white">
      <div className={`fixed inset-y-0 left-0 z-30 w-64 bg-[#0D0D12] transition-transform transform ${ isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:inset-0`}>
        <div className='h-full p-4 text-white'>
        <a href='#'>
            <img className='w-2/3' src={Logo} alt="logo" />
          </a>
          <div className='flex-1'>
          <div className="my-4 px-5">
            <button onClick={toggleOverview} className="flex items-center font justify-between w-full text-left focus:outline-none">
              <span className="flex items-center ">
                <i className="fas fa-chart-bar mr-2"></i> Overview
              </span>
              <i className={`fas fa-chevron-${isOverviewOpen ? 'up' : 'down'}`}></i>
            </button>
            
            {isOverviewOpen && (
              <div className="flex flex-col gap-2 pt-3 ">
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                  <SidebarLinks key={item.key} item={item}  />
                  
                ))}
                
              </div>
            )}
          </div>
          </div>
        </div>

          
          
      </div>
      
        <div className="p-4">
          {/* Hamburger Button for small screens */}
          <button className="md:hidden p-2 text-gray-500 rounded-md focus:outline-none" onClick={toggleSidebar}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7">

                </path>
            </svg>
          </button>
        </div>
      

      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  )
}

function SidebarLinks({ item }) {

  const { pathname } = useLocation()


  return (
    <Link to={item.path} className={classNames(pathname === item.path ? 'bg-neutral-700 text-white font-semibold' : 'text-neutral-400', linkClass)} >
      {item.label}
    </Link>
  )
}

export default Sidebar