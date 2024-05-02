import React, {useState, useEffect} from 'react';
import shoppingBag from '../resources/shopping.svg'
import closeIcon from '../resources/close.png'
import Product from './Product'
import furniture from '../resources/furnitureData';
import { Link } from 'react-router-dom';

const ProductDisplayTwo = () => {

  const [buttonWidth, setButtonWidth] = useState(50)
  const [modalOpen, setModalOpen] = useState(false)
  const [isDesktop, setIsDekstop] = useState(true)
  const [containerWidth, setContainerWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 1760) {
          setButtonWidth(225)
          
        } else {
          setButtonWidth(80)
          
        }
    }
    window.addEventListener('scroll', handleScroll);
  })

  useEffect(() => {
    if (containerWidth <= 1100) {
      setIsDekstop(false)
    } else {
      setIsDekstop(true)
    }
  })


  const handleModalOpen = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  }

  const handleModalClose = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  }

  const handleAnimationEnd = () => {
    if (!modalOpen) {
      setModalOpen(false)
    }
  }

  const modalClassName = modalOpen ? 'shop-modal open' : 'shop-modal'
  
  const productArray = furniture.slice(6,10).map((item, index) => (
    <div key={index}>
      <Product 
        id = {item.id}
        name = {item.name}
        img = {item.img}
        price ={item.price}
        description = {item.description}
      />
    </div>
  ))
  

  return (
    <div>
      <div className='product-display product-display-two'>
        <div className='testimony-two'>
        
          <span>★★★★★</span>
          <span>“made my living room look stunning!” </span>
          <Link to="/products">
            <button className={isDesktop ? 'wardrobe-button' :  'wardrobe-button-mobile'}>SHOP LIVING ROOM FURNITURE</button>
          </Link>
        </div>
        <div className='shopbutton-container-two'>
          <button className='shopbutton' style={{ width: `${buttonWidth}px`}} onClick={handleModalOpen}>
            <img src={shoppingBag} alt='idc'/>
            <span className={(buttonWidth >= 225) ? 'button-text' : ''} >{(buttonWidth >= 225) ? 'SHOP THE ROOM' : ''}</span>
          </button>
        </div>
         
        <div className={modalClassName}  onAnimationEnd={handleAnimationEnd}>
          <div className='modal-content'>
            <img className='close-icon' src={closeIcon} alt="closeIcon" onClick={handleModalClose}/>
            <div className='product-grid'>
            {productArray}

            </div>
          </div>
        </div>
        <div className={ modalOpen ? 'backdrop' : ''}>

        </div>
      </div>
    </div>
  )
}

export default ProductDisplayTwo;