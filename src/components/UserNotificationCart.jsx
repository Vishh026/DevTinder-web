import React from "react";

const UserNotificationCart = ({ user, actions }) => {
  if (!user) return null;

  return (
    <div className="w-1/2 mx-auto bg-zinc-700 shadow-lg flex p-2 rounded-lg">
      
      <div className="w-1/4 rounded-lg bg-zinc-400 overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={user.profile}
          alt="profile"
        />
      </div>

      <div className="w-3/4 mx-4 flex flex-col items-start">
        
        <div>
          <h1 className="text-zinc-100 text-xl capitalize font-medium">
            {user.firstName} {user.lastName}
          </h1>

          <p className="text-zinc-300 text-sm line-clamp-2">
            {user.bio}
          </p>

          {user.skills?.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {user.skills.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-md bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* 🔑 Action slot */}
        {actions && (
          <div className="mt-3 flex gap-2">
            {actions}
          </div>
        )}

      </div>
    </div>
  );
};

export default UserNotificationCart;
