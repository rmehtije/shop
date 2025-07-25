import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';

function ProductCart({ handleDeleteCartProduct, product, addProduct, isCheckout }) {
    console.log('ProductCart');
    const location = useLocation();

    const cart = useSelector(state => state.cart);
    const handleAddCount = () => addProduct(cart, product);
    const handleDelete = () => handleDeleteCartProduct(cart, product);

    const showInfo = location.pathname === '/checkout' && isCheckout;

    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col><Card.Img variant="top" src={product.image} width={100} height={100} /></Col>
                    <Col xs={6}>
                        <Card.Text>
                            <span className='fs-4'>{product.title}</span>
                            <br />
                            {showInfo && product.description}
                            <br />
                            Count: {product.quantity ?? 1}
                        </Card.Text>
                    </Col>
                    <Col>
                        <Button variant="primary" onClick={handleAddCount} >Add 1</Button>
                        <Button variant="danger" onClick={handleDelete}>Remove 1</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default ProductCart;
