import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar bg-base-1 w-full h-20 justify-between ">
      <Link
        to="/"
        className="btn btn-ghost normal-case text-5xl text-black mb-1 "
      >
        LAI LAI
      </Link>
      <div>
        <Link
          to="/products"
          className="btn btn-ghost normal-case text-l text-black"
        >
          PRODUCTS
        </Link>
        <Link
          to="/cart"
          className="btn btn-ghost normal-case text-l text-black "
        >
          CART
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
