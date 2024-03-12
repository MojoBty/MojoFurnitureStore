import './App.css';
import Header from './components/Header.js';
import ProductDisplay from './components/ProductDisplay';


function App() {
  return (
    <div className='App'>
      <Header className="app_header"/>
      <ProductDisplay />
    </div>
  );
}

export default App;
