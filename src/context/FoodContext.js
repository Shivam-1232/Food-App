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

  //for quantity
  const [quantity, setQuantity] = useState({});

  // for show modal in card 
const [showModal, setShowModal] = useState(false);

  
  const handleSearch = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    setInput(inputValue);
  }

  // for set the recipe items in modal

const [recipeItems, setRecipeItems] = useState(null);

 
  const addToCart = (itemToAdd) => {

    // let existingIDs = cartItems.map(item => item.id);

    // let isIncluded = existingIDs.includes(itemToAdd.id);

    const testIdFucntion = (input) => {
      return input.id === itemToAdd.id
    }

    const index = cartItems.findIndex(testIdFucntion);

    if (index === -1) {
      const updatedCartItems = [...cartItems, itemToAdd];
      setCartItems(updatedCartItems);
      setQuantity(prev => ({...prev, [itemToAdd.id]: 1}));
    } else {
      setQuantity(prev => ({...prev, [itemToAdd.id]: prev[itemToAdd.id] + 1}))
    }
  }; 
  
  // decerese the quantity based on item is present in cart or not

const decreaseQuantity = (itemId) => {
 
  // Calculate the updated quantity for the given item ID
  const updatedquantity = quantity[itemId] - 1;  
  
  //Check if the updated quantity is less than or equal to 0

  if (updatedquantity <= 0) {
    //If the updated quantity is 0 or less, remove the item from cartItems
    const newCartItems = cartItems.filter((cartItem) => cartItem.id !== itemId);
    setCartItems(newCartItems);

    //Also remove the item from the quantity state
    setQuantity(prev => {
      const updatedQuantity = {...prev};
      delete updatedQuantity[itemId];
      return updatedQuantity;
    })
  }
  else {
    //If the updated quantity is more than 0, simply update the quantity state
    setQuantity(prev => ({...prev, [itemId]: updatedquantity}))
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
    handleDelete,
    addToCart,
    quantity,
    decreaseQuantity,
    showModal,
    setShowModal,
    recipeItems,
    setRecipeItems,
  }
  

  
  return (
    <FoodContext.Provider value={values}>
      {children}
    </FoodContext.Provider>
  );
};
