import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../context/ShopContext"
import { useContext, useEffect, useState } from "react"

import closeIcon from '../resources/close.png'
import heartIcon from '../resources/heart.png'


const CartProduct = (props) => {

  const { addToCart, removeFromCart, cartItems} = useContext(ShoppingCartContext)

  const [containerWidth, setContainerWidth] = useState(window.innerWidth)
  const [isDesktop, setIsDekstop] = useState(true)

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

  return (
    <div className={isDesktop ? 'cart-product-container' : 'cart-product-container-mobile'}>
      <div className="cart-product-card">
        <div className="cart-title-container">
          <div className="cart-top-row">
            <Link to={`/products/${props.id}`}>
              <span className="cart-name-text">{props.name}</span> 
            </Link>
            <span className="cart-price-text">${props.price * cartItems[props.id]}</span>
          </div>
          <span className="cart-qty-text">QTY {cartItems[props.id]}</span> 
        </div>
        <div className="cart-product-image-row" >
          <img className="cart-product-image" src={props.img}/>
          <div className="cart-product-icon-container">
            <div className="cart-icon" onClick={() => removeFromCart(props.id)}>
              <img src={closeIcon} style={{height: '30px'}}  />
              <span className="delete-item-text">Remove</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProduct