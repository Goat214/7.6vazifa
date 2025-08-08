import React from "react";


function UserCard({ user }) {
  return (
    <div
      className={`bg-gray-100 shadow-md rounded-xl p-4 flex items-center gap-4 border border-gray-200 ${
        !user.online ? "opacity-50" : ""
      }`}
    >
      <div className={`avatar ${user.online ? "avatar-online" : "avatar-offline"}`}>
        <div
          className={`w-12 rounded-full ring-2 ring-offset-2 ${
            user.online ? "ring-green-400" : "ring-gray-400"
          }`}
        >
          <img src={user.photoURL} alt={user.displayName} />
        </div>
      </div>

      <div className="flex justify-between items-start w-full">
        <div>
          <h3 className="text-base font-semibold text-gray-800">{user.displayName}</h3>
          <p className={`text-sm ${user.online ? "text-green-600" : "text-gray-400"}`}>
            {user.online ? "Online" : "Offline"}
          </p>
        </div>

        <div>
          <a
            href={`mailto:${user.email}`}
            className={`text-xs px-3 py-1 rounded bg-blue-600 text-white transition hover:bg-blue-700`}
          >
            Message
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
