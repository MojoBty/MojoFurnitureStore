import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../context/ShopContext"
import { useContext } from "react"

const CartProduct = (props) => {

  const { addToCart, removeFromCart, cartItems} = useContext(ShoppingCartContext)

  return (
    <div className='cart-product-container'>
      <div className="cart-product-card">
        <div className="cart-title-container">
          <div className="cart-top-row">
            <Link to={`/products/${props.id}`}>
              <span className="cart-name-text">{props.name}</span> 
            </Link>
            <span className="cart-price-text">{props.price}</span>
          </div>
          <span className="cart-qty-text">QTY {cartItems[props.id]}</span> 
        </div>
        <div className="cart-product-image-row">
          <img className="cart-product-image" src={props.img}/>
        </div>
      </div>
    </div>
  )
}

export default CartProduct