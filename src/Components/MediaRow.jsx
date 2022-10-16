import { Box, Typography, Paper } from "@mui/material";
import MovieCard from "./MovieCard";
import { v4 as uuidv4 } from "uuid";
import "./MediaRow.css";

function MediaRow({ movies }) {
  const imgSize = "original";
  return (
    //title should be moved outside to homepage
    <Box className="MediaRow">
      {movies.map((movie) => (
        <MovieCard
          className="MovieCard"
          key={uuidv4()}
          img={`${process.env.REACT_APP_IMG_URL}${imgSize}/${movie.poster_path}`}
          id={movie.id}
          title={movie.title}
        />
        // <Paper elevation={12}>
        // </Paper>
      ))}
    </Box>
  );
}

export default MediaRow;
