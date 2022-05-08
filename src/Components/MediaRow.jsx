import { Box, Typography } from "@mui/material";
import "./MediaRow.css";
const imgUrl = "https://image.tmdb.org/t/p/w500";
function MediaRow({ title, movies }) {
  return (
    <Box className="MediaRow">
      <Typography variant="h2" sx={{ color: "white" }}>
        {title}
      </Typography>
      <Box sx={{ display: "flex", overflowX: "scroll", width: "100%" }}>
        {movies.map((movie) => (
          <Box sx={{mx:2}}>
            <img src={`${imgUrl}${movie.backdrop_path}`} alt="" />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default MediaRow;
