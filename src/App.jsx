import './App.css';
import React from 'react';
import NavigationBar from "./Navigation/NavigationBar";
import Products from "./Product/Products";
import ProductPage from "./Product/ProductPage";
import Cart from './Cart';
import AuthModal from './Authentication/AuthModal';
import { getAllProducts } from './services/api/products';
import { jwtDecode } from "jwt-decode";
import ToastMessage from './ToastMessage';
import { Routes, Route } from 'react-router';
import useCart from './effects/useCart';
import ErrorModal from './ErrorModal';
import Checkout from './Cart/Checkout';
import { setErrorMessage } from './services/state/store';
import { useDispatch } from 'react-redux';

function App() {
  console.log('App');
  const dispatch = useDispatch();
  const [products, setProducts] = React.useState([]);
  const [authData, setAuthData] = React.useState({
    jwt: '',
    data: {}
  });

  const { addProduct, removeProduct } = useCart({
    userId: authData.data.userId,
  });

  React.useEffect(() => {
    getAllProducts().then(setProducts).catch(error => dispatch(setErrorMessage(error.toString())));
  }, []);

  React.useEffect(() => {
    if (authData.jwt) {
      const data = jwtDecode(authData.jwt);

      setAuthData(authData => ({ ...authData, data }));
    }
  }, [authData.jwt]);

  return (
    <>
      <NavigationBar authData={authData} />
      <Routes>
        <Route index element={<Products products={products} addProduct={addProduct} />} />
``        <Route path="/product/:id" element={<ProductPage addProduct={addProduct} />} />
        <Route path="/checkout" element={
          <Checkout
            addProduct={addProduct}
            handleDeleteCartProduct={removeProduct}
          />}
        />
      </Routes>
      <Cart
        handleDeleteCartProduct={removeProduct}
        addProduct={addProduct} />
      <AuthModal setAuthData={setAuthData} />
      <ToastMessage />
      <ErrorModal />
    </>
  )
}

export default App
