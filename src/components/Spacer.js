import { Link } from "react-router-dom"


const Spacer = () => {
  return (
    <div className="spacer">
      <div className="spacer-text">
        So what are you waiting for? Start renovating.
      </div>
      <Link to='/products'>
        <button className='wardrobe-button'>SHOP ALL FURNITURE</button>
      </Link>
    </div>
  )
  
}

export default Spacer