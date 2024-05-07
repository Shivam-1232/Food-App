import { createContext,useState,useEffect } from "react";
import FoodData from "../FoodData";

export const FoodContext = createContext(FoodData);

export const FoodContextProvider = ({ children }) => {

  const [Input, setInput] = useState('');
  const [category, setCategory] = useState({
    All:true,
    Lunch:false,
    Dinner:false,
    Breakfast:false,
    Snacks:false,    
   });
  const [displayFood, setDisplayFood] = useState(FoodData);
  
  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    setInput(inputValue);
  }
  // useEffect(() =>{
  //   const filterdisplayfood = displayFood.filter(Food => Food.name.toLowerCase().includes(Input.toLowerCase()))
  //   setDisplayFood(filterdisplayfood)
  // },[Input])
  useEffect(() => { 
    if (Input === '') {
      setDisplayFood(FoodData);
      return;
    }
    else{
      const filteredCards = displayFood.filter(foodItem =>
        foodItem.name.toLowerCase().includes(Input.toLowerCase())
        );
        setDisplayFood(filteredCards);
    }
    
  }, [Input]);   
  
  const values ={setInput,setCategory,setDisplayFood,Input,category,displayFood,handleSearch}
  
  
  return (
    <FoodContext.Provider value={values}>
      {children}
    </FoodContext.Provider>
  );
};
