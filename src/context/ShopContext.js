import { createContext, useContext, useState } from "react";
import furniture from '../resources/furnitureData'

export const ShoppingCartContext = createContext({})

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < furniture.length + 1; i++) {
    cart[i] = 0;
  }
  return cart
}



export const ShoppingCartProvider = ( props ) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  const getCartItemAmount = () => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0)
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
  }

  console.log(cartItems)

  const contextValue = {cartItems, addToCart, removeFromCart, getCartItemAmount}

  return <ShoppingCartContext.Provider value={contextValue}>
    {props.children}
  </ShoppingCartContext.Provider>
}