import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '@/components/Sidebar'

const Layout = () => {
  return (
    <div className=''>
        <Sidebar />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout