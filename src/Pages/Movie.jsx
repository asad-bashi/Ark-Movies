import { useParams } from "react-router-dom";
import axios from "axios";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";

const API_KEY = "9f3a9d362ac316e4573a58e1556d4bfe";
const BASE_URL = "https://api.themoviedb.org/3";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function getMovie() {
      const { data } = await axios.get(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
      );

      setMovie(data);
    }
    getMovie();
  }, []);

  return (
    <Box sx={{ backgroundColor: grey[900], height: `1100px` }}>
      <div className="Movie-Text">
        <div className="Movie-Buttons">
          <button className="btn">Play</button>
          <button className="btn">Trailer</button>
          <button className="btn">+</button>
        </div>
        <div className="Movie-Genres">
          {movie.genres?.map(({ name }) => (
            <Box>{name}</Box>
          ))}
        </div>
        <div className="Movie-Bio">{movie.overview}</div>
      </div>
    </Box>
  );
}

export default Movie;
