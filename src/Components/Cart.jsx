function Cart({ oneCartItem, addBtn, removeBtn }) {
  return (
    <div className="card card-side bg-base-100 shadow-md mt-5   ">
      <figure className="">
        <img className="h-full" src={oneCartItem.category.image} />
      </figure>
      <div className="card-body flex-grow w-full">
        <h2 className="card-title">{oneCartItem.title}</h2>
        <p className="font-bold">${oneCartItem.price}</p>
        <p className="">{oneCartItem.description}</p>
        <div className="card-actions justify-end flex items-center">
          <button
            onClick={() => {
              return removeBtn(oneCartItem);
            }}
            className="btn w-10 lg:w-16  bg-stone-400 border-inherit text-xl"
          >
            -
          </button>
          <span className="mx-2 text-lg">{oneCartItem.count}</span>

          <button
            onClick={() => {
              return addBtn(oneCartItem);
            }}
            className="btn w-10 lg:w-16 bg-stone-400 border-inherit text-xl"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
