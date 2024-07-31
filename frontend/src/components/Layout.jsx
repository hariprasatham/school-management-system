import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

import useIsCollapsed from '@/hooks/use-is-collapsed'

const Layout = () => {
    const [collapsed, setCollapsed] = useIsCollapsed()
  return (
    <div>
        <Sidebar  collapsed={collapsed} setCollapsed={setCollapsed}/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout