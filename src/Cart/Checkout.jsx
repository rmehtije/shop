import Container from "react-bootstrap/Container";
import Products from "../Product/Products";

function Checkout({ cartProducts, handleDeleteCartProduct, addProduct }) {
    return (
        <Container>
            <Products
                classNameRow="flex-column"
                classNameCol="w-100"
                isCartProduct
                isCheckout
                products={cartProducts}
                handleDeleteCartProduct={handleDeleteCartProduct}
                addProduct={addProduct} />
        </Container>
    )
}

export default Checkout;
