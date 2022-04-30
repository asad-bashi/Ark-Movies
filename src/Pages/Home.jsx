import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import { grey } from "@mui/material/colors";
import "../Components/MoviePoster";
import axios from "axios";
import "./Home.css";
import MoviePoster from "../Components/MoviePoster";
const API_KEY = "9f3a9d362ac316e4573a58e1556d4bfe";

const baseUrl = "https://api.themoviedb.org/3/";
function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const { data } = await axios.get(
        `${baseUrl}movie/now_playing?api_key=${API_KEY}`
      );
      console.log(data);
      setMovies(data.results);
    }
    getMovies();
  }, []);

  return (
    <Box height="100vh" bgcolor={grey[900]}>
      <Carousel className="carousel">
        {movies.map(({ poster_path }) => (
          <MoviePoster movieImg={poster_path} />
        ))}
      </Carousel>
    </Box>
  );
}

export default Home;
