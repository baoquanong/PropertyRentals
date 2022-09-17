import React from "react";

function Checkout({ cartItems }) {
  const eachItemDisplay = cartItems.map((ele) => {
    return (
      <div key={ele.id} className="flex justify-between px-3">
        <span className="ml-10">{ele.title}</span>
        <span className="mr-10">${ele.price}</span>
      </div>
    );
  });

  const sumPrice = cartItems.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);



  return (
    <div className="card bg-base-100 shadow-md mt-5 ml-5 h-fulljustify-center">
      <div className="text-center font-bold text-xl p-5">Order Summary</div>

      {eachItemDisplay}

      <div className="mt-5 flex justify-between p-3">
        <div className="ml-10 font-bold ">Total</div>
        <div className="mr-10 font-bold ">${sumPrice}</div>
      </div>
      <div className="card-actions justify-center">
        <button className="btn w-32 bg-stone-400 border-inherit m-5">
          Check Out
        </button>
      </div>
    </div>
  );
}

export default Checkout;
