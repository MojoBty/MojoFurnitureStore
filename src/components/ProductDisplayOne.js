import React, {useState, useEffect} from 'react';
import shoppingBag from '../resources/shopping.svg'
import closeIcon from '../resources/close.png'
import Product from './Product'
import furniture from '../resources/furnitureData';

const ProductDisplayOne = () => {

  const [buttonWidth, setButtonWidth] = useState(50)
  const [modalOpen, setModalOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 65) {
          setButtonWidth(225)
          
        } else {
          setButtonWidth(50)
          document.body.style.overflow = 'auto';
        }
    }
    window.addEventListener('scroll', handleScroll);

    
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
  
  const productArray = furniture.slice(0,4).map((item, index) => (
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
      <div className='product-display'>
        <div className='testimony'>
        
          <span>★★★★★</span>
          <span>“modern furniture at a great price!” </span>
          <button className='wardrobe-button'>SHOP WARDROBE FURNITURE</button>
        </div>
        <div className='shopbutton-container'>
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

export default ProductDisplayOne;