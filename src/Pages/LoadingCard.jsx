import React from "react";

export default function LoadingCard() {
  return (
    <div className="bg-gray-100 shadow-md rounded-xl p-12 flex flex-col justify-center items-center border border-gray-300 min-h-[120px]">
      <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-6"></div>

      <p className="text-blue-600 text-lg font-semibold tracking-wide animate-pulse">
        Loading users...
      </p>
    </div>
  );
}
