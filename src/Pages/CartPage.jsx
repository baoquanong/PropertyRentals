import Cart from "../Components/Cart";
import Checkout from "../Components/Checkout";

function CartPage({ cartItems, addRemoveBtn }) {
  console.log(cartItems);

  const eachCartItems = cartItems.map((ele) => {
    return <Cart oneCartItem={ele} key={ele.id} addRemoveBtn={addRemoveBtn}/>;
  });

  return (
    <div className="p-10" >
        <p className="text-2xl font-bold mb-5">Shopping Bag</p>
      <div className="grid grid-cols-3">
        <div className="col-span-2">{eachCartItems}</div>
        <div className="col-span-1 h-60"><Checkout cartItems={cartItems}/></div>
      </div>
    </div>
  );
}

export default CartPage;
