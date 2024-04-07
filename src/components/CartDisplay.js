
import React, { useState, useEffect, useContext } from 'react'
import { ShoppingCartContext } from '../context/ShopContext'
import furniture from '../resources/furnitureData'
import CartProduct from '../components/CartProduct'
import { Link } from 'react-router-dom'
 
const CartDisplay = () => {

  const { addToCart, reomveFromCart, cartItems, getCartItems, getCartPrices, getItemAmount } = useContext(ShoppingCartContext)

  const [containerWidth, setContainerWidth] = useState(window.innerWidth)
  const [isDesktop, setIsDekstop] = useState(true)
  const [itemsPresent, setItemsPresent] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
  })

  useEffect(() => {
    if (containerWidth <= 1100) {
      setIsDekstop(false)
    } else {
      setIsDekstop(true)
    }
  })

  const checkForItems = () => {
    for (const item in cartItems)
      if (cartItems[item] !== 0) {
        setItemsPresent(true)
      } else {
        setItemsPresent(false)
      }
  }


  const totalOrderPrice = (getCartPrices() + 0.0725 * getCartPrices()).toFixed(2)

  return (
    <div className="cart-display-container">
      <div className='cart-title'>
        Cart: <span style={{color: 'rgb(100, 100, 100)'}}>({getItemAmount()} item{getItemAmount() == 1 ? '' : 's'})</span>
      </div>
      {getCartPrices() == 0 ?
      <div className='cart-continue-shopping-container'>
        <span className='cart-continue-shopping-text'>It looks like there's no items in your cart...</span>
        <Link to='/products'>
          <button className='checkout-button'>
            CONTINUE SHOPPING
          </button>
        </Link>
      </div> : null}
      <div className={isDesktop ? 'cart-product-info-container': 'cart-product-info-container-mobile'}>
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
        {getCartPrices() !== 0 ? 
        <div className={isDesktop ? "cart-summary-container": "cart-summary-container-mobile"}>
          <span className='cart-summary-title'>Order Summary</span>
          <span className='cart-summary-subtotal'><span>Merchandise :</span> <span>${getCartPrices().toFixed(2)}</span></span>
          <span className='cart-summary-shipping'> <span>Est. Shipping and Handling:</span><span>$25.00</span></span>
          <span className='cart-summary-tax'> <span>Est. Tax:</span><span>${(0.0725 * getCartPrices()).toFixed(2)}</span></span>
          <hr className='cart-hr'/>
          <span className='cart-summary-tax' style={{fontWeight: 600, fontSize: '1.2rem'}}> <span>Est. Order Total:</span><span>${totalOrderPrice}</span></span>
          <hr className='cart-hr' style={{border: 'solid 1px'}}/>
          <div className={isDesktop ? "cart-checkout-button-container": "cart-checkout-button-container-mobile"}>
            <button className='checkout-button'>CHECKOUT NOW</button>
          </div>
        </div> : null}
      </div>
    </div>
  )
}

export default CartDisplay