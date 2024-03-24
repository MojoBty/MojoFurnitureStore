import '../App.css'
import Header from "../components/Header"
import ProductGrid from "../components/ProductGrid"
import Footer from '../components/Footer'


const Products = () => {

  return (
    <div className='App'>
      <Header className="app_header"/>
      <ProductGrid />
      <Footer />
    </div>
  )
}

export default Products