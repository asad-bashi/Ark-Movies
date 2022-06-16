import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "../Components/MovieBackDrop";
import "./Movie.css";
import MovieBackDrop from "../Components/MovieBackDrop";
import Genre from "../Components/Genre";
import CastMember from "../Components/CastMember";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import Navbar from "../Components/Navbar";

const API_KEY = "9f3a9d362ac316e4573a58e1556d4bfe";
const BASE_URL = "https://api.themoviedb.org/3";

function Movie({ setWatchList, watchList }) {
  const { id } = useParams();
  const [backdrop, setBackdrop] = useState({});
  const [poster, setPoster] = useState({});
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [video, setVideo] = useState([]);
  const [isWatchListed, setWatchListed] = useState(false);

  useEffect(() => {
    //have language filter
    async function getImages() {
      const { data } = await axios.get(
        `${BASE_URL}/movie/${id}/images?api_key=${API_KEY}`
      );

      setBackdrop(data.backdrops[0]);
      setPoster(data.posters[0]);
    }
    getImages();

    async function getMovieDetails() {
      const { data } = await axios.get(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
      );

      setMovie(data);
    }
    getMovieDetails();

    async function getCast() {
      const { data } = await axios.get(
        `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
      );

      let cast = [];
      //grab first 5 cast members
      for (let i = 0; i < 5; i++) {
        cast.push(data.cast[i]);
      }
      setCast(cast);
    }
    getCast();

    async function getVideos() {
      const { data } = await axios.get(
        `${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`
      );

      const videoKey = data.results[0].key;

      setVideo(videoKey);
    }
    getVideos();

    function isWatchListed() {
      const isValid = watchList.some((movie) => movie.id === parseInt(id));
      console.log(isValid);
      setWatchListed(isValid);
    }
    isWatchListed();
  }, [id, watchList]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  function addToWatchList() {
    setWatchList((prevWatchList) => [...prevWatchList, movie]);
    setWatchListed(true);
    console.log(watchList);
  }

  function removeFromWatchList(){
    const newWatchList = watchList.filter((movie)=> movie.id!== parseInt(id));
    setWatchList(newWatchList)
  }

  return (
    <div className="Movie">
      {/*replace box with div classname movie */}
      {/* fix Header.jsx and include it here */}

      {/*use original size for backdrop and have it behind content */}
      {/* <div className="Movie-BackDrop">
        <img
          height={"850px"}
          src={`https://image.tmdb.org/t/p/w500/${backdrop?.file_path}`} //use poster but keep backdrop naming
        />
      </div> */}
      <Navbar />

      <MovieBackDrop file_path={backdrop?.file_path} />

      <section className="Movie-Information">
        <div className="Movie-Poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster?.file_path}`}
            alt=""
          />
        </div>
        <Box sx={{ padding: "1rem" }}>
          <h1 className="Movie-Title">{movie.title}</h1>

          <div className="genre-container">
            {movie.genres?.map((g) => (
              <Genre key={uuidv4()}>{g.name}</Genre>
            ))}
            {isWatchListed ? (
              <RemoveCircleOutlineIcon sx={{ color: "#b71c1c", fontSize: "3.7rem", ml: ".5rem", cursor:'pointer' }} onClick={removeFromWatchList} />
            ) : (
              <AddCircleIcon sx={{ color: "#b71c1c", fontSize: "3.7rem", ml: ".5rem",cursor:'pointer' }} onClick={addToWatchList} />
            )}

            {/* <AddCircleIcon
              sx={{ color: "#b71c1c", fontSize: "3.7rem", ml: ".5rem" }}
            /> */}
          </div>
          <p className="Movie-OverView">{movie.overview}</p>

          <h2 className="Movie-Cast-Title">Casts</h2>
          <div className="Movie-Cast">
            {cast.map((c) => (
              <div key={uuidv4()} className="Cast-Member">
                <img
                  className="Movie-CastMember"
                  src={`https://image.tmdb.org/t/p/w500/${c.profile_path}`}
                  alt=""
                />
                <p className="Cast-Member-Name">{c.name}</p>
              </div>
            ))}
          </div>
        </Box>
      </section>

      <section className="Movie-Video">
        <p className="Trailer">Trailer</p>
        <iframe
          className="iframe"
          src={`//www.youtube.com/embed/${video}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </section>
      {/* include footer here */}
    </div>
  );
}

export default Movie;
