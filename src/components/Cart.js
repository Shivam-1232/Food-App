import React, { useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FoodContext } from "../context/FoodContext";

import CartItem from "./CartItem";

const Cart = ({ showCart, toggle }) => {

  const { cartItems, quntity } = useContext(FoodContext);

  console.log(cartItems);

  return (
    <div className="cart" style={{ right: showCart ? '0px' : '-600px' }}>
      <div className="cart-details">
        <div className="cart-heading">
        <h3>Cart Details</h3>
        <IoCloseSharp className="close-icon" onClick={() => toggle()} />
        </div>
        <div className="cart-items">
        {cartItems.map(({id, img, price, name}) => <CartItem key={id} id={id} img={img} name={name} price={price} quantity={quntity.id} />)}
      </div>
      <div className="checkout-summary">
          <h3>Items:1</h3>
          <h3>Total Amount:500</h3>
          <hr />
          <button className="checkout-button">Checkout</button>
          </div>
        </div>
    </div>
  );
};

export default Cart;
