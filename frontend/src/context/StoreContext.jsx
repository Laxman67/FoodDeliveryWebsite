import { createContext, useEffect } from 'react';

// Data to Pass
import { food_list } from '../assets/assets';
import { useState } from 'react';

// Context Instance
export const StoreContext = createContext();

// Function to create
const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems({ ...cartItems, [itemId]: 1 });
    } else {
      setCartItems({ ...cartItems, [itemId]: cartItems[itemId] + 1 });
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems({ ...cartItems, [itemId]: cartItems[itemId] - 1 });
  };

  let contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };
  
  const getTotalCartAmount=()=>{
    let totalAmount= 0
    for (const item in cartItems) {
      let itemInfo= food_list.find((product)=>product._id===item)
      totalAmount+= itemInfo.price*cartItems[item];
      
    }
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
