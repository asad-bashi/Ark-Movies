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
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

const API_KEY = "9f3a9d362ac316e4573a58e1556d4bfe";
const BASE_URL = "https://api.themoviedb.org/3";

function Movie() {
  const { id } = useParams();
  const [backdrop, setBackdrop] = useState({});
  const [poster, setPoster] = useState({});
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    //have language filter
    async function getImages() {
      const { data } = await axios.get(
        `${BASE_URL}/movie/${id}/images?api_key=${API_KEY}`
      );
     

      //use original size backdrops and posters
      setBackdrop(data.backdrops[3]);
      setPoster(data.posters[1]);
    }
    getImages();

    async function getMovieDetails() {
      const { data } = await axios.get(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
      );
       console.log(data);

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
  }, [id]);

  return (
    <Box sx={{ backgroundColor: grey[900] }}>
      {/*replace box with div classname movie */}
      {/* fix Header.jsx and include it here */}

      {/*use original size for backdrop and have it behind content */}
      <div className="Movie-BackDrop">
        <img
          height={"850px"}
          src={`https://image.tmdb.org/t/p/w500/${backdrop?.file_path}`} //use poster but keep backdrop naming
        />
      </div>

      <section className="Movie-Information">
        <div className="Movie-Poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster?.file_path}`}
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
          className="iframe"
          src={`//www.youtube.com/embed/${video}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </section>
      {/* include footer here */}
    </Box>
  );
}

export default Movie;
