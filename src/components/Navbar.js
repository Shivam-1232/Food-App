import React, { useContext, useState } from "react";
import { FoodContext } from "../context/FoodContext"; 
import { IoMdCart } from "react-icons/io";

const Navbar = () => {

  const {displayFood, setDisplayFood,handleSearch,input}=useContext(FoodContext)
  
  const[showCart, setShowCart] = useState(false);

  const handlevisisble = () =>
    {
      setShowCart(!showCart);
    }
   return (
    <div className="navbar">
      <img src="../ficon.svg" className="App-logo" alt="logo" />
      <h1>Swigato</h1>
      <IoMdCart className="cart-icon" onClick={handlevisisble} />
      <input type="text"
       name="search"
       placeholder="Search"
      value={input}
      onChange={handleSearch}
      />
    </div>
  );
};

export default Navbar;
