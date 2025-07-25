import Offcanvas from 'react-bootstrap/Offcanvas';
import Products from '../Product/Products';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { setShowCart } from '../services/state/store';

function Cart({
    handleDeleteCartProduct,
    addProduct,
}) {
    console.log('Cart');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const showCart = useSelector((state) => state.showCart);
    const cart = useSelector((state) => state.cart);

    const handleOnClick = () => navigate('/checkout');
    const handleHideCart = () => dispatch(setShowCart(false));

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
                        products={cart.products || []}
                        handleDeleteCartProduct={handleDeleteCartProduct}
                        addProduct={addProduct} />
                    <Button variant="success" onClick={handleOnClick}>Checkout</Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Cart;
