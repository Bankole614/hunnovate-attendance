import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from '../Header'

const Layout = () => {

  


  return (
    <div className='flex h-screen w-screen overflow-hidden'>
      <Sidebar />
        <div className='flex-1'>
          <Header />
          <div className='p-4'>{<Outlet />}</div>
        </div>
      
    </div>
  )
}

export default Layout