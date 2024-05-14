import { MdDelete } from "react-icons/md";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import React, { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

const CartItem = ({ id, img, name, price, quantity }) => {

    const { handleDelete, addToCart } = useContext(FoodContext);


  return (
    <div className="cart-item">
      <img scr={img} alt="img" />
      <div className="cart-item-details">
          <h4>{name}</h4>
          <h5>₹{price}</h5>
          <div className="quantity">
          <FiMinusCircle className="minus-icon"/>
          <span>{quantity}</span>
          <button onClick={() => addToCart({ id, name, price, quantity, img})}>
          <FiPlusCircle className="plus-icon"/>
          </button>
          </div>
        </div>
        <MdDelete className="delete-icon" onClick={()=>handleDelete(id)}/>
      </div>
  )
}

export default CartItem