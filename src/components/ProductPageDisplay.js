import React, {useState, useEffect, useContext} from 'react'
import Footer from './Footer'
import { ShoppingCartContext } from '../context/ShopContext'

import heartIcon from '../resources/heart.png'

const ProductPageDisplay = (props) => {

  const { addToCart } = useContext(ShoppingCartContext)

  const [containerWidth, setContainerWidth] = useState(window.innerWidth)
  const [isDesktop, setIsDekstop] = useState(true)
  const [qty, setQty] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
  })

  useEffect(() => {
    if (containerWidth <= 1020) {
      setIsDekstop(false)
    } else {
      setIsDekstop(true)
    }
  })

  const handleQtyInput = (e) => {
    setQty(e.target.value)
  }

  return (
    <div >
      <div className={isDesktop ? `product-page-container-desktop` : `product-page-container-mobile`}>
        <img className={isDesktop ? `product-page-img-desktop` : `product-page-img-mobile`} src={props.img} />
        <div className={isDesktop ? `product-page-info` : `product-page-info-mobile`}>
          <div className='top-row'>
            <div className='product-page-display-title'>
              {props.name}
            </div>
            <div className='icon-container'>
              <img className='icon' src={heartIcon}/>
            </div>
          </div>
          <div className='product-page-price'>
            {props.price}
          </div>
          <div style={{display: 'flex'}}>
            <div className='qty-container'>
              QTY
              <div className='qty-input-container'>
                <input type='number' value={qty} onChange={handleQtyInput} className='qty-input' />
              </div>
            </div>
            <div className='atc-button-container'>
              <button className={isDesktop ? 'atc-button' : 'atc-button-mobile'} onClick={() => addToCart(props.id)}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    <div className='product-info-container'>
      <div className={isDesktop ? 'product-info-title' : 'product-info-title-mobile'}>
        Product Details
      </div>
      <div className='product-info-description'>
        {props.description}
      </div>
      <div className='product-dimensions-title'>
        Dimensions
      </div>
      <div className='product-dimensions-description'>
        {props.dimensions}
      </div>
    </div>
    <Footer />
    <div className="modal-background">
      <div className="cart-confirmation-container">
        <div className='atc-product'>
          <div></div>
          <img className={`cart-confirmation-img-desktop`} src={props.img} />
          <div className='atc-product-info'>
            {props.name}
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default ProductPageDisplay