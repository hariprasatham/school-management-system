
import { Outlet } from 'react-router-dom'
import Sidebar from '@/components/Sidebar'

const Layout = () => {
  return (
    <div className='relative h-full overflow-hidden bg-background'>
        <Sidebar />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default Layout