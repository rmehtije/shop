import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router';
import { useSelector } from 'react-redux';

function Product({ product, addProduct }) {
  console.log('Product');
  const cart = useSelector(state => state.cart);
  const handleAddToCart = () => addProduct(cart, product);

  return (
    <Card>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>
          <NavLink to={`/product/${product.id}`}>{product.title}</NavLink>
        </Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Row>
          <Col>
            Price: {product.price}
          </Col>
          <Col>
            <Button variant="outline-success" onClick={handleAddToCart}>Add to Cart</Button>
          </Col>
        </Row>

      </Card.Body>
    </Card>
  );
}

export default Product;
