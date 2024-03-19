import React from 'react'
import { MdOutlineDashboard } from "react-icons/md";
import { LuPackage } from "react-icons/lu";
import { SiGoogleanalytics } from "react-icons/si";
import { FiUsers } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";


const sidebar = () => {
  return (
    <main className='w-[20%] max-xl:hidden min-h-screen bg-gray-100 font-[400] text-sm'>
    <div className='flex flex-col gap-5 justify-center items-center pt-20'>
        <div className='w-[80%] max-xl:w-auto px-10 p-3 mb-6 flex items-center border-2 border-gray-400 rounded-full border-hidden hover:border-solid hover:bg-white hover:shadow-md'><MdOutlineDashboard className='w-8 h-6 mr-5 text-gray-500' /> Dashboard</div>
        <div className='w-[80%] max-xl:w-auto px-10 p-3 flex items-center border-2 border-gray-400 rounded-full border-hidden hover:border-solid hover:bg-white hover:shadow-md'><LuPackage className='w-8 h-6 mr-5 text-gray-500' /> Products</div>
        <div className='w-[80%] max-xl:w-auto px-10 p-3 flex items-center border-2 border-gray-400 rounded-full border-hidden hover:border-solid hover:bg-white hover:shadow-md'><SiGoogleanalytics className='w-8 h-6 mr-5 text-gray-500' /> Analytics</div>
        <div className='w-[80%] max-xl:w-auto px-10 p-3 mb-14 flex items-center border-2 border-gray-400 rounded-full border-hidden hover:border-solid hover:bg-white hover:shadow-md'><FiUsers className='w-8 h-6 mr-5 text-gray-500' /> Customers</div>
        <div className='w-[80%] max-xl:w-auto px-10 p-3 flex items-center border-2 border-gray-400 rounded-full border-hidden hover:border-solid hover:bg-white hover:shadow-md'><FaRegUser className='w-8 h-6 mr-5 text-gray-500' /> Profile</div>
        <div className='w-[80%] max-xl:w-auto px-10 p-3 flex items-center border-2 border-gray-400 rounded-full border-hidden hover:border-solid hover:bg-white hover:shadow-md'><IoSettingsOutline className='w-8 h-6 mr-5 text-gray-500' /> Setting</div>
    </div>
</main>

  )
}

export default sidebar