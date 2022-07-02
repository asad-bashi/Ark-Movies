import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MovieCardContainer = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 375px;

  height: 200px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 200ms ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    border: 4px solid #b71c1c;
  }
`;

function MovieCard({ id, img }) {
  const navigate = useNavigate();
  return (
    <MovieCardContainer img={img} onClick={() => navigate(`/movie/${id}`)} />
  );
}

export default MovieCard;
