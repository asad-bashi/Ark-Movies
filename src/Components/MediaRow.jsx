import { Box } from "@mui/material";
import MovieCard from "./MovieCard";
import { v4 as uuidv4 } from "uuid";
import "./MediaRow.css";

function MediaRow({ movies }) {
  const imgSize = "original";

  return (
    <Box className="MediaRow">
      {movies.map((movie) => {
        if (movie.poster_path) {
          return (
            <MovieCard
              className="MovieCard"
              key={uuidv4()}
              img={`${process.env.REACT_APP_IMG_URL}${imgSize}/${movie.poster_path}`}
              id={movie.id}
              title={movie.title}
            />
          );
        }
      })}
    </Box>
  );
}

export default MediaRow;
