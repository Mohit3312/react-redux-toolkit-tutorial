import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./redux/productSlice";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productsSelector = useSelector((state) => state.products.items);
  console.log(productsSelector);

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
              <button className="add-btn">Add To Cart</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Product;
