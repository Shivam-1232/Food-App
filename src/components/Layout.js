import React, { useContext, useState } from "react";
import { Outlet } from 'react-router'
import Navbar from './Navbar'
import Category from './category'
import Footer from './Footer'
import Cart from './Cart'
import Modal from "react-modal"
import Recipe from "./Recipe";
import { FoodContext } from "../context/FoodContext";

const Layout = () => {
  const[showCart, setShowCart] = useState(false);

  const { showModal } = useContext(FoodContext);

  const handlevisible = () => {
    setShowCart(!showCart);
  };

  const customStyles = {
    content: {
      // top: "120px",
      top:"0",
      left: "0",
      right: "0",
      bottom: "0",
      border: "none",
      background: "transparent",
    },
  };

  return (
    <div
      style={{ position: "relative", maxwidth: "100vw", overflow: "hidden" }}
    >
      <Cart showCart={showCart} toggle={handlevisible} />
      <Modal isOpen={showModal} style={customStyles}>
        <Recipe
         />
      </Modal>
      <Navbar toggle={handlevisible} />
      <Category />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;