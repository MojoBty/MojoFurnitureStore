import '../App.css';
import Header from '../components/Header.js';
import ProductDisplayOne from '../components/ProductDisplayOne.js';
import ProductDisplayTwo from '../components/ProductDisplayTwo.js';
import FeatureDisplay from '../components/FeatureDisplay.js';
import Spacer from '../components/Spacer.js'
import Footer from '../components/Footer.js'

function Homepage() {
  return (
    <div className='App'>
      <Header className="app_header"/>
      <ProductDisplayOne/>
      <FeatureDisplay />
      <ProductDisplayTwo />
      <Spacer />
      <Footer />
    </div>
  );
}

export default Homepage;
