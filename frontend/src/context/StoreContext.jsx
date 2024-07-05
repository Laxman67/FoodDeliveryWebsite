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
      setCartItems({ ...cartItems, [itemId]: 1 }));
    } else {
      setCartItems({ ...cartItems, [itemId]: cartItems[itemId] + 1 }));
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
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
