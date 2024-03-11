

const Header = () => {


  return (
    <header className="header">
      <div className='top-header'>
        <span>Mojo Furniture</span>
      </div>
      <div className="categories">
      <nav className="nav">
        <ul className="header-list">
          <li className="header-category"><a href="#">Mens Clothing</a></li>
          <li className="header-category"><a href="#">Womens Clothing</a></li>
          <li className="header-category"><a href="#">Jewlery</a></li>
          <li className="header-category"><a href="#">Electronics</a></li>
        </ul>
      </nav>
        <input placeholder="Search for items..." className="product-search"/>
      </div>
    </header>
  )
}

export default Header