import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
import WatchList from "./Pages/WatchList";

const watchListFromLocalStorage = JSON.parse(
  localStorage.getItem("watchList") || "[]"
);

function App() {
  const [watchList, setWatchList] = useState(watchListFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/watchlist"
        element={<WatchList watchlist={watchList} />}
      ></Route>
      <Route
        path="/movie/:id"
        element={<Movie setWatchList={setWatchList} watchList={watchList} />}
      ></Route>
    </Routes>
  );
}

export default App;
