import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import { LuBellDot } from "react-icons/lu";
import { FaChevronDown } from 'react-icons/fa6';

const Header = () => {
  return (
    <div className='bg-white md:px-4 px-2 flex md:justify-between justify-end items-center my-6'>
      <div className='relative md:block hidden'>
        <HiOutlineSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
        <input type="text" placeholder="Search" className='text-sm focus:outline-none active:outline-none h-10 lg:w-[24rem] w-[10rem] border border-gray-300 rounded-lg pr-4 pl-10' />
      </div>
      <div className='flex items-center gap-4'>
        <div className='flex items-center'>
          <LuBellDot className='text-2xl' />
        </div>
        <div className='flex items-center md:gap-4 gap-2'>
          <h1 className='text-white bg-[#077EF0] h-12 w-12 hidden items-center justify-center rounded-full md:flex'>A</h1>
          <div className='flex flex-col gap-1'>
            <div className='flex items-center md:gap-7 gap-4'>
            <p>Admin</p>
            <FaChevronDown />
            </div>
            
            <p className='hidden md:block'>admin@hunnovate.com</p>
            
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Header