import { Box, Typography } from "@mui/material";
import "./MediaRow.css";
const imgUrl = "https://image.tmdb.org/t/p/w500";
function MediaRow({ title, movies }) {
  return (
    <Box className="MediaRow" sx={{ border: "5px solid red" }}>
      <Typography variant="h2" sx={{ color: "white" }}>
        {title}
      </Typography>
      <Box sx={{ display: "flex", overflowX: "scroll" }}>
        {movies.map((movie) => (
          <img src={`${imgUrl}${movie.backdrop_path}`} alt="" />
        ))}
      </Box>
    </Box>
  );
}

export default MediaRow;
