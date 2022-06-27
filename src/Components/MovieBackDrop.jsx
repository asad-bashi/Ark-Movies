import styled from "styled-components";
const imgSize = "original";

const MovieBackDrop = styled.div`
  background-image: url(${(props) =>
    `${process.env.REACT_APP_IMG_URL}${imgSize}${props.file_path}`});
  height: 600px;
  width: 100%;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default MovieBackDrop;
