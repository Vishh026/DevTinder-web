import { motion } from "framer-motion";
import { Briefcase, Info, BadgeCheck } from "lucide-react";

const UserPublicProfile = ({ user }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-80 rounded-3xl overflow-hidden
      bg-linear-to-br from-zinc-900 to-zinc-800
      border border-white/10 shadow-2xl"
    >
      {/* Header linear */}
      <div className="h-32 bg-linear-to-r from-purple-500 to-pink-500 flex justify-center items-end">
        <img
          src={
            user?.profile ||
            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt="profile"
          className="w-24 h-24 rounded-full border-4 border-zinc-900 object-cover translate-y-10"
        />
      </div>

      {/* Body */}
      <div className="pt-14 px-6 pb-6 space-y-4">
        {/* Name */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-white">
            {user?.firstName || "Your"} {user?.lastName || "Name"}
          </h2>

          <p className="text-sm text-gray-400 mt-1">Professional Profile</p>
        </div>

        {/* Skills */}
        <div className="flex items-start gap-3">
          <Briefcase size={18} className="text-purple-400 mt-1" />
          <p className="text-sm text-gray-300">
            {user?.skills || "React • Node • UI/UX"}
          </p>
        </div>

        {/* Bio */}
        <div className="flex items-start gap-3">
          <Info size={18} className="text-pink-400 mt-1" />
          <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
            {user?.bio ||
              "Passionate developer focused on building clean, scalable products."}
          </p>
        </div>
        {user?.gender && (
          <div className="flex items-start gap-3">
            <Info size={18} className="text-pink-400 mt-1" />
            <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
              {user?.gender}
            </p>
          </div>
        )}
        {typeof user?.age === "number" && (
          <InfoRow icon={Info} color="text-pink-400">
            {user.age} years old
          </InfoRow>
        )}

        {/* Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-white/10 text-xs text-gray-500">
          <span className="flex items-center gap-1 text-green-400">
            <BadgeCheck size={14} />
            Available for work
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default UserPublicProfile;
