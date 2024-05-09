import React, { useState, useContext } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FoodContext } from "../context/FoodContext";

const Cart = ({ showCart }) => {

  const { cartItems } = useContext(FoodContext);

  return (
    <div className="cart" style={{ right: showCart ? '0px' : '-600px' }}>
      <div className="cart-details">
        <h2>Cart Details</h2>
        <IoCloseSharp className="close-icon"/>
        {cartItems.map(item => (
          <div key={item.id}>
            <button onClick={() => console.log('remove', item.name)}>
              Remove
            </button>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;