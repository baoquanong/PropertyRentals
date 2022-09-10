import NavBar from "./Components/NavBar";
import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import {render} from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((json) => console.log(json));

  return (
    <>
      <NavBar/>
      <BrowserRouter>
      <Routes>
      <Route path="/home" element={<HomePage />}/>
      <Route path="/product" element={<ProductPage />}/>
      <Route path="/cart" element={<CartPage />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
