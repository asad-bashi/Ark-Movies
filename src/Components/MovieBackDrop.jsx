import styled from "styled-components";
const imgSize = "original";

const MovieBackDrop = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${(props) =>
      `${process.env.REACT_APP_IMG_URL}${imgSize}${props.file_path}`});
  height: 400px;
  background-position: center;
  width: 100%;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 750px) {
    display: none;
  }
`;

export default MovieBackDrop;
