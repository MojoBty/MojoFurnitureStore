import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import React, {useEffect} from 'react'
import Homepage from './pages/Homepage.js';
import Products from './pages/Products.js';
import ProductPage from './pages/ProductPage.js'

import furnitureData from './resources/furnitureData.js'
import Footer from './components/Footer.js';
import { ShoppingCartProvider } from './context/ShopContext.js';
import Cart from './pages/Cart.js';
import Tables from './pages/Tables.js';
import Dressers from './pages/Dressers.js';
import Seating from './pages/Seating.js';

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

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }


  return (
    <ShoppingCartProvider>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/seating' element={<Seating />} />
          <Route path='/products/tables' element={<Tables />} />
          <Route path='/products/dressers' element={<Dressers />} />
          {productRoutes}
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<Navigate to='/' replace/>}/>    
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
