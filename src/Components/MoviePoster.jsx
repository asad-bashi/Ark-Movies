import './MoviePoster.css'
function MoviePoster(props) {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  return <img className="MoviePoster" src={`${imgUrl}${props.movieImg}`} alt="" />;
}

export default MoviePoster;
