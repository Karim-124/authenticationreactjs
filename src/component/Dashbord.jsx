import React from 'react'
import TopBar from './TopBar';
import SideBar from './SideBar';

function Dashbord() {
    return (
        <>
            <TopBar />
            <div className='flex justify-around'>
                <div className=''>
                    <SideBar />
                </div>
                <div>Test</div>
            </div>
        </>
    )
}

export default Dashbord