import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [addCart, setAddCart] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => {response.json()
      })
      .then((data) => {
        return setProducts(data);
      });

  }, []);
  console.log(products);

  
  //console.log(products);

  function handleClick(item) {
    item.count;
    console.log("addcart", item);
    setAddCart((prevState) => {
      return [...prevState, item];
    });
  }
  //console.log("another", addCart);

  function handleAddRemove(item) {
    //console.log("addcart", item.id);
    console.log("clicked", item);
  }

    // const cartCount = {};
    // addCart.forEach( (i) => {
    //     cartCount[i.count] = (cartCount[i.count] || 0) + 1;
    // });
    // console.log(cartCount);

  //console.log (addCart)

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/products"
            element={
              <ProductPage allProducts={products} clickToAdd={handleClick} />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage cartItems={addCart} addRemoveBtn={handleAddRemove} />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
