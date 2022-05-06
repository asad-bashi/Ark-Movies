import { Box, Typography } from "@mui/material";
const imgUrl = "https://image.tmdb.org/t/p/w500";
function MediaRow({ title, movies }) {
  return (
    <Box>
      <Box>{title}</Box>
      <Box sx={{ display: "flex", overflowX: "scroll" }}>
        {movies.map((movie) => (
          <img src={`${imgUrl}${movie.backdrop_path}`} alt="" />
        ))}
      </Box>
    </Box>
  );
}

export default MediaRow;
