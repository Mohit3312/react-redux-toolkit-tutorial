import { useDispatch } from "react-redux";
import { addItem, removeItem } from "./redux/slice";

const Product = () => {
  const dispatch = useDispatch();

  return (
    <section className="product-container">
      <div className="product-card">
        <img src="https://via.placeholder.com/250" alt="Product" />
        <h2>Smart Headphones</h2>
        <p className="price">₹1,999</p>
        <button
          className="add-btn"
          onClick={() => {
            dispatch(addItem(1));
            console.log("Clicked");
          }}
        >
          Add to Cart
        </button>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(1));
            console.log("Clicked");
          }}
        >
          Remove from Cart
        </button>
      </div>

      <div className="product-card">
        <img src="https://via.placeholder.com/250" alt="Product" />
        <h2>Wireless Mouse</h2>
        <p className="price">₹599</p>
        <button
          className="add-btn"
          onClick={() => {
            dispatch(addItem(1));
            console.log("Clicked");
          }}
        >
          Add to Cart
        </button>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(1));
            console.log("Clicked");
          }}
        >
          Remove from Cart
        </button>
      </div>

      <div className="product-card">
        <img src="https://via.placeholder.com/250" alt="Product" />
        <h2>Smartwatch</h2>
        <p className="price">₹2,499</p>
        <button
          className="add-btn"
          onClick={() => {
            dispatch(addItem(1));
            console.log("Clicked");
          }}
        >
          Add to Cart
        </button>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(1));
            console.log("Clicked");
          }}
        >
          Remove from Cart
        </button>
      </div>
    </section>
  );
};

export default Product;
