import React from 'react'
import TopBar from './TopBar';
import SideBar from './SideBar';
import Users from './Users';
import { Outlet, Route, Routes } from 'react-router-dom';

function Dashbord() {
    return (
        <>
            <TopBar />
            <div className='flex justify-between'>
                <div className='bg-gray-900 w-1/5 border-r-2 h-svh p-10'>
                    <SideBar />
                </div>
                <div className=' w-full  p-10'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Dashbord