import axios from "axios";
const API_KEY = "9f3a9d362ac316e4573a58e1556d4bfe";

const baseUrl = "https://api.themoviedb.org/3";

const getNowPlaying = async () => {
  const nowPlaying = await axios.get(
    `${baseUrl}/movie/now_playing?api_key=${API_KEY}`
  );

  return nowPlaying.data.results;
};

export default getNowPlaying;
