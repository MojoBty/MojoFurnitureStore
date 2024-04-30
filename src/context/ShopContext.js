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
  const [favoriteItems, setFavoriteItems] = useState(getDefaultCart())

  const getCartItemAmount = () => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0)
  }

  const getCartItems = () => {
    let counter = 0
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i] !== 0) {
        counter += 1
      }
    }
    return counter
  }

  const getCartPrices = () => {
    let totalAmount = 0
    for (const product in cartItems) {
      if (cartItems[product] > 0) {
        let productInfo = furniture.find((item) => item.id == Number(product))
        totalAmount += productInfo.price * cartItems[product]
        
      }
    }
    
    return totalAmount
  }

  const getItemAmount = () => {
    let itemAmount = 0
    for (const product in cartItems) {
      if (cartItems[product] > 0) {
        itemAmount += cartItems[product]
        
      }
    }

    return itemAmount
  }

  const addToCart = (itemId, qty) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + parseInt(qty) }))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: 0 }))
  }

  const addToFavorites = (itemId) => {
    setFavoriteItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeFromFavorites = (itemId) => {
    setFavoriteItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
  }


  const contextValue = {cartItems, cartItemIds, addToCart, removeFromCart, getCartItemAmount, getCartItems, getCartPrices, getItemAmount}

  return <ShoppingCartContext.Provider value={contextValue}>
    {props.children}
  </ShoppingCartContext.Provider>
}