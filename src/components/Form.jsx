import React from 'react'

const Form = () => {


    

    const inputBase =
    "w-full pl-11 pr-4 py-3 rounded-xl bg-[#0b0f1a] text-white border border-white/10 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition";

  const iconBase =
    "absolute left-4 top-1/2 -translate-y-1/2 text-gray-400";

  return (
    
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
                value={profile}
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
  )
}

export default Form
