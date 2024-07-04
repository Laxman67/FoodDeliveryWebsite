import { createContext } from 'react';

// Data to Pass
import { food_list } from '../assets/assets';

// Context Instance
export const StoreContext = createContext();

// Function to create 
const StoreContextProvider = (props) => {
  let contextValue = {
    food_list,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
