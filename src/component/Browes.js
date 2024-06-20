import Header from "./Header";
import SecondaryContainer from "./SecondaryContainer";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const Browes = () => {
  return (
    <div>
      <Header />
      <VideoTitle />
      <VideoBackground />
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
