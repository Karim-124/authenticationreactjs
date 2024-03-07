import React from 'react'
import TopBar from './TopBar';
import SideBar from './SideBar';

function Dashbord() {
    return (
        <>
            <TopBar />
            <div className='flex justify-between'>
                <div className='bg-gray-500 w-1/5 border-r-2 h-svh p-10'>
                    <SideBar />
                </div>
                <div className=''>Test</div>
            </div>
        </>
    )
}

export default Dashbord