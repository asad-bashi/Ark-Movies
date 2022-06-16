import { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import "../Components/MoviePoster";
import axios from "axios";
import "./Home.css";
import MoviePoster from "../Components/MoviePoster";
import MediaRow from "../Components/MediaRow";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import Footer from "../Components/Footer";
const API_KEY = "9f3a9d362ac316e4573a58e1556d4bfe";
const baseUrl = "https://api.themoviedb.org/3/";
function Home() {
  // have 1 array for movies and each new set of movies gets added to array
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const navigate = useNavigate();
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
    <div className="Home">
      {/* replace box for div */}
      <Navbar />

      <Carousel className="Carousel">
        {nowPlaying.map(({ poster_path, id }) => (
          <MoviePoster
            onClick={() => navigate(`/movie/${id}`)}
            key={uuidv4()}
            poster_path={poster_path}
          />
        ))}
      </Carousel>

      <div className="MediaRow-Container">
        {/* fix title for each MediaRow on scroll */}
        <MediaRow title="Popular" movies={popular} />
        <MediaRow title="Top Rated" movies={topRated} />
        <MediaRow title="Up Coming" movies={upComing} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
