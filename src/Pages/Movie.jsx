import { useParams } from "react-router-dom";
import axios from "axios";

const API_KEY = "9f3a9d362ac316e4573a58e1556d4bfe";
const BASE_URL = "https://api.themoviedb.org/3";

function Movie() {
  const { id } = useParams();

  const getMovie = async () => {
    const movie = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
    console.log(movie);
  };
  getMovie();

  const movie = axios.get(`${BASE_URL}movie/${id}`);
  console.log(movie);
  return <div>movie</div>;
}

export default Movie;
