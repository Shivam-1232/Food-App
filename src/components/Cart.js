import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Cart = () => {

    const [showCart, setShowCart] = useState(false);

  return (
    <div className="cart">
      <div className="cart-details">
        <h3>Cart Details</h3>
        <IoCloseSharp className="close-icon" onClick={()=> setShowCart(!showCart)}  />
      </div>
    </div>
  );
};

export default Cart;