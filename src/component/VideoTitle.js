import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import data from "../utils/mock.json";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(data[0]);
  }, []);
  console.log(data);
  return (
    <div className="w-screen aspect-video pt-72 px-24 absolute text-white bg-gradient-to-r from-black ">
      <div key={movies}>
        <h1 className="text-2xl font-bold m-4">{movies.title}</h1>
        <p className="w-1/4 m-4">{movies.description}</p>
      </div>
      {/* <h1 className="text-3xl font-bold">{title} Title</h1>
      <p className="py-6 text-lg w-1/4">{description} Description</p> */}
      <div className="flex flex-row my-4 text-white">
        <button className="bg-white text-lg font-bold flex text-black hover:bg-slate-300 rounded-xl items-center  p-4 px-10">
          <FaPlay />
          <spam className="pl-1">Play</spam>
        </button>
        <button className="bg-gray-500 text-lg font-bold flex bg-opacity-50 rounded-xl items-center  p-4 px-10 mx-4">
          <IoIosInformationCircleOutline />
          <spam className="pl-1">More Info</spam>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
