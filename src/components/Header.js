import React, {useState, useEffect} from "react"

import logo from '../resources/logo.jpg'
import searchIcon from '../resources/searchicon.svg'
import clearIcon from '../resources/close.png'
import furniture from '../resources/furnitureData.js'

const Header = () => {

  const [searchQuery, setSearchQuery] = useState("")
  const [clearStatus, setClearStatus] = useState(false)

  const handleInput = (event) => {
    setSearchQuery(event.target.value)

  }

  const handleClear = () => {
    setSearchQuery("")
  }

  return (
    <header className="header">
      <div className='top-header'>
        <img className='logo' src={logo}/>
      </div>
      <div className="categories">
      <nav className="nav">
        <ul className="header-list">
          <li className="header-category"><a href="#">Seating</a></li>
          <li className="header-category"><a href="#">Tables</a></li>
          <li className="header-category"><a href="#">Dressers</a></li>
          <li className="header-category"><a href="#">Accessories</a></li>
        </ul>
      </nav>
        <div className='header-icons'>
          <div className="product-search-container">
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
                    <img src={item.img} style={{height:'120px'}}/>
                    <div style={{marginLeft: '20px'}}>
                      {item.name}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header