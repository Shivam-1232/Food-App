const FoodReducer = (state,action) => {

    const initialCategories = action.initialCategories;

    switch (action.type) {
       case 'All': return {...initialCategories, All: true};
       case 'Lunch': return {...initialCategories, Lunch: true};
       case 'All': return {...initialCategories, All: true};
       case 'All': return {...initialCategories, All: true};
       case 'All': return {...initialCategories, All: true};
        default:
            return state;
    }
}

export default FoodReducer