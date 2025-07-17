import './App.css';
import React from 'react';
import NavigationBar from "./NavigationBar";
import Products from "./Products";
import ProductPage from "./ProductPage";
import Cart from './Cart';
import AuthModal from './AuthModal';
import { getAllProducts } from './services/api/products';
import { jwtDecode } from "jwt-decode";

function App() {
  const [showCart, setShowCart] = React.useState(false);
  const [showAuthForm, setShowAuthForm] = React.useState(false);
  const [cartProducts, setCartProducts] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [authData, setAuthData] = React.useState({
    jwt: '',
    data: {}
  });

  const handleShowCart = () => setShowCart(true);
  const handleHideCart = () => setShowCart(false);

  const handleShowAuthForm = () => setShowAuthForm(true);
  const handleHideAuthForm = () => setShowAuthForm(false);

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
      <Products products={products} addProduct={addProduct} />
      {/* <ProductPage setCartProducts={setCartProducts} /> */}
      <Cart showCart={showCart}
        handleHideCart={handleHideCart}
        cartProducts={cartProducts}
        handleDeleteCartProduct={handleDeleteCartProduct} />
      <AuthModal show={showAuthForm} handleClose={handleHideAuthForm} setAuthData={setAuthData} />
    </>
  )
}

export default App
