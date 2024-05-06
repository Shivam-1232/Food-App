import React from "react";
import Navbar from "./components/Navbar";
import FoodContextProvider from "./context/foodContext";
import "./App.css"


const App = () => {
  return (
   <FoodContextProvider>
    <div>
      <Navbar />
    </div>
   </FoodContextProvider>
  );
};

export default App;
