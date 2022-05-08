import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/movie/:id" element={<Movie />}></Route>
    </Routes>
  );
}

export default App;
