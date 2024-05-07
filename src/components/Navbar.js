import React, { useContext } from "react";
import { FoodContext } from "../context/FoodContext"; 

const Navbar = () => {

  const {displayFood, setDisplayFood,handleSearch,input}=useContext(FoodContext)
  return (
    <div className="navbar">
      <img src="./ficon.svg" className="App-logo" alt="logo" />
      <h1>Food App</h1>
      <input type="text" placeholder="Search"
      value={input}
      onChange={handleSearch}
      />
    </div>
  );
};

export default Navbar;
