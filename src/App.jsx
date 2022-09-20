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
    const fetchList = async () => {
      try {
        const request = await fetch("https://api.escuelajs.co/api/v1/products");
        const response = await request.json();
        const updatedResponse = response.map((pdt) => ({ ...pdt, count: 0 }));
        setProducts(updatedResponse);
      } catch (error) {
        console.log(error);
      }
    };
    fetchList();
  }, []);
  //console.log(products);

  //console.log(products);

  function handleClick(item) {
    // setAddCart((prevState) => {
    //   return [...prevState,item]
    // })
    // console.log("addcart", item.title);
    // console.log (item)
    //console.log (addCart)
    //console.log (addCart.filter((obj) => obj.id == item.id))
    //console.log (item.id)
    if (addCart.filter((obj) => obj.id === item.id).length > 0) {
      item.count = item.count + 1;
      setAddCart([...addCart]);
    } else {
      item.count = item.count + 1;
      setAddCart([...addCart, item]);
    }
  }

  console.log("another", addCart);

  function handleRemove(item) {
    if (item.count === 1) {
      const itemIndex = addCart.findIndex((i) => i.id === item.id);
      addCart.splice(itemIndex, 1);
      setAddCart([...addCart]);
    } else {
      item.count = item.count - 1;
      setAddCart([...addCart]);
    }
  }

  console.log("hello", addCart);
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
              <CartPage
                cartItems={addCart}
                addBtn={handleClick}
                removeBtn={handleRemove}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
