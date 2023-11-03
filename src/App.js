import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Category from './pages/category';
import Contacts from './pages/contacts';
import DeliveryAndPayment from './pages/delivery&payment';
import Product from './pages/product';
import { useRef } from 'react';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/delivery&payment" element={<DeliveryAndPayment/>}/>
        <Route path="/product/:id?/:category?" element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;