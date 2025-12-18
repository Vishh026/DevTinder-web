import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { removeUser } from "../store/reducers/userSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "../utils/constant";
import { LogOut, User, Users, Inbox } from "lucide-react";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        BASE_URL + "/logout",
        {},
        { withCredentials: true }
      );
      dispatch(removeUser());
      toast.success("Logged out");
      navigate("/login");
    } catch (err) {
      toast.error("Logout failed");
    }
  };

  if (!user) return null;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-14 flex items-center justify-between">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-linear-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white font-bold shadow-md">
              ♥
            </div>
            <span className="hidden sm:block text-lg font-semibold text-white tracking-wide">
              DevTinder
            </span>
          </NavLink>

          {/* User Menu */}
          <div className="relative group">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src={user?.profile}
                alt="profile"
                className="h-9 w-9 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-pink-500/50 transition"
              />
            </div>

            {/* Dropdown */}
            <div className="absolute right-0 mt-3 w-48 rounded-2xl bg-zinc-800/95 backdrop-blur-xl border border-white/10 shadow-2xl
                            opacity-0 invisible group-hover:opacity-100 group-hover:visible
                            transition-all duration-200">

              <NavLink
                to="/profile"
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/5 rounded-t-2xl"
              >
                <User size={16} /> Profile
              </NavLink>

              <NavLink
                to="/connections"
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/5"
              >
                <Users size={16} /> Connections
              </NavLink>

              <NavLink
                to="/requests"
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-white/80 hover:bg-white/5"
              >
                <Inbox size={16} /> Requests
              </NavLink>

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-rose-400 hover:bg-white/5 rounded-b-2xl"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
