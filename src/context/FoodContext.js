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

  const [displayFood, setDisplayFood] = useState(FoodData);
  // for cart items
  const [cartItems, setCartItems] = useState([]);
  const [quntity, setQuantity] = ([]);


  
  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    setInput(inputValue);
  }
 
  const addToCart = (itemToAdd) => {

    // let existingIDs = cartItems.map(item => item.id);

    // let isIncluded = existingIDs.includes(itemToAdd.id);

    const testIdFucntion = (input) => {
      return input.id === itemToAdd.id
    }

    const index = cartItems.findIndex(testIdFucntion);

    if (index === -1) {
      // Item doesn't exist in the cart, add with quantity 1
      const updatedCartItems = [...cartItems, itemToAdd];
      setCartItems(updatedCartItems);
      setQuantity(prev => ({...prev, [itemToAdd.id]: 1}));
    } else {
      // const updatedCartItems = [...cartItems, addQuantity(cartItems[index])];
      // let existingItem = cartItems[index];
      // existingItem.quantity = existingItem.quantity + 1;
      // cartItems[index] = existingItem;
      // console.log(cartItems);
      setQuantity(prev => ({...prev, [prev.itemToAdd.id]: prev.itemToAdd.id + 1}));
      // const updatedCartItems = [...cartItems, { ...itemToAdd, quantity: 1 }];
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
    handleDelete,
    addToCart,
    quntity
  }
  

  
  return (
    <FoodContext.Provider value={values}>
      {children}
    </FoodContext.Provider>
  );
};
