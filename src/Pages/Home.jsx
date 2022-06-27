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
import Footer from "../Components/Footer";
function Home() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(process.env)
    async function getMovies() {
      const nowPlaying = await axios.get(
        `${process.env.REACT_APP_BASE_URL}movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setNowPlaying(nowPlaying.data.results);

      const popular = await axios.get(
        `${process.env.REACT_APP_BASE_URL}movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setPopular(popular.data.results);

      const topRated = await axios.get(
        `${process.env.REACT_APP_BASE_URL}movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setTopRated(topRated.data.results);

      const upComing = await axios.get(
        `${process.env.REACT_APP_BASE_URL}movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
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

        <p className="MediaRow-Title">Popular</p>
        <MediaRow title="Popular" movies={popular} />
        <p className="MediaRow-Title">Top Rated</p>
        <MediaRow title="Top Rated" movies={topRated} />
        <p className="MediaRow-Title">Up Coming</p>
        <MediaRow title="Up Coming" movies={upComing} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
