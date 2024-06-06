import React from "react";
import { FoodContextProvider } from './context/FoodContext';
import "./App.css"
import Card from "./components/card"; 
import{ BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Layout from "./components/Layout";
import { ToastContainer } from "react-toastify";
import Checkout from "./components/Checkout";
import About from "./components/About";
import Error from "./components/Error";
import { Login } from "./components/Login";
import { AuthProvider } from "./hooks/useAuth";
import { ProtectedRoute } from "./routes/ProtectedRoutes";
import HomePage from "./components/Homepage";
import Loader from "./components/Loader";

const App = () => {
  return (
    <>
    <ToastContainer
     position="top-center"
     autoClose={2000}
     hideProgressBar={true}
     closeOnClick
   />
<Router>
        <AuthProvider>
          <FoodContextProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route
                  path="/card"
                  element={
                    <ProtectedRoute>
                      <Card />
                    </ProtectedRoute>
                  }
                />
              </Route>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/loader" element={<Loader />} />
            </Routes>
          </FoodContextProvider>
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;


