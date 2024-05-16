import React from "react";
import { FoodContextProvider } from './context/FoodContext';
import "./App.css"
import Card from "./components/card";
import Recipe from "./components/Recipe"; 
import{ BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Layout from "./components/Layout";
import { ToastContainer } from "react-toastify";


const App = () => {
  return (
    <>
    <ToastContainer
     position="top-center"
     autoClose={2000}
     hideProgressBar={true}
     closeOnClick
   />
    <FoodContextProvider>
      <Router>
        <Routes>
          <Route element={<Layout/>}>
          <Route path="/" element={<Card/>} />
          <Route path="/recipe/:name" element={<Recipe/>} />
          </Route>
        </Routes>
      </Router>
    </FoodContextProvider>
    </>
  );
};

export default App;


