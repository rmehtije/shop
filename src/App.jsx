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

function App() {
  const [showCart, setShowCart] = React.useState(false);
  const [showAuthForm, setShowAuthForm] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [authData, setAuthData] = React.useState({
    jwt: '',
    data: {}
  });
  const [toastMessage, setToastMessage] = React.useState(null);
  const [errorMessage, setErrorMessage] = React.useState(null);

  const { cart, addProduct, removeProduct } = useCart({
    userId: authData.data.userId,
  });

  const handleShowCart = () => setShowCart(true);
  const handleHideCart = () => setShowCart(false);

  const handleShowAuthForm = () => setShowAuthForm(true);
  const handleHideAuthForm = () => setShowAuthForm(false);

  const handleCloseToast = () => setToastMessage(null);
  const handleCloseError = () => setErrorMessage(null);

  React.useEffect(() => {
    getAllProducts().then(setProducts).catch(error => setErrorMessage(error.toString()));
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
        cartProducts={cart.products || []}
        handleShowAuthForm={handleShowAuthForm}
        authData={authData} />
      <Routes>
        <Route index element={<Products products={products} addProduct={addProduct} />} />
        <Route path="/product/:id" element={<ProductPage addProduct={addProduct} setErrorMessage={setErrorMessage} />} />
      </Routes>
      <Cart showCart={showCart}
        handleHideCart={handleHideCart}
        cartProducts={cart.products || []}
        handleDeleteCartProduct={removeProduct}
        addProduct={addProduct} />
      <AuthModal
        show={showAuthForm}
        handleClose={handleHideAuthForm}
        setAuthData={setAuthData}
        setToastMessage={setToastMessage} />
      <ToastMessage message={toastMessage} handleClose={handleCloseToast} />
      <ErrorModal message={errorMessage} handleClose={handleCloseError} />
    </>
  )
}

export default App
