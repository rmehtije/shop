import Offcanvas from 'react-bootstrap/Offcanvas';
import Products from '../Product/Products';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';

function Cart({
    showCart,
    handleHideCart,
    cartProducts,
    handleDeleteCartProduct,
    addProduct,
}) {
    const navigate = useNavigate();

    const handleOnClick = () => navigate('/checkout');

    return (
        <>
            <Offcanvas show={showCart} onHide={handleHideCart} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Products
                        classNameRow="flex-column"
                        classNameCol="w-100"
                        isCartProduct
                        products={cartProducts}
                        handleDeleteCartProduct={handleDeleteCartProduct}
                        addProduct={addProduct} />
                    <Button variant="success" onClick={handleOnClick}>Checkout</Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Cart;
