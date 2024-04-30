import React, {useState, useEffect, useContext} from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../context/ShopContext.js"

import logo from '../resources/logo.jpg'
import searchIcon from '../resources/searchicon.svg'
import clearIcon from '../resources/close.png'
import heartIcon from '../resources/heart.png'
import userIcon from '../resources/user.png'
import cartIcon from '../resources/shoppingcart.png'
import furniture from '../resources/furnitureData.js'

const Header = () => {

  const [searchQuery, setSearchQuery] = useState("")
  const [clearStatus, setClearStatus] = useState(false)
  const {cartItems, getCartItemAmount} = useContext(ShoppingCartContext)

  const [isDesktop, setIsDekstop] = useState(true)
  const [containerWidth, setContainerWidth] = useState(window.innerWidth)
  

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

  const handleInput = (event) => {
    setSearchQuery(event.target.value)

  }

  const handleClear = () => {
    setSearchQuery("")
  }


  return (
    <header className="header">
      <div className='top-header'>
        <Link to="/">
          <img className='logo' src={logo} />
        </Link>      
      </div>
      <div className={isDesktop ? "categories" : 'categories-mobile'}>
        <nav className={isDesktop ? "nav" : 'nav-mobile'}>
          <ul className="header-list">
            
            <li className="header-category"><Link to="/products">Shop All</Link></li>
            <li className="header-category"><Link to="/products/seating">Seating</Link></li>
            <li className="header-category"><Link to="/products/tables">Tables</Link></li>
            <li className="header-category"><Link to="/products/dressers">Dressers</Link></li>
          </ul>
        </nav>
        <div className='container'>
          <div className="product-search-container" >
            <div className="product-search">
              <input placeholder="" type="text" value={searchQuery} className='product-input' onChange={handleInput}/>
              
              <button className={`${(searchQuery.length >= 1) ? "clear-button" : "clear-button-hidden"} `} onClick={handleClear}>
                <img src={clearIcon} className="clear-icon" alt="clearIcon" />
              </button>
        
              <button className='search-icon'>
                <img src={searchIcon}/>
              </button>
            </div>
            <div className={(searchQuery !== "") ? 'product-results' : 'product-results hidden'}>
              <ul>
                {furniture.filter((item) => {
                  return item.name.toLowerCase().includes(searchQuery.toLowerCase())
                }).slice(0,5).map((item, index) => (
                  <li className="product-reslults-list" key={index}>
                    <Link to={`/products/${item.id}`}>
                      <img src={item.img} style={{height:'120px'}}/>
                    </Link>
                    <div style={{marginLeft: '20px'}}>
                      <Link to={`/products/${item.id}`}>
                        {item.name}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        <div className="header-icons">
          
          <Link to='/cart'>
            <button className='icon-button'>
              <img src={cartIcon} alt="cartIcon" className='header-icon'/>
              <div className={getCartItemAmount() === 0 ? "qty-counter-hidden" : "qty-counter"}>
                {getCartItemAmount()}
              </div>
            </button>       
          </Link>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header