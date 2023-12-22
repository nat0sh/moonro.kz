import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  orders: [],
  isInitialized: false,
};

const CartContext = createContext();

const cartReducer = (state, action) => {
  
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, orders: [...state.orders, action.payload] };
    case 'REMOVE_FROM_CART':
      return { ...state, orders: state.orders.filter((order) => order.id !== action.payload) };
    case 'CLEAR_CART':
      return { ...state, orders: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => dispatch({ type: 'ADD_TO_CART', payload: item });
  const removeFromCart = (itemId) => dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const contextValue = { cart, addToCart, removeFromCart, clearCart };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
