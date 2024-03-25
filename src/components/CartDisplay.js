
import React, { useState, useEffect, useContext } from 'react'
import { ShoppingCartContext } from '../context/ShopContext'
import furniture from '../resources/furnitureData'
import CartProduct from '../components/CartProduct'
 
const CartDisplay = () => {

  const { addToCart, reomveFromCart, cartItems, getCartItems } = useContext(ShoppingCartContext)

  
  const test = () => {
    for (let i = 1; i < cartItems.length + 1; i++) {
      const itemIds = []
      if (cartItems[i] !== 0 )
      itemIds.push(i)
    }
  }

  return (
    <div className="cart-display-container">
      <div className="cart-product-info"> 
        {furniture.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <CartProduct 
              id = {item.id}
              name = {item.name}
              img = {item.img}
              price ={item.price}
              description = {item.description}
            />
          }
        })}
      </div>
      <div className="cart-summary">
        text
      </div>
    </div>
  )
}

export default CartDisplay