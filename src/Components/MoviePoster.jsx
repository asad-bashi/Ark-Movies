import styled from "styled-components";
import apiConfig from "../apiConfig";
const baseUrl = apiConfig.images.base_url;
const imgSize = "original";
// const imgUrl = "https://image.tmdb.org/t/p/w500";
const MoviePoster = styled.div`
  width: 37vw;
  height: 100vh;
  background-image: url(${(props) =>
    `${baseUrl}${imgSize}${props.poster_path}`});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  cursor: pointer;
`;

export default MoviePoster;
