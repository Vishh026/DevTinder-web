import Navbar from "../components/Navbar"
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="bg-zinc-800 w-full h-screen">
      <Navbar />
      <main className='pt-16'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
