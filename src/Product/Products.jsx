import React from 'react';
import Product from './Product';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCart from '../Cart/ProductCart';
import { getAllProducts } from '../services/api/products';
import { setErrorMessage } from '../services/state/store';
import { useDispatch } from 'react-redux';

function Products({
    classNameRow,
    classNameCol,
    isCartProduct,
    products: productsProps,
    isCheckout,
}) {
    console.log('Products');

    const dispatch = useDispatch();
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        if (!isCartProduct) {
            getAllProducts().then(setProducts).catch(error => dispatch(setErrorMessage(error.toString())));
        } else setProducts(productsProps);
    }, [isCartProduct, productsProps]);

    return (
        <Container>
            <Row xs={1} md={2} lg={3} xl={4} className={classNameRow}>
                {products.map((product, index) => (
                    <Col key={index} className={classNameCol}>
                        {isCartProduct ?
                            <ProductCart isCheckout={isCheckout} product={product} /> : <Product product={product} />}
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Products;
