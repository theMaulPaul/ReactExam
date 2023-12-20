import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Category from './pages/category';
import Contacts from './pages/contacts';
import DeliveryAndPayment from './pages/delivery&payment';
import Product from './pages/product';
import Login from './pages/login';
import { useRef } from 'react';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/categories" element={<Category/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/delivery&payment" element={<DeliveryAndPayment/>}/>
        <Route path="/products/:id?/:categories?" element={<Product/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;