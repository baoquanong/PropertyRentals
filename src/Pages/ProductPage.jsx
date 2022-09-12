import Product from "../Components/Product";

function ProductPage({ items }) {
  console.log(items);

  const eachProduct = items.map((ele) => {
    return <Product item={ele} key={ele.id} />;
  });

  return <>{eachProduct}</>;
}

export default ProductPage;
