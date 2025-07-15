import './App.css';
import React from 'react';
import NavigationBar from "./NavigationBar";
import Products from "./Products";
import ProductPage from "./ProductPage";
import Cart from './Cart';

function App() {
  const [showCart, setShowCart] = React.useState(false);
  const [cartProducts, setCartProducts] = React.useState([]);

  const handleShowCart = () => setShowCart(true);
  const handleHideCart = () => setShowCart(false);

  return (
    <>
      <NavigationBar handleShowCart={handleShowCart} cartProducts={cartProducts} />
      {/* <Products /> */}
      <ProductPage setCartProducts={setCartProducts} />
      <Cart showCart={showCart} handleHideCart={handleHideCart} cartProducts={cartProducts} />
    </>
  )
}

export default App
