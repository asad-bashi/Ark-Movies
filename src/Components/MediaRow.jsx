import { Box, Typography } from "@mui/material";
import MovieCard from "./MovieCard";
import { v4 as uuidv4 } from "uuid";
import "./MediaRow.css";
const imgUrl = "https://image.tmdb.org/t/p/w500";
function MediaRow({ title, movies }) {
  return (
    <Box className="MediaRow">
      <Typography variant="h2" sx={{ color: "white" }}>
        {title}
      </Typography>
      <Box sx={{ display: "flex", overflowX: "scroll", columnGap: "1rem" }}>
        {movies.map((movie) => (
          <MovieCard
            key={uuidv4()}
            img={`${imgUrl}${movie.backdrop_path}`}
          ></MovieCard>
        ))}
      </Box>
    </Box>
  );
}

export default MediaRow;
