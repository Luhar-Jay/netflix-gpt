import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const VideoBackground = ({ imdb_link }) => {
  // fetch trailer Video
  const dispatch = useDispatch();
  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://imdb-top-100-movies.p.rapidapi.com/top32",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);

    const filterData = json.trailer;

    // const trailer = filterData.length ? filterData[0] : json.data[0];
    console.log(filterData);
    dispatch(addTrailerVideo);
  };

  useEffect(() => {
    getMoviesVideos();
  });

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src="https://www.youtube.com/embed/uYPbbksJxIg?si=a7IjpWFpnI8t2Q3x&autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
