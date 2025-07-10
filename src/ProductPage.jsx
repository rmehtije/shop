import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Category from "./Category";
import Button from 'react-bootstrap/Button';

function ProductPage({ setCartProducts }) {
    const addProduct = product => setCartProducts(products => [...products, product]);

    const dummyProduct = { id: 1 };

    return (
        <Container>
            <Category />
            <Row>
                <Col>
                    image
                </Col>
                <Col>
                    <h2>Title</h2>
                    <p>Description</p>
                    <div><Badge bg="success">100.00</Badge></div>
                    <div><Badge bg="secondary">4.9/120</Badge></div>
                    <div><Button variant="primary" onClick={() => addProduct(dummyProduct)}>Add to Cart</Button></div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductPage;
