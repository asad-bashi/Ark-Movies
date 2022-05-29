import { Box, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import { v4 as uuidv4 } from "uuid";
import "./MediaRow.css";
import Rating from "@mui/material/Rating";
const imgUrl = "https://image.tmdb.org/t/p/w500";
function MediaRow({ title, movies }) {
  const navigate = useNavigate();

  console.log(movies);

  return (
    <Box className="MediaRow">
      <Typography variant="h2" sx={{ color: "white" }}>
        {title}
      </Typography>
      <Box sx={{ display: "flex", columnGap: "1rem" }}>
        {movies.map((movie) => (
          <Paper onClick={() => navigate(`/movie/${movie.id}`)} elevation={12}>
            <MovieCard
              className="MovieCard"
              key={uuidv4()}
              img={`${imgUrl}${movie.backdrop_path}`}
            >
              <div className="Movie-Info">
                <p className="Movie-Name">{movie.title}</p>
                <Rating
                  name="rating"
                  value={parseFloat(movie.vote_average) / 2}
                  max={5}
                  readOnly
                  size="large"
                />
              </div>
              {/* <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <h1>title</h1>
                <p>rating</p>
              </Box> */}
            </MovieCard>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default MediaRow;
