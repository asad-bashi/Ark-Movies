import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import { grey } from "@mui/material/colors";
import "../Components/MoviePoster";
import axios from "axios";
import "./Home.css";
import MoviePoster from "../Components/MoviePoster";
import MediaRow from "../Components/MediaRow";
const API_KEY = "9f3a9d362ac316e4573a58e1556d4bfe";

const baseUrl = "https://api.themoviedb.org/3/";
function Home() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upComing, setUpComing] = useState([]);
  useEffect(() => {
    async function getMovies() {
      const nowPlaying = await axios.get(
        `${baseUrl}movie/now_playing?api_key=${API_KEY}`
      );
      setNowPlaying(nowPlaying.data.results);

      const popular = await axios.get(
        `${baseUrl}movie/popular?api_key=${API_KEY}`
      );
      setPopular(popular.data.results);

      const topRated = await axios.get(
        `${baseUrl}movie/top_rated?api_key=${API_KEY}`
      );
      setTopRated(topRated.data.results);

      const upComing = await axios.get(
        `${baseUrl}movie/upcoming?api_key=${API_KEY}`
      );
      setUpComing(upComing.data.results);
    }
    getMovies();
  }, []);

  return (
    <Box bgcolor={grey[900]}>
      <Carousel className="Carousel">
        {nowPlaying.map(({ poster_path }) => (
          <MoviePoster movieImg={poster_path} />
        ))}
      </Carousel>

      <MediaRow title="Popular" movies={popular} />
      <MediaRow title="Top Rated" movies={topRated} />
      <MediaRow title="Up Coming" movies={upComing} />
    </Box>
  );
}

export default Home;
