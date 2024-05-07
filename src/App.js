import React from "react";
import Navbar from "./components/Navbar";
import { FoodContextProvider } from './context/FoodContext';
import "./App.css"
import Category from "./components/category";
import Card from "./components/card";


const App = () => {
  return (
   <FoodContextProvider>
    <div>
      <Navbar />
      <Category/>
      <Card/>
    </div>
   </FoodContextProvider>
  );
};

export default App;
