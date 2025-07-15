import Product from './Product';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCart from './ProductCart';

const dummyProducts = Array.from({ length: 5 });

function Products({ classNameRow, classNameCol, isCartProduct, products = dummyProducts, handleDeleteCartProduct }) {
    return (
        <Container>
            <Row xs={1} md={2} lg={3} xl={4} className={classNameRow}>
                {products.map((product, index) => (
                    <Col key={index} className={classNameCol}>
                        {isCartProduct ?
                            <ProductCart
                                product={product}
                                handleDeleteCartProduct={handleDeleteCartProduct}
                            /> : <Product />}
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Products;
