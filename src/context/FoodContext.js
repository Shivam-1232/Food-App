import { createContext,useState,useEffect, useReducer } from "react";
import FoodData from "../FoodData";
import FoodReducer from "./FoodReducer";

export const FoodContext = createContext(FoodData);

export const FoodContextProvider = ({ children }) => {

  const initialCategories= {
    All:false,
    Lunch:false,
    Dinner:false,
    Breakfast:false,
    Snacks:false,
    Drinks:false,    
   };
  const [input, setInput] = useState('');
  
  // const [category, setCategory] = useState();
  const initializeFunc = (args) => {
    args.All = true;
    return args
  }
  const [category, dispatch] = useReducer(FoodReducer, initialCategories,  initializeFunc);

  console.log(category);

  const [displayFood, setDisplayFood] = useState(FoodData);
  const [cartItems, setCartItems] = useState([]);
  
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
  
  const handleClick = (data) => {
    // for (const key in category) {
    //   category[key] = false;
    // }
    // setCategory({...category, [data]: true});
    dispatch({ type: data, initialCategories})
  };

  useEffect(() => {
    const newArray = Object.keys(category);
    const trueCategory = newArray.filter((data) =>category[data] === true)[0];
    const filterCategory = FoodData.filter(
      (foodItem) => trueCategory === "All" || foodItem.category === trueCategory
    );
    setDisplayFood(filterCategory);
    setInput("");
  }, [category]);

  const values ={cartItems, setCartItems, setInput,setDisplayFood,input,category,displayFood,handleSearch,handleClick}
  

  
  return (
    <FoodContext.Provider value={values}>
      {children}
    </FoodContext.Provider>
  );
};
