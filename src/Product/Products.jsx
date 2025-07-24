import Product from './Product';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCart from '../Cart/ProductCart';

const dummyProducts = Array.from({ length: 5 });

function Products({
    classNameRow,
    classNameCol,
    isCartProduct,
    products = dummyProducts,
    handleDeleteCartProduct,
    addProduct,
    isCheckout,
}) {
    return (
        <Container>
            <Row xs={1} md={2} lg={3} xl={4} className={classNameRow}>
                {products.map((product, index) => (
                    <Col key={index} className={classNameCol}>
                        {isCartProduct ?
                            <ProductCart
                                isCheckout={isCheckout}
                                product={product}
                                handleDeleteCartProduct={handleDeleteCartProduct}
                                addProduct={addProduct}
                            /> : <Product product={product} addProduct={addProduct} />}
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Products;
