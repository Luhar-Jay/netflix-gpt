import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoTitle = (title, description) => {
  return (
    <div className="pt-40 px-12">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{description} </p>
      <div className="flex flex-row">
        <button className="bg-gray-500 text-lg font-bold flex bg-opacity-50 rounded-xl items-center text-black p-4 px-10">
          <FaPlay /> Play
        </button>
        <button className="bg-gray-500 text-lg font-bold flex bg-opacity-50 rounded-xl items-center text-black p-4 px-10 mx-4">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
