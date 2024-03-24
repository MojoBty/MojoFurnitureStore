import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage.js';
import Products from './pages/Products.js';
import ProductPage from './pages/ProductPage.js'

import furnitureData from './resources/furnitureData.js'
import Footer from './components/Footer.js';
import { ShoppingCartProvider } from './context/ShopContext.js';

function App() {

  const productRoutes = furnitureData.map((item, index) => (
    <Route key={index} path={`/products/${item.id}`} element=
      {<ProductPage
        id = {item.id}
        name = {item.name}
        img = {item.img}
        price ={item.price}
        description ={item.description}
        dimensions = {item.dimensions}
      />}
    />
    
  ))


  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/products' element={<Products />} />
          {productRoutes}
          <Route path='*' element={<Navigate to='/' replace/>}/>
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
