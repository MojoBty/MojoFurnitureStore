import '../App.css'
import Header from "../components/Header"
import ProductGrid from "../components/ProductGrid"
import Footer from '../components/Footer'


const Seating = () => {

  return (
    <div className='App'>
      <Header className="app_header"/>
      <ProductGrid productType='Seating'/>
      <Footer />
    </div>
  )
}

export default Seating