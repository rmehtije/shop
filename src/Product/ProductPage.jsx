import React from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Category from "../Navigation/Category";
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router';
import { getSingleProduct } from "../services/api/products";
import { useSelector, useDispatch } from 'react-redux';
import { setErrorMessage } from '../services/state/store';
import useCart from '../effects/useCart';

function ProductPage() {
    console.log('ProductPage');
    
    const dispatch = useDispatch();
    const params = useParams();

    const [product, setProduct] = React.useState({});

    const { addProduct } = useCart();

    const cart = useSelector(state => state.cart);

    React.useEffect(() => {
        (async () => {
            try {
                const product = await getSingleProduct(params.id);

                setProduct(product);
            } catch (error) {
                dispatch(setErrorMessage('Error getting product, please try again later!'));
            }
            
        })();
    }, []);

    return (
        <Container>
            <Category product={product} />
            <Row>
                <Col>
                    <img src={product.image} width={250}/>
                </Col>
                <Col>
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <div><Badge bg="success">{product.price}</Badge></div>
                    <div><Badge bg="secondary">{product.rating?.rate} / {product.rating?.count}</Badge></div>
                    <div><Button variant="primary" onClick={() => addProduct(cart, product)}>Add to Cart</Button></div>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductPage;
