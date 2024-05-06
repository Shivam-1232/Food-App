import { createContext,useState } from "react";
import FoodData from "../FoodData";

export const FoodContext = createContext(FoodData);

const FoodContextProvider = ({ children }) => {

  const [Input, setInput] = useState();
  const [category, setCategory] = useState();
  const [displayFood, setDisplayFood] = useState();

  const values ={setInput,setCategory,setDisplayFood,Input,category,displayFood}
  
  
  return (
    <FoodContext.Provider value={values}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;