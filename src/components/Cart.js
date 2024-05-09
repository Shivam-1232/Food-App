import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Cart = () => {

    const [showCart, setShowCart] = useState(false);

  return (
    <div className="cart">
      <div className="cart-details">
        <h2>Cart Details</h2>
        <IoCloseSharp className="close-icon"/>
      </div>
    </div>
  );
};

export default Cart;