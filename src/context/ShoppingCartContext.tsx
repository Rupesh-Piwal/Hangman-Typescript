import { createContext, useContext } from "react";

const ShoppingCartContext = createContext({} as ShoppingCartContext);

// Custom Hook
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

// Provider Component
export function ShoppingCartProvider() {
    
}