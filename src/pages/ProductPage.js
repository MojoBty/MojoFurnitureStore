import '../App.css'
import Header from "../components/Header"
import ProductPageDisplay from '../components/ProductPageDisplay'

const ProductPage = (props) => {

  return (
    <div className='App'>
      <Header />
      <ProductPageDisplay 
        id = {props.id}
        name = {props.name}
        img = {props.img}
        price ={props.price}
        description = {props.description}
        dimensions = {props.dimensions}
      />
    </div>
  )
}

export default ProductPage