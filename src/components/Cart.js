import React, { useContext, useEffect, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FoodContext } from "../context/FoodContext";
import CartItem from "./CartItem";
import { Transition } from "react-transition-group";
import { Link } from "react-router-dom";

const duration = 400;

const defaultStyle = {
  transition: `right ${duration}ms ease-in-out`,
};

const transitionStyles = {
  entering: { right: "-600px" },
  entered: { right: "0px" },
  exiting: { right: "0px" },
  exited: { right: "-600px" },
};

const Cart = ({ showCart, toggle }) => {
  const { cartItems, quantity, setCartItems, totalItems } =
    useContext(FoodContext);

  const nodeRef = useRef(null);

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * quantity[item.id],
    0
  );

  // save cart Items in local Storage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, [setCartItems]);

  return (
    <Transition nodeRef={nodeRef} in={showCart} timeout={duration}>
      {(state) => (
        <div
          className="cart"
          style={{ ...defaultStyle, ...transitionStyles[state] }}
          ref={nodeRef}
        >
          <div className="cart-details">
            <div className="cart-heading">
              <h3>Cart Details</h3>
              <IoCloseSharp className="close-icon" onClick={() => toggle()} />
            </div>
            <div className="cart-items">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    price={item.price}
                    quantity={quantity[item.id]}
                  />
                ))
              ) : (
                <div className="empty-cart">
                  <h3>Cart is empty</h3>
                </div>
              )}
            </div>
          </div>
          <div className="checkout-summary">
            <h4>Items: {totalItems}</h4>
            <h4>Total Amount: ₹{totalAmount.toFixed(2)}</h4>
            <hr />
            <Link to="/checkout" className="checkout-button">
              Buy Now
            </Link>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default Cart;
