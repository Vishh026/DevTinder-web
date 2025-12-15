import { Mail, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("akshay@gmail.com");
  const [password, setPassword] = useState("Test@123");

  const loginHandler = async () => {
    try {
      await axios.post(
        "http://localhost:7777/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#0b0f1a] via-[#0e1424] to-[#05070f] px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-[#0f1423]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white tracking-wide">
              DevTinder
            </h1>
            <p className="text-sm text-gray-400 mt-2">
              Match. Collaborate. Build together.
            </p>
          </div>

          {/* Email */}
          <div className="relative mb-4">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="email"
              value={email}
              onChange={() => setEmail(email.target.value)}
              placeholder="Email address"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0b0f1a] text-white border border-white/10 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* Password */}
          <div className="relative mb-6">
            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="password"
              value={password}
              onChange={() => setPassword(password.target.value)}
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0b0f1a] text-white border border-white/10 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* Login Button */}
          <button
            onClick={loginHandler}
            className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 transition-all duration-200 text-white font-medium"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-gray-400">OR</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-gray-500 mt-6">
            New here?{" "}
            <span className="text-purple-400 cursor-pointer hover:underline">
              Create an account
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
