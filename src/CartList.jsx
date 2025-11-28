import { useSelector } from "react-redux";

export default function CartList() {
  const cartSelector = useSelector((state) => state.cart.items);
  console.log(cartSelector);
  return (
    <>
      <div className="card-container">
        <div className="cart-header">
          <h2>Your Cart Items</h2>
          <span>{cartSelector.length} items</span>
        </div>
        {cartSelector?.length
          ? cartSelector.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <img src={item.thumbnail} />
                  <div className="item-details">
                    <h4>{item.title}</h4>
                    <p>{item.brand}</p>
                  </div>
                </div>
                <div className="item-actions">
                  <span className="price">{item.price}</span>
                  <button className="remove-btn">Remove</button>
                </div>
              </div>
            ))
          : null}
        <div className="cart-footer">
          Total: {cartSelector.reduce((sum, item) => sum + item.price, 0)}
        </div>
      </div>
    </>
  );
}
