import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return null;

  const mainMovies = movies[0];
  if (!mainMovies) return null;

  // const { title, description, trailer } = mainMovies;

  return (
    <div>
      {/* <VideoTitle title={title} description={description} /> */}
      {/* <VideoBackground trailer={trailer} /> */}
    </div>
  );
};

export default MainContainer;
