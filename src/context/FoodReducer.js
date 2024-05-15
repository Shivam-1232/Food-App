const FoodReducer = (state,action) => {

    const initialCategories = action.initialCategories;

    switch (action.type) {
       case 'All': 
            return {...initialCategories, All: true};
       case 'Lunch': 
            return {...initialCategories, Lunch: true};
       case 'Breakfast': 
            return {...initialCategories, Breakfast: true}; 
       case 'Dinner': 
            return {...initialCategories,Dinner: true};
       case 'Snacks': 
             return {...initialCategories, Snacks: true};
       case 'Drinks': 
             return {...initialCategories, Drinks: true};
        default:
            return state;
    }
}

export default FoodReducer