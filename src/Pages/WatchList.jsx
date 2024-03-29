import Navbar from "../Components/Navbar";
import MovieCard from "../Components/MovieCard";
import Footer from "../Components/Footer";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import Empty from "../EmptySvg.svg";
import { Stack } from "@mui/material";
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
          {props.watchlist[0] ? (
            props.watchlist.map((movie) => (
              <MovieCard
                key={uuidv4()}
                id={movie.id}
                img={`${process.env.REACT_APP_IMG_URL}${imgSize}/${movie.poster_path}`}
                title={movie.title}
              />
            ))
          ) : (
            <Stack rowGap={3.5}>
              <img height="200px" src={Empty} alt="" />
              <p className="WatchList-p">No Movies Added</p>
            </Stack>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WatchList;
