import React, {useState, useEffect} from 'react';
import shoppingBag from '../resources/shopping.svg'


const ProductDisplay = () => {

  const [buttonWidth, setButtonWidth] = useState(50)
  
  
  useEffect(() => {
    const handleScroll = () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 60) {
          setButtonWidth(225)
          
        } else {
          setButtonWidth(50)
          
        }
    }
    window.addEventListener('scroll', handleScroll);

    
  })


  return (
    <div className='product-display'>
      <div className='testimony'>
      
        <span>★★★★★</span>
        <span>“modern furniture at a great price!” </span>
        <button className='wardrobe-button'>SHOP WARDROBE FURNITURE</button>
      </div>
      <div className='shopbutton-container'>
        <button className='shopbutton' style={{ width: `${buttonWidth}px`}}>
        <img src={shoppingBag} alt='idc'/>
        <span className={(buttonWidth >= 225) ? 'button-text' : ''} >{(buttonWidth >= 225) ? 'SHOP THE ROOM' : ''}</span>
        </button>
      </div>
      
    </div>
  )
}

export default ProductDisplay;