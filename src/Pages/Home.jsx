import { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import "../Components/MoviePoster";
import axios from "axios";
import "./Home.css";
import MoviePoster from "../Components/MoviePoster";
import MediaRow from "../Components/MediaRow";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

const CarouselContainer = styled.section`
  margin: 1.5rem 0rem;
  height: 100vh;
  width: 100vw;
`;

function Home() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
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
      <Navbar />

      <CarouselContainer>
        <Carousel className="Carousel">
          {nowPlaying.map(({ poster_path, id }) => (
            <MoviePoster
              onClick={() => navigate(`/movie/${id}`)}
              key={uuidv4()}
              poster_path={poster_path}
            />
          ))}
        </Carousel>
      </CarouselContainer>

      <div className="MediaRow-Container">
        <p className="MediaRow-Title">Popular</p>
        <MediaRow movies={popular} />
        <p className="MediaRow-Title">Top Rated</p>
        <MediaRow movies={topRated} />
        <p className="MediaRow-Title">Up Coming</p>
        <MediaRow movies={upComing} />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
