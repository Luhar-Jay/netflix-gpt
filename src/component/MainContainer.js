import React from "react";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return null;

  const mainMovies = movies[0];
  if (!mainMovies) return null;

  // const { title, description } = mainMovies;

  return (
    <div>
      {/* <VideoTitle title={title} description={description} />
      <VideoBackground /> */}
    </div>
  );
};

export default MainContainer;
