import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const cartSelector = useSelector((state) => state.cart.items);

  return (
    <div className="cart">
      <Link to="/cart">
        <span className="cart-icon">🛒</span>
        <span className="cart-count" id="cartCount">
          {cartSelector.length || 0}
        </span>
      </Link>
    </div>
  );
};

export default AddToCart;
