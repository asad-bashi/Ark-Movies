import styled from "styled-components";
const imgUrl = "https://image.tmdb.org/t/p/w500";
const MoviePoster = styled.div`
  width: 750px;
  height: 100vh;

  border: 5px solid red;
  background-image: url(${(props) => `${imgUrl}${props.movieImg}`});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

export default MoviePoster;
