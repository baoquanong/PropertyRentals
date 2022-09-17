import Product from "../Components/Product";

function ProductPage({ allProducts, clickToAdd }) {
  // console.log(allProducts);

  const eachProduct = allProducts.map((ele) => {
    return <Product oneProduct={ele} key={ele.id} clickToAdd={clickToAdd} />;
  });

  return (
    <div>
      <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-3 h-9 p-10">
        {eachProduct}
      </div>
    </div>
  );
}

export default ProductPage;
