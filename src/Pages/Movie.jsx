import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Components/Footer";
import { Box, Rating, Snackbar, Stack } from "@mui/material";
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
import ReviewCard from "../Components/ReviewCard";

function Movie({ setWatchList, watchList }) {
  const { id } = useParams();
  const [backdrop, setBackdrop] = useState({});
  const [poster, setPoster] = useState({});
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [video, setVideo] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [similar, setSimilar] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isWatchListed, setWatchListed] = useState(false);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const imgSize = "original";

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

      //filter out the cast members that don't have poster image
      const cast = data.cast.filter((person) => {
        if (person.profile_path) {
          return person;
        }
      });

      //setting cast state to only hold 5 people
      setCast(cast.slice(0, 5));
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

    async function getRecommendedMovies() {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/movie/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setRecommended(data.results);
    }
    getRecommendedMovies();

    async function getSimilarMovies() {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setSimilar(data.results);
    }
    getSimilarMovies();

    async function getReviews() {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/movie/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setReviews(data.results);

      //setReviews(data);
    }
    getReviews();

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
    setIsSnackbarOpen(true);
    setSnackbarMessage("Movie added to watchlist");
    setWatchList((prevWatchList) => [...prevWatchList, movie]);
    setWatchListed(true);
  }

  function removeFromWatchList() {
    setIsSnackbarOpen(true);
    setSnackbarMessage("Movie removed from watchlist");
    const newWatchList = watchList.filter((movie) => movie.id !== parseInt(id));
    setWatchList(newWatchList);
  }

  function handleSnackbarClose(e, reason) {
    if (reason === "clickaway") {
      return;
    }
    setIsSnackbarOpen(false);
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
                  src={`https://image.tmdb.org/t/p/w500/${c?.profile_path}`}
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
      <Stack width="90%" mx="auto">
        <p className="Review-Title">Reviews</p>
        <section className="Review-Container">
          {reviews[0] ? (
            reviews.map(({ author_details, content }) => {
              return (
                <ReviewCard
                  details={author_details}
                  content={content}
                  key={uuidv4()}
                />
              );
            })
          ) : (
            <p className="review-missing">No reviews at this time</p>
          )}
        </section>
      </Stack>

      <section className="MediaRow-Container">
        <p className="MediaRow-Title">Recommended Movies</p>
        <MediaRow movies={recommended.length ? recommended : similar} />
      </section>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        message={snackbarMessage}
        onClose={handleSnackbarClose}
      />

      <Footer />
    </div>
  );
}

export default Movie;
