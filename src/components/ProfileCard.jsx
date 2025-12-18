import axios from "axios";
import { Calendar, User, Heart, X } from "lucide-react";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { removeFeed } from "../store/reducers/feedSlice";
import toast from "react-hot-toast"

const ProfileCard = ({ user }) => {
  const dispatch = useDispatch()
  if (!user) return null;
  console.log("profile:",user.profile);
  

  const handleSendRequest = async(status,userid) => {
    // /request/send/:status/:userid
    try {
      const {data} = await axios.post(`${BASE_URL}/request/send/${status}/${userid}`,{},{withCredentials:true})
      console.log(data.data);
      dispatch(removeFeed(userid))
      toast.success("Request sent successfully!")
    } catch (error) {
      console.error("Error:",error.message)
    }
  }

  return (
    <div className="relative w-72 max-w-xs bg-zinc-900 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
      
      {/* Profile Image */}
      <div className="relative h-68">
        <img
          src={user?.profile || "https://via.placeholder.com/400x500"}
          alt={user.firstName}
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Verified Badge */}
        {user.isVerified && (
          <span className="absolute top-4 left-4 text-xs px-3 py-1 rounded-full bg-white/90 text-black font-semibold">
            Verified
          </span>
        )}

        {/* Name & Info */}
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-2xl font-bold text-white">{user.firstName} {user.lastName}</h2>
          {(user.age || user.gender) && (
            <div className="flex gap-2 mt-1 text-sm text-white/70">
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
        </div>
      </div>

      {/* Bio */}
      <div className="px-5 py-2">
        <p className="text-sm text-white/70 leading-relaxed line-clamp-3">
          {user.bio || "Creative mind, coffee lover ☕, always learning."}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center px-6 pb-6 mt-2">
        <button
        onClick={() => handleSendRequest("ignored",user._id)}
         className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center shadow hover:scale-105 transition">
          <X size={28} className="text-white/80" />
        </button>
        <button
        onClick={() => handleSendRequest("interested",user._id)}
         className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center shadow-lg hover:scale-110 transition">
          <Heart size={30} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
