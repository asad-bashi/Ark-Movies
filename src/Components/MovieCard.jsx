// import "./MovieCard.css";
// function MovieCard({ img }) {
//   return (
//     <div className="MovieCard">
//       {img} <div className="title">title</div>
//     </div>
//   );
// }

// export default MovieCard;

//background image set to image given as props
//on hover display title and rating of movie
//onclick navigate to movie id

// function MovieCard(props) {
//   return (
//     <div className="MovieCard">
//       <h2 className="title">title</h2>
//       <img className="img" src={props.img} alt="" />;
//       <div className="rating">rating</div>
//     </div>
//   );
// }

// export default MovieCard;

import styled from "styled-components";

const MovieCard = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-width: 500px;
  height: 287px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  cursor: pointer;
`;

export default MovieCard;
