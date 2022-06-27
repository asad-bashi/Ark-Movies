import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Components/Footer";
import { Box, Rating } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import "../Components/MovieBackDrop";
import "./Movie.css";
import MovieBackDrop from "../Components/MovieBackDrop";
import Genre from "../Components/Genre";
import Navbar from "../Components/Navbar";
import MediaRow from "../Components/MediaRow";

function Movie({ setWatchList, watchList }) {
  const { id } = useParams();
  const [backdrop, setBackdrop] = useState({});
  const [poster, setPoster] = useState({});
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [video, setVideo] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [isWatchListed, setWatchListed] = useState(false);
  const imgSize = "w500";

  useEffect(() => {
    async function getImages() {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/movie/${id}/images?api_key=${process.env.REACT_APP_API_KEY}&include_image_language=en,null`
      );
      setBackdrop(data.backdrops[0]);
      setPoster(data.posters[0]);
    }
    getImages();

    async function getMovieDetails() {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setMovie(data);
    }
    getMovieDetails();

    async function getCast() {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`
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
        `${process.env.REACT_APP_BASE_URL}/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const videoKey = data.results[0].key;
      setVideo(videoKey);
    }
    getVideos();

    async function getSimilarMovies() {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setSimilar(data.results);
    }
    getSimilarMovies();

    function isWatchListed() {
      const isValid = watchList.some((movie) => movie.id === parseInt(id));
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
  }

  function removeFromWatchList() {
    const newWatchList = watchList.filter((movie) => movie.id !== parseInt(id));
    setWatchList(newWatchList);
  }

  return (
    <div className="Movie">
      <Navbar />
      <MovieBackDrop file_path={backdrop?.file_path} />
      <section className="Movie-Information">
        <div className="Movie-Poster">
          <img
            src={`${process.env.REACT_APP_IMG_URL}${imgSize}/${poster?.file_path}`}
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
              <RemoveCircleOutlineIcon
                sx={{
                  color: "#b71c1c",
                  fontSize: "3.7rem",
                  ml: ".5rem",
                  cursor: "pointer",
                }}
                onClick={removeFromWatchList}
              />
            ) : (
              <AddCircleIcon
                sx={{
                  color: "#b71c1c",
                  fontSize: "3.7rem",
                  ml: ".5rem",
                  cursor: "pointer",
                }}
                onClick={addToWatchList}
              />
            )}
          </div>
          <div className="Rating-Container">
            <Rating
              sx={{ fontSize: "3rem" }}
              size="large"
              precision={0.1}
              readOnly
              value={movie.vote_average / 2}
            />
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
      <p className="MediaRow-Title">Similar Movies</p>
      <div className="MediaRow-Container">
        <MediaRow movies={similar} />
      </div>
      <Footer />
    </div>
  );
}

export default Movie;
