import { Box, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import { v4 as uuidv4 } from "uuid";
import "./MediaRow.css";
const imgUrl = "https://image.tmdb.org/t/p/w500";
function MediaRow({ title, movies }) {
  const navigate = useNavigate();

  return (
    <Box className="MediaRow">
      <Typography variant="h2" sx={{ color: "white" }}>
        {title}
      </Typography>
      <Box sx={{ display: "flex", columnGap: "1rem", overflowX: "scroll" }}>
        {movies.map((movie) => (
          <Paper onClick={() => navigate(`/movie/${movie.id}`)} elevation={12}>
            <MovieCard key={uuidv4()} img={`${imgUrl}${movie.backdrop_path}`}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <h1>title</h1>
                <p>rating</p>
              </Box>
            </MovieCard>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default MediaRow;
