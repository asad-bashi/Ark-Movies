import { Box, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import { v4 as uuidv4 } from "uuid";
import "./MediaRow.css";
import Rating from "@mui/material/Rating";

const imgUrl = "https://image.tmdb.org/t/p/w500";
function MediaRow({ title, movies }) {
  const navigate = useNavigate();

  return (
    <Box className="MediaRow">
      <Typography variant="h2" sx={{ color: "white" }}>
        {title}
      </Typography>
      <Box sx={{ display: "flex", columnGap: "1.5rem" }}>
        {movies.map((movie) => (
          <Paper elevation={12}>
            <MovieCard
              className="MovieCard"
              key={uuidv4()}
              img={`${imgUrl}${movie.backdrop_path}`}
              id={movie.id}
              
            />
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default MediaRow;
