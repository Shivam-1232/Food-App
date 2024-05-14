import { createContext,useState,useEffect, useReducer } from "react";
import FoodData from "../FoodData";
import FoodReducer from "./FoodReducer";

export const FoodContext = createContext();

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
  };

  const [category, dispatch] = useReducer(FoodReducer, initialCategories,  initializeFunc);

  console.log(category);

  const [displayFood, setDisplayFood] = useState(FoodData);
  // for cart items
  const [cartItems, setCartItems] = useState([]);

// for show the cart panel
const [visibleCart, setVisibleCart] = useState(false);

const toggleCartVisibility = () => {
  setVisibleCart(!visibleCart);
};
  
  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    setInput(inputValue);
  }

  //to change qunatity in cart 
 
  const addToCart = (itemToAdd) => {
    const existingItem = cartItems.find(item => item.id === itemToAdd.id);
  
    if (existingItem) {
      // Item already exists in the cart, increase quantity
      const updatedCartItems = cartItems.map(item =>
        item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      // Item doesn't exist in the cart, add with quantity 1
      const updatedCartItems = [...cartItems, { ...itemToAdd, quantity: 1 }];
      setCartItems(updatedCartItems);
    }
  };  

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

  const handleDelete = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
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

  const values ={
    cartItems,
    setCartItems, 
    setInput,
    setDisplayFood,
    input,category,
    displayFood,
    handleSearch,
    handleClick,
    cartItems,
    setCartItems,
    visibleCart,
    setVisibleCart,
    handleDelete,
    addToCart,
    toggleCartVisibility
  }
  

  
  return (
    <FoodContext.Provider value={values}>
      {children}
    </FoodContext.Provider>
  );
};
