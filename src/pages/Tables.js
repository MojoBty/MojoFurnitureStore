import '../App.css'
import Header from "../components/Header"
import ProductGrid from "../components/ProductGrid"
import Footer from '../components/Footer'


const Tables = () => {

  return (
    <div className='App'>
      <Header className="app_header"/>
      <ProductGrid productType='Tables'/>
      <Footer />
    </div>
  )
}

export default Tables