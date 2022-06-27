import { Box, Typography, Paper } from "@mui/material";
import MovieCard from "./MovieCard";
import { v4 as uuidv4 } from "uuid";
import "./MediaRow.css";

function MediaRow({ title, movies }) {
  const imgSize = "w500";
  return (
    //title should be moved outside to homepage
    <Box className="MediaRow">
      <Box sx={{ display: "flex", columnGap: "1.5rem", width: "100%" }}>
        {movies.map((movie) => (
          <Paper elevation={12}>
            <MovieCard
              className="MovieCard"
              key={uuidv4()}
              img={`${process.env.REACT_APP_IMG_URL}${imgSize}/${movie.backdrop_path}`}
              id={movie.id}
            />
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default MediaRow;
