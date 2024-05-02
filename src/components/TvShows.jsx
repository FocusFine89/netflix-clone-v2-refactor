import Gallery from "./Gallery";
import Home from "./Home";

const TvShows = () => {
  return (
    <>
      {/* <Home /> */}
      <Gallery titolo="Trending Now" film="Harry Potter" />
      <Gallery titolo="Watch it Again" film="Pokemon" />
      <Gallery titolo="New Releases" film="Spongebob" />
    </>
  );
};

export default TvShows;
