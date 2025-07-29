import './App.css';
import React from 'react';
import NavigationBar from "./Navigation/NavigationBar";
import Products from "./Product/Products";
import ProductPage from "./Product/ProductPage";
import Cart from './Cart';
import AuthModal from './Authentication/AuthModal';
import ToastMessage from './ToastMessage';
import { Routes, Route } from 'react-router';
import ErrorModal from './ErrorModal';
import Checkout from './Cart/Checkout';
import ProductForm from './Product/ProductForm';

function App() {
  console.log('App');
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route index element={<Products />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/add-product" element={<ProductForm />} />
      </Routes>
      <Cart />
      <AuthModal />
      <ToastMessage />
      <ErrorModal />
    </>
  )
}

export default App
