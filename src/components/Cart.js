import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCart, addToCart } from "../redux/cartReducer";
import { Redirect } from "react-router-dom";

function Cart(props) {
  useEffect(() => {
    props.getCart();
  }, []);

  if (!props.userReducer.user.user_email) {
    return <Redirect to="/" />;
  }

  if (props.cartReducer.loading)
    return <div className="busy-cursor cart">Loading your cart...</div>;

  return (
    <div className="cart">
      <div className="cart-info">
        <h2>Your Cart</h2>
        <h2>
          Cart Total: $
          {props.cartReducer.cart.reduce((acc, cur) => {
            console.log(cur.qty * +cur.price);
            return (acc += cur.qty * +cur.price);
          }, 0)}
        </h2>
      </div>

      {props.cartReducer.cart.map(product => {
        return (
          <div key={product.product_id} className="product">
            <p>name: {product.name}</p>
            <p>price: ${product.price}</p>
            <p>quantity: {product.qty}</p>
            <img src={product.image_1_url} alt={product.name} height={200} />
            <button onClick={() => props.addToCart(product.product_id)}>
              Increase Qty
            </button>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = reduxState => ({
  cartReducer: reduxState.cartReducer,
  userReducer: reduxState.userReducer
});

const mapDispatchToProps = {
  getCart,
  addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
