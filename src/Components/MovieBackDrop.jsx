import styled from "styled-components";

const MovieBackDrop = styled.div`
  border: 5px solid red;
  background-image: url(${(props) => `${props.file_path}`});
  height: 400px;
  width: 80%;

  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export default MovieBackDrop;
