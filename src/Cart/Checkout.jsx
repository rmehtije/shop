import Container from "react-bootstrap/Container";
import Products from "../Product/Products";
import { useSelector } from "react-redux";

function Checkout() {
    console.log('Checkout');
    const cart = useSelector((state) => state.cart);
    return (
        <Container>
            <Products
                classNameRow="flex-column"
                classNameCol="w-100"
                isCartProduct
                isCheckout
                products={cart.products || []} />
        </Container>
    )
}

export default Checkout;
