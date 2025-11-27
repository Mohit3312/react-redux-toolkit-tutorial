import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./redux/productSlice";
import { addItem } from "./redux/slice";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const cartSelector = useSelector((state) => state.cart.items);

  const productsSelector = useSelector((state) => state.products.items);

  return (
    <div className="grid">
      {productsSelector.length &&
        productsSelector.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.thumbnail} />
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="brand">{item.brand}</div>
              <div className="price">{item.price}</div>
              <div className="rating">{item.rating}</div>
              {cartSelector?.find((cartItem) => cartItem.id === item.id) ? (
                <button className="add-btn add-btn-disable">
                  Added to Cart
                </button>
              ) : (
                <button
                  className="add-btn"
                  onClick={() => dispatch(addItem(item))}
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Product;
