import styled from "styled-components";
import apiConfig from "../apiConfig";
const baseUrl = apiConfig.images.base_url;
const imgSize = "original";

const MovieBackDrop = styled.div`
  background-image: url(${(props) => `${baseUrl}${imgSize}${props.file_path}`});
  height: 600px;
  width: 100%;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default MovieBackDrop;
