const fruitJarReducer = (state, action) => {
    switch (action.type) {
      case 'SET_FRUIT':
        return {
          ...state,
          fruits: action.payload, 
        };
      case 'ADD_FRUIT':
        return {
          ...state,
          jar: [...state.jar, action.payload], 
        };
      case 'REMOVE_FRUIT':
        return {
          ...state,
          jar: state.jar.filter(fruit => fruit.name !== action.payload), 
        };
      default:
        return state;
    }
  };
  
  
  const initialState = {
    fruits: [],
    jar: [],
  };
  
  export { fruitJarReducer, initialState };