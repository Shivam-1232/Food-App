import React, { useContext } from "react";
import { FoodContext } from "../context/FoodContext"; 
import { IoMdCart } from "react-icons/io";

const Navbar = () => {

  const {displayFood, setDisplayFood,handleSearch,input}=useContext(FoodContext)
 
  return (
    <div className="navbar">
      <img src="../ficon.svg" className="App-logo" alt="logo" />
      <h1>Swigato</h1>
      <IoMdCart className="cart-icon"  />
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
