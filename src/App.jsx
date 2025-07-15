import './App.css';
import React from 'react';
import NavigationBar from "./NavigationBar";
import Products from "./Products";
import ProductPage from "./ProductPage";
import Cart from './Cart';
import AuthModal from './AuthModal';

function App() {
  const [showCart, setShowCart] = React.useState(false);
  const [showAuthForm, setShowAuthForm] = React.useState(false);
  const [cartProducts, setCartProducts] = React.useState([]);

  const handleShowCart = () => setShowCart(true);
  const handleHideCart = () => setShowCart(false);

  const handleShowAuthForm = () => setShowAuthForm(true);
  const handleHideAuthForm = () => setShowAuthForm(false);

  return (
    <>
      <NavigationBar
        handleShowCart={handleShowCart}
        cartProducts={cartProducts}
        handleShowAuthForm={handleShowAuthForm} />
      {/* <Products /> */}
      <ProductPage setCartProducts={setCartProducts} />
      <Cart showCart={showCart} handleHideCart={handleHideCart} cartProducts={cartProducts} />
      <AuthModal show={showAuthForm} handleClose={handleHideAuthForm} />
    </>
  )
}

export default App
