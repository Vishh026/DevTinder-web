import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removeUser } from "../store/reducers/userSlice";
import axios from "axios"
import {BASE_URL} from "../utils/constant"
import toast from "react-hot-toast";

const Navbar = () => {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async() => {
    try {
      const {data}= await axios.post(BASE_URL + '/logout',{},{
        withCredentials:true
      })
      dispatch(removeUser(data))
      navigate('/login')
       toast.success("user logout successfully!");
    } catch (error) {
      console.error("ERROR:",error)
    }
  };

  if (!user) return null;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-zinc-900 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer select-none">
            <div className="h-9 w-9 rounded-lg bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
              D
            </div>
            <NavLink to="/" className="hidden sm:block text-sm font-medium text-gray-200">
              DevTinder
            </NavLink>
          </div>

          {/* User Profile */}
          {user && (
            <div className="relative group">
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="hidden sm:flex flex-col text-right">
                  <span className="text-xs text-gray-400">Welcome</span>
                  <span className="text-sm font-medium text-gray-200">
                    {user?.firstName}
                  </span>
                </div>

                <img
                  src={user?.profile}
                  alt="user"
                  className="h-10 w-10 rounded-full border border-white/10 object-cover
                             group-hover:ring-2 group-hover:ring-purple-500/40 transition"
                />
              </div>

              {/* Dropdown */}
              <div className="
                absolute right-0 mt-3 w-44 rounded-xl border border-white/10
                bg-zinc-800 shadow-xl opacity-0 invisible
                group-hover:opacity-100 group-hover:visible
                transition-all duration-200
              ">
                <NavLink
                  to="/profile"
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-zinc-700 rounded-t-xl"
                >
                  Profile
                </NavLink>

                <NavLink
                  to="/settings"
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-zinc-700"
                >
                  Settings
                </NavLink>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-zinc-700 rounded-b-xl"
                >
                  Logout
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
