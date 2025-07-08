import Product from './Product';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const products = Array.from({ length: 5 });

function Products() {
    return (
        <Container>
            <Row xs={1} md={2} lg={3} xl={4}>
                {products.map((product, index) => (
                    <Col key={index}>
                        <Product />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Products;
