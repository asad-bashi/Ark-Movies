import styled from "styled-components";
const imgSize = "original";
const MoviePoster = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) =>
    `${process.env.REACT_APP_IMG_URL}${imgSize}${props.poster_path}`});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`;

export default MoviePoster;
