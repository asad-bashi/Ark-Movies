import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const API_KEY = "9f3a9d362ac316e4573a58e1556d4bfe";
const BASE_URL = "https://api.themoviedb.org/3";

function Movie() {
  const { id } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const movie = await axios.get(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
      );
      console.log(movie);
    };
    getMovie();
  }, []);

  return <div>movie</div>;
}

export default Movie;
