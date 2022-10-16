import styled from "styled-components";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MovieCardContainer = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 400px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 200ms ease-in-out;
  cursor: pointer;
  &:hover{
    transform: translateY(-5px);
  }
`;

function MovieCard({ id, img, title }) {
  const navigate = useNavigate();
  return (
    <Stack width="275px">
      <MovieCardContainer img={img} onClick={() => navigate(`/movie/${id}`)} />
      <p
        style={{
          marginTop: ".65rem",
          textAlign: "center",
          fontSize: "1.2rem",
          color: "#eeeeee",
        }}
      >
        {title}
      </p>
    </Stack>
  );
}

export default MovieCard;
