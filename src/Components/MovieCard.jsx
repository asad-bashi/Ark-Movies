import styled from "styled-components";

const MovieCard = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-width: 475px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow-y: hidden;
  cursor: pointer;
  /* &:hover {
    border: 3px solid #b71c1c;
  } */
`;

export default MovieCard;
