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
  const [cartItemIds, setCartItemIds] = useState([])

  const getCartItemAmount = () => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0)
  }

  const getCartItems = () => {
    let updatedItemIds = [cartItemIds]
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i] !== 0) {
        updatedItemIds = [...cartItemIds, i]
      }
    }
    setCartItemIds(updatedItemIds)
  }

  const addToCart = (itemId, qty) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + parseInt(qty) }))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
  }

  console.log(cartItems)

  const contextValue = {cartItems, cartItemIds, addToCart, removeFromCart, getCartItemAmount, getCartItems}

  return <ShoppingCartContext.Provider value={contextValue}>
    {props.children}
  </ShoppingCartContext.Provider>
}