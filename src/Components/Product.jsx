function Product({ oneProduct, clickToAdd }) {
  // console.log(oneProduct);
  return (
    <div>
      <div className="card card-compact w-full h-full bg-base-100 shadow-md hover:shadow-xl">
        <figure>
          <img src={oneProduct.category.image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{oneProduct.title}</h2>
          <p className="font-bold">${oneProduct.price}</p>
          <p className="">{oneProduct.description}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => {
                return clickToAdd(oneProduct);
              }}
              className="btn bg-stone-400 border-inherit"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
