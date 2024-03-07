import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
    return (
        <Link to='/dashboard/users' className='text-white'>Users</Link>
    )
}

export default SideBar