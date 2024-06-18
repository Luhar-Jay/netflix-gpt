import Header from "./Header";
import useNowplayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browes = () => {
  useNowplayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
        MoviesContainer
          - Video Background
          - Video title
        SecondaryContainer
          - MovieList *n
            - card * n      
      */}
    </div>
  );
};

export default Browes;
