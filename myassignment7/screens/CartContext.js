import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [nextUniqueId, setNextUniqueId] = useState(1); // Initial unique ID counter

  const addToCart = (product) => {
    const newCartItem = { ...product, uniqueId: nextUniqueId };
    setCartItems([...cartItems, newCartItem]);
    setNextUniqueId(nextUniqueId + 1); // Increment for next unique ID
  };

  const removeFromCart = (uniqueId) => {
    setCartItems(cartItems.filter(item => item.uniqueId !== uniqueId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
