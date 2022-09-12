function Product({ item }) {
  console.log(item);
  return (
    <>
      <img src={item.image} className="w-36" />
      <div className="block">
        <div>Title={item.title}</div>
        <div>Price=${item.price}</div>
        <div>Rating={item.rating.rate}</div>
      </div>
    </>
  );
}

export default Product;
