import { createContext,useState } from "react";
import FoodData from "../FoodData";

export const FoodContext = createContext(FoodData);

const FoodContextProvider = ({ children }) => {

  const [Input, setInput] = useState();
  const [category, setCategory] = useState();
  const [displayFood, setDisplayFood] = useState();
  
  
  return (
    <FoodContext.Provider value={FoodData}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;