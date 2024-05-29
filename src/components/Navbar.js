import React, { useContext, } from "react";
import { FoodContext } from "../context/FoodContext"; 
import { IoMdCart } from "react-icons/io";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useColorScheme } from "../hooks/useColorScheme";

const Navbar = ({ toggle }) => {
  const {handleSearch,input}=useContext(FoodContext);

  const { isDark, setIsDark } = useColorScheme();
  
   return (
    <div className="navbar">
      <img src="../ficon.png" className="App-logo" alt="logo" />
      <h1>Swigato</h1>
      <IoMdCart className="cart-icon" onClick={toggle} />
      <DarkModeSwitch
        onChange={setIsDark}
        checked={isDark}
        className="dark-mode-switch"
        animationProperties={{ duration: 300 }}
        aria-label="Dark mode toggle"
      />
      <input 
       type="text"
       name="search"
       placeholder="Search"
      value={input}
      onChange={handleSearch}
      />
    </div>
  );
};

export default Navbar;
