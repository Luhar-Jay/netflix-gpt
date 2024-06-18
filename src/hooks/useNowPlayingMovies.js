import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowMoviePlaying } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  // Fetch data from RapidAPI and update store
  const dispatch = useDispatch();

  const getNowPlayingMovie = async () => {
    const data = await fetch("imdb-top-100-movies.p.rapidapi.com", API_OPTIONS);
    const json = await data.json();
    console.log(json);
    dispatch(addNowMoviePlaying(json));
  };

  useEffect(() => {
    getNowPlayingMovie();
  }, []);
};

export default useNowPlayingMovies;
