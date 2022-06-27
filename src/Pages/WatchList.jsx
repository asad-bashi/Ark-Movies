import Navbar from "../Components/Navbar";
import MovieCard from "../Components/MovieCard";
import Footer from "../Components/Footer";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import "./WatchList.css";
const imgSize = "original";
function WatchList(props) {
    useEffect(() => {
      window.scrollTo(0, 0);
    });
  return (
    <div className="WatchList">
      <Navbar />
      <div className="WatchList-Container">
        <h2 className="WatchList-Title">WatchList</h2>
        <div className="WatchList-Movies">
          {props.watchlist.map((movie) => (
            <MovieCard
              key={uuidv4()}
              id={movie.id}
              img={`${process.env.REACT_APP_BASE_URL}${imgSize}/${movie.backdrop_path}`}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WatchList;
