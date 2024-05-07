import { createContext,useState } from "react";
import FoodData from "../FoodData";

export const FoodContext = createContext(FoodData);

const FoodContextProvider = ({ children }) => {

  const [Input, setInput] = useState();
  const [category, setCategory] = useState({
    All:true,
    Lunch:false,
    Dinner:false,
    Breakfast:false,
    Snacks:false,    
   });
  const [displayFood, setDisplayFood] = useState(FoodData);

  const values ={setInput,setCategory,setDisplayFood,Input,category,displayFood}
  
  
  return (
    <FoodContext.Provider value={values}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;