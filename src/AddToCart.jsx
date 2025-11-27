import { useSelector } from "react-redux";

const AddToCart = () => {
  const cartSelector = useSelector((state) => state.cart.items);

  return (
    <div className="cart">
      <span className="cart-icon">🛒</span>
      <span className="cart-count" id="cartCount">
        {cartSelector.length || 0}
      </span>
    </div>
  );
};

export default AddToCart;
