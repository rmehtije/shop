import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Product({ product, addProduct }) {

  const handleAddToCart = () => addProduct(product);

  return (
    <Card>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
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
