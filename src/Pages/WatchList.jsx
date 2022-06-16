import Navbar from "../Components/Navbar";
import MovieCard from "../Components/MovieCard";
import { v4 as uuidv4 } from "uuid";
import Footer from "../Components/Footer";

import "./WatchList.css";
import apiConfig from "../apiConfig";
const baseUrl = apiConfig.images.base_url;
const imgSize = "original";
function WatchList(props) {

  return (
    <div className="WatchList">
      <Navbar />
      <div className="WatchList-Container">
        <h2 className="WatchList-Title">WatchList</h2>
        <div className="WatchList-Movies">
          {props.watchlist.map((movie) => (
            <MovieCard key={uuidv4()} id={movie.id} img={`${baseUrl}${imgSize}/${movie.backdrop_path}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WatchList;
