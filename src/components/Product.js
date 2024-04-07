import { Link } from "react-router-dom"

const Product = (props) => {

  return (
    <div className={`product-info ${props.transition}`} style={{paddingRight:props.padding, paddingLeft:props.padding}}>
      <Link to={`/products/${props.id}`}>
        <img className="product-image" src={props.img}/>
      </Link>
      <div className="text-container">
        <Link to={`/products/${props.id}`}>
          <span className="name-text">{props.name}</span>
        </Link>
        <span className="price-text">${props.price}</span>
      </div>
    </div>
  )
}

export default Product