
import { Calendar, User } from "lucide-react";

const UserCart = ({ user }) => {
  if (!user) return null;

  return (
    <div className="relative w-80 bg-zinc-900 rounded-xl shadow-2xl mx-auto mt-12 overflow-hidden">
      {/* linear Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 via-pink-500/10 to-indigo-500/20 blur-3xl -z-10" />

      {/* Profile Image */}
      <div className="relative">
        <img
          src={user.profile || "https://via.placeholder.com/300x300.png?text=Profile"}
          alt={user.firstName}
          className="w-full h-72 object-cover rounded-b-3xl"
        />
        {/* Verified Badge */}
        {user.isVerified && (
          <span className="absolute top-4 right-4 bg-linear-to-r from-emerald-400 to-green-500 text-xs px-3 py-1 rounded-full font-semibold shadow-md text-black">
            ✓ Verified
          </span>
        )}
      </div>

      {/* Content */}
      <div className="relative p-5 text-zinc-100">
        {/* Name */}
        <h2 className="text-2xl font-bold tracking-wide">
          {user.firstName} {user.lastName}
        </h2>

        {/* Age & Gender */}
        {(user.age || user.gender) && (
          <div className="flex items-center gap-4 mt-1 text-sm text-zinc-400">
            {user.age && (
              <span className="flex items-center gap-1">
                <Calendar size={14} /> {user.age}
              </span>
            )}
            {user.gender && (
              <span className="flex items-center gap-1">
                <User size={14} /> {user.gender}
              </span>
            )}
          </div>
        )}

        {/* Bio */}
        <p className="mt-3 text-sm text-zinc-300 leading-relaxed line-clamp-3">
          {user.bio || "Minimal soul, creative mind, coffee lover ☕"}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <button className="flex-1 py-2 rounded-xl font-semibold text-white bg-linear-to-r from-violet-500 to-fuchsia-500 shadow-lg hover:scale-105 transition-transform">
            💜 Interested
          </button>
          <button className="flex-1 py-2 rounded-xl font-semibold text-white bg-linear-to-r from-rose-500 to-red-500 shadow-lg hover:scale-105 transition-transform">
            ❌ Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCart;
