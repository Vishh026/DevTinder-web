import {
  Mail,
  User,
  Briefcase,
  Info,
  Users,
  Calendar,
  Image,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../store/reducers/userSlice";
import { BASE_URL } from "../utils/constant";
import UserPublicProfile from "./userPublicProfile";
import toast from "react-hot-toast";

const EditForm = ({user}) => {
    
  const [firstName, setfirstName] = useState(user.firstName);
  const [lastName, setlastName] = useState(user.lastName);
  const [gender, setgender] = useState(user.gender);
  const [age, setage] = useState(user.age);
  const [bio, setbio] = useState(user.bio);
  const [skills, setskills] = useState(user.skills);
  const [phone, setphone] = useState(user.phone);
  const [profile, setprofile] = useState(user.profile);

  const [error ,setError] = useState()

  const dispatch = useDispatch();

  const updateProfile = async () => {
    try {
        setError('')
      const {data}= await axios.patch(BASE_URL + "/profile/edit",{
        firstName,lastName,gender,age,bio,phone,profile,skills
      },{
        withCredentials:true
      })
      
      dispatch(addUser(data?.data));
      toast.success("Profile updated successfully!");
    } catch (err) {
  // Axios errors usually have response.data.message or response.data.error
  const errorMessage =
    err.response?.data?.message || 
    err.response?.data?.error ||   
    err.message ||                 
    "Something went wrong";

  setError(errorMessage);
}

  };

  const defaultImage = "https://cdn-icons-png.flaticon.com/512/149/149071.png"

  const inputBase =
    "w-full pl-11 pr-4 py-3 rounded-xl bg-[#0b0f1a] capitalized text-white border border-white/10 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition";

  const iconBase =
    "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400";

  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-10">
      {/* FORM */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-linear-to-br from-zinc-900 to-zinc-800 border border-white/10 rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-white">
              Update Profile
            </h1>
            <p className="text-sm text-gray-400 mt-2">
              Keep it clean. Keep it real.
            </p>
          </div>

          <div className="space-y-4">
            {/* First Name */}
            <div className="relative">
              <User className={iconBase} size={18} />
              <input
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
                placeholder="First Name"
                className={inputBase}
              />
            </div>

            {/* Last Name */}
            <div className="relative">
              <User className={iconBase} size={18} />
              <input
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
                placeholder="Last Name"
                className={inputBase}
              />
            </div>

            {/* Skills */}
            <div className="relative">
              <Briefcase className={iconBase} size={18} />
              <input
                value={skills}
                onChange={(e) => setskills(e.target.value)}
                placeholder="Skills (React, Node, UI/UX)"
                className={inputBase}
              />
            </div>

            {/* Bio */}
            <div className="relative">
              <Info className={iconBase} size={18} />
              <input
                value={bio}
                onChange={(e) => setbio(e.target.value)}
                placeholder="Short bio"
                className={inputBase}
              />
            </div>

            {/* Gender */}
            <div className="relative">
              <Users className={iconBase} size={18} />
              <input
                value={gender}
                onChange={(e) => setgender(e.target.value)}
                placeholder="Gender"
                className={inputBase}
              />
            </div>

            {/* Age */}
            <div className="relative">
              <Calendar className={iconBase} size={18} />
              <input
                value={age}
                onChange={(e) => setage(e.target.value)}
                placeholder="Age"
                className={inputBase}
              />
            </div>

            {/* Profile Image */}
            <div className="relative">
              <Image className={iconBase} size={18} />
              <input
                value={profile || defaultImage}
                onChange={(e) => setprofile(e.target.value)}
                placeholder="Profile Image URL"
                className={inputBase}
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className={iconBase} size={18} />
              <input
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                placeholder="Phone Number"
                className={inputBase}
              />
            </div>
          </div>
         <p className="text-red-600 text-sm">{error}</p>

          {/* Button */}
          <button
            onClick={updateProfile}
            className="mt-8 w-full py-3 rounded-xl font-semibold text-white
            bg-linear-to-r from-purple-500 to-pink-500
            hover:from-purple-600 hover:to-pink-600
            transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
          >
            Save Profile
          </button>
        </div>
      </motion.div>

      {/* PREVIEW */}
      <div className="w-full max-w-sm">
        <UserPublicProfile  user = {user}/>
      </div>
    </div>
  );
};

export default EditForm;
