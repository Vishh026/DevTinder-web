import {useSelector } from "react-redux"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const user = useSelector(store => store.user.userInfo) || {};
  
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-zinc-900 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer select-none">
            <div className="h-9 w-9 rounded-lg bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
              D
            </div>
            <NavLink className="hidden sm:block text-[15px] font-medium text-gray-200 tracking-wide">
              DevTinder
            </NavLink>
          </div>

          {/* (Optional) Search bar can go here if needed */}

          {/* User Info */}
         { user && <div className="flex items-center gap-3 cursor-pointer group">
            <div className="hidden sm:flex flex-col text-right leading-tight">
              <span className="text-sm font-medium text-gray-200">
                Welcome
              </span>
              <span className="text-xs text-gray-400 group-hover:text-gray-300 transition">
               {user?.firstName}
              </span>
            </div>

            <div className="relative">
              <img
                src= {user?.profile}
                alt="user"
                className="h-10 w-10 rounded-full border border-white/10 object-cover
                           group-hover:ring-2 group-hover:ring-purple-500/40 transition-all duration-200"
              />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 ring-2 ring-[#0b0f14]" />
            </div>
          </div>}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
