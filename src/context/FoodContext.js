import { createContext,useState,useEffect } from "react";
import FoodData from "../FoodData";

export const FoodContext = createContext(FoodData);

export const FoodContextProvider = ({ children }) => {

  const [input, setInput] = useState('');
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
    const filteredCards = displayFood.filter(foodItem =>
    foodItem.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayFood(filteredCards);
  }, [input]);   

  useEffect(() => {
    const newArray = Object.keys(category);
    const trueCategory = newArray.filter((data) => { category[data] === true})[0];
    const filteredCards = displayFood.filter(foodItem =>
     trueCategory === 'All' || foodItem.category === trueCategory 
    );
    setDisplayFood(filteredCards);
  }, [category])
  
  const values ={setInput,setCategory,setDisplayFood,input,category,displayFood,handleSearch}
  
  
  return (
    <FoodContext.Provider value={values}>
      {children}
    </FoodContext.Provider>
  );
};