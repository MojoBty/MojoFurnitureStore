import '../App.css'
import React, { useState, useEffect, useContext } from 'react'
import Header from '../components/Header'
import CartDisplay from '../components/CartDisplay'

import { ShoppingCartContext } from '../context/ShopContext'

const Cart = () => {
  const { addToCart, removeFromCart } = useContext(ShoppingCartContext)

  return (
    <div className='App'>
      <Header />
      <CartDisplay />
    </div>
  )
}

export default Cart