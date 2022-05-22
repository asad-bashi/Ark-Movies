import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "../Components/MovieBackDrop";
import "./Movie.css";
import MovieBackDrop from "../Components/MovieBackDrop";
import Genre from "../Components/Genre";
import CastMember from "../Components/CastMember";

const API_KEY = "9f3a9d362ac316e4573a58e1556d4bfe";
const BASE_URL = "https://api.themoviedb.org/3";

function Movie() {
  const { id } = useParams();
  const [backdrop, setBackdrop] = useState({});
  const [poster, setPoster] = useState({});
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [video, setVideo] = useState([]);

  const [test, setTest] = useState([]);

  useEffect(() => {
    async function getImages() {
      const { data } = await axios.get(
        `${BASE_URL}/movie/${id}/images?api_key=${API_KEY}`
      );

      setBackdrop(data.backdrops[3]);
      setPoster(data.posters[1]);

      setTest(data);
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
      //get video key from tdmb api
      //use key as id value for youtube api

      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=player&id=9djAMds545g&key=AIzaSyCT0kk3iZmgkglVvj4iyFh63n0EfyOIREI`
      );
      console.log(res);
      setVideo(res);
    }
    getVideos();
  }, []);

  return (
    <Box sx={{ backgroundColor: grey[900] }}>
      {/* <MovieBackDrop
        file_path={`https://image.tmdb.org/t/p/w500/${backdrop.file_path}`}
      /> */}
      <div className="Movie-BackDrop">
        <img
          height={"850px"}
          src={`https://image.tmdb.org/t/p/w500/${backdrop.file_path}`}
        />
      </div>

      {/* {test.backdrops?.map((t) => (
        <img
          height={'400px'}
          width={'80%'}
          src={`https://image.tmdb.org/t/p/w500/${t.file_path}`}
        />
      ))} */}

      <section className="Movie-Information">
        <div className="Movie-Poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster.file_path}`}
            alt=""
          />
        </div>
        <Box sx={{ padding: "1rem" }}>
          <h1 className="Movie-Title">{movie.title}</h1>

          <div>
            {movie.genres?.map((g) => (
              <Genre>{g.name}</Genre>
            ))}
          </div>
          <p className="Movie-OverView">{movie.overview}</p>

          <h2 className="Movie-Cast-Title">Casts</h2>
          <div className="Movie-Cast">
            {cast.map((c) => (
              <div className="Cast-Member">
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
        <iframe
          width="480"
          height="270"
          src="//www.youtube.com/embed/9djAMds545g"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"
          allowfullscreen
        ></iframe>
      </section>

      {/* <div className="Movie-Genres">
          {movie.genres?.map(({ name }) => (
            <Box>{name}</Box>
          ))}
        </div>
        <div className="Movie-Bio">{movie.overview}</div> */}

      {/* <div className="Interactive-buttons">
        <button className="btn play">
          <PlayArrowIcon />
          <p>Play</p>
        </button>

        <button className="btn trailer">
          <PlayArrowIcon />
          <p>Trailer</p>
        </button>

        <AddIcon
          sx={{
            fontSize: "2rem",
            color: "white",
            backgroundColor: "black",
            border: "1px solid white",
            borderRadius: "50%",
          }}
        />
      </div> */}
    </Box>
  );
}

export default Movie;
