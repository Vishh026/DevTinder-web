import { Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../store/reducers/userSlice";
import { BASE_URL } from "../utils/constant";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("radhe@gmail.com");
  const [password, setPassword] = useState("Test@123");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = async () => {
    setError("");
    try {
      const { data } = await axios.post(
        BASE_URL + "/login",
        { email, password },
        { withCredentials: true }
      );

      dispatch(addUser(data.user));
      toast.success("Welcome back 👋");
      navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-900 to-black px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8">

          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">
              ♥
            </div>
            <h1 className="text-2xl font-semibold text-white mt-4">
              DevTinder
            </h1>
            <p className="text-sm text-white/60 mt-1">
              Match. Collaborate. Build.
            </p>
          </div>

          {/* Email */}
          <div className="relative mb-4">
            <Mail className="absolute left-3 top-3 text-white/40" size={18} />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-800 text-white border border-white/10
                         focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500/40"
            />
          </div>

          {/* Password */}
          <div className="relative mb-3">
            <Lock className="absolute left-3 top-3 text-white/40" size={18} />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-800 text-white border border-white/10
                         focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500/40"
            />
          </div>

          {/* Error */}
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-rose-400 mb-4 px-1"
            >
              {error}
            </motion.p>
          )}

          {/* Login Button */}
          <button
            onClick={loginHandler}
            className="w-full py-3 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500
                       text-white font-semibold shadow-lg hover:scale-[1.02] active:scale-95 transition"
          >
            Login
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-white/50 mt-6">
            New here?{" "}
            <span className="text-pink-400 cursor-pointer hover:underline">
              Create an account
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
