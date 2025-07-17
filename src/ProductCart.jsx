import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProductCart({ handleDeleteCartProduct, product }) {
    const [count, setCount] = React.useState(1);

    const handleAddCount = () => setCount(count + 1);
    const handleDelete = () => {
        const newCount = count - 1;

        if (newCount <= 0) handleDeleteCartProduct(product);
        else setCount(newCount);
    }

    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col><Card.Img variant="top" src={product.image} width={100} height={100} /></Col>
                    <Col xs={6}>
                        <Card.Text>
                            <span className='fs-4'>{product.title}</span>
                            <br/>
                            Count: {count}
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
