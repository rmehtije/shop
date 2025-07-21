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

function App() {
  const [showCart, setShowCart] = React.useState(false);
  const [showAuthForm, setShowAuthForm] = React.useState(false);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [authData, setAuthData] = React.useState({
    jwt: '',
    data: {}
  });
  const [toastMessage, setToastMessage] = React.useState(null);

  const handleShowCart = () => setShowCart(true);
  const handleHideCart = () => setShowCart(false);

  const handleShowAuthForm = () => setShowAuthForm(true);
  const handleHideAuthForm = () => setShowAuthForm(false);

  const handleCloseToast = () => setToastMessage(null);

  const handleDeleteCartProduct = product => setCartProducts(cartProducts.filter(cartProduct => cartProduct.id !== product.id));

  const addProduct = product => setCartProducts(products => [...products, product]);

  React.useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  React.useEffect(() => {
    if (authData.jwt) {
      const data = jwtDecode(authData.jwt);

      setAuthData(authData => ({ ...authData, data }));
    }
  }, [authData.jwt]);

  return (
    <>
      <NavigationBar
        handleShowCart={handleShowCart}
        cartProducts={cartProducts}
        handleShowAuthForm={handleShowAuthForm}
        authData={authData} />
      <Routes>
        <Route index element={<Products products={products} addProduct={addProduct} />} />
        <Route path="/product/:id" element={<ProductPage addProduct={addProduct} />} />
      </Routes>
      <Cart showCart={showCart}
        handleHideCart={handleHideCart}
        cartProducts={cartProducts}
        handleDeleteCartProduct={handleDeleteCartProduct} />
      <AuthModal
        show={showAuthForm}
        handleClose={handleHideAuthForm}
        setAuthData={setAuthData}
        setToastMessage={setToastMessage} />
      <ToastMessage message={toastMessage} handleClose={handleCloseToast} />
    </>
  )
}

export default App
