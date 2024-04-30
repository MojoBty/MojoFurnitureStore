import '../App.css'
import Header from "../components/Header"
import ProductGrid from "../components/ProductGrid"
import Footer from '../components/Footer'


const Dressers = () => {

  return (
    <div className='App'>
      <Header className="app_header"/>
      <ProductGrid productType='Dressers'/>
      <Footer />
    </div>
  )
}

export default Dressers