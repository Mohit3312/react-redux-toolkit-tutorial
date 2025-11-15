import Header from "./Header";
import "./App.css";
import Product from "./Product";
import { useDispatch } from "react-redux";
import { clearAllItems } from "./redux/slice";

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <h1>React Redux Toolkit Tutorial</h1>
      <button
        className="clear-cart-btn"
        onClick={() => dispatch(clearAllItems())}
      >
        Clear Cart
      </button>
      <Product />
    </>
  );
}

export default App;
