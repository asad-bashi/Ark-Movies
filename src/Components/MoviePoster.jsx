import styled from "styled-components";
import apiConfig from "../apiConfig";
const baseUrl = apiConfig.images.base_url;
const imgSize = "original";
const MoviePoster = styled.div`
  width: 37vw;
  height: 100vh;
  background-image: url(${(props) =>
    `${baseUrl}${imgSize}${props.poster_path}`});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  cursor: pointer;

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (min-width: 701px) and (max-width: 791px) {
    width: 90%;
  }

  @media (min-width: 792px) and (max-width: 877px) {
    width: 80%;
  }

  @media (min-width: 878px) and (max-width: 984px) {
    width: 70%;
  }

  @media (min-width: 985px) and (max-width: 1150px) {
    width: 60%;
  }
`;

export default MoviePoster;
