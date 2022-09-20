import React from "react";
import Modal from "./Modal";

function Checkout({ cartItems }) {
  //alert(`Please make payment of $${sumPrice}. Ka Ching!`);

  const eachItemDisplay = cartItems.map((ele) => {
    return (
      <div key={ele.id} className="grid grid-cols-3 justify-items-end px-3">
        <span className="ml-10 justify-self-start ">{ele.title}</span>
        <span className="mr-10 sm:invisible lg:visible">{ele.count}</span>
        <span className="mr-10">${ele.price}</span>
      </div>
    );
  });

  const sumPrice = cartItems.reduce((accumulator, object) => {
    return accumulator + object.price * object.count;
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
        <label
          htmlFor="my-modal-4"
          className="btn w-32 bg-stone-400 border-inherit m-5"
        >
          Check Out
        </label>
        <Modal sumPrice={sumPrice} />
      </div>
    </div>
  );
}

export default Checkout;
