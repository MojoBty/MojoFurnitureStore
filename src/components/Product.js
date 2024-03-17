

const Product = (props) => {

  return (
    <div className={`product-info ${props.transition}`} style={{paddingRight:props.padding, paddingLeft:props.padding}}>
      <img className="product-image" src={props.img}/>
      <div className="text-container">
        <span className="name-text">{props.name}</span>
        <span className="price-text">{props.price}</span>
      </div>
    </div>
  )
}

export default Product