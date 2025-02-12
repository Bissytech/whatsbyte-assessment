import React from 'react'
import { MdDashboard } from "react-icons/md";
import { SiHyperskill } from "react-icons/si";
import { FiFolder } from "react-icons/fi";

const Sidebar = ()=> {
    return (
        <div>
            
            <div className='px-4 pt-8 pb-4'>
            <div className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-300 p-2 rounded-md group cursor-pointer hover:shadow-1g m-auto'>
            <MdDashboard  className='text-2xl text-gray-600 group-hover:text-blue-400'/>
            <h3 className='text-base text-gray-800 group-hover:text-blue-400 font-semibold'>Dashboard</h3>
            </div>
            <div className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-300 p-2 rounded-md group cursor-pointer hover:shadow-1g m-auto'>
            <SiHyperskill className='text-2xl text-gray-600 group-hover:text-blue-400'/> 
            <h3 className='text-base text-gray-800 group-hover:text-blue-400 font-semibold'>Skill Test</h3>
            </div>
            <div className='flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-300 p-2 rounded-md group cursor-pointer hover:shadow-1g m-auto'>
            <FiFolder className='text-2xl text-gray-600 group-hover:text-blue-400' />
            <h3 className='text-base text-gray-800 group-hover:text-blue-400 font-semibold'>Internship</h3>
            </div>
            </div>
        </div>
    )
        
    
}

export default Sidebar