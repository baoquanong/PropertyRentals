# Project 2

## Wireframe

Wireframe in Figma / Paper -> URL 
React Router routes









import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Favs from "./pages/Favs";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

const url =
  "https://api.themoviedb.org/3/trending/movie/day?api_key=c33b955b56b34e6ac8cf34064ef78bbf";

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="/movies">Movies</Link>{" "}
          </li>
          <li>
            <Link to="/favs">Favs</Link>{" "}
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
