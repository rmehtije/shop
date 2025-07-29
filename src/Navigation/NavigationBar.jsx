import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import { NavLink } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setShowCart, setShowAuthForm } from '../services/state/store';
import { UserContext } from '../providers/UserProvider';

function NavigationBar() {
  console.log('NavigationBar');

  const dispatch = useDispatch();
  const { values: { authData }} = React.useContext(UserContext);

  const cart = useSelector((state) => state.cart);

  const productQuantity = React.useMemo(() => {
    let quantity = 0;

    cart.products?.map(product => {
      quantity += product.quantity || 1;
    });

    return quantity;
  }, [cart.products]);

  const handleShowCart = () => dispatch(setShowCart(true));
  const handleShowAuthForm = () => dispatch(setShowAuthForm(true));

  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-4">
      <Container>
        <NavLink to="/" className="navbar-brand">React-Bootstrap</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/add-product" className="nav-link">Add product</NavLink>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {authData.data.user ?
              (<Navbar.Text>{authData.data.user}</Navbar.Text>)
              : (
                <Nav.Link onClick={handleShowAuthForm}>
                  Login
                </Nav.Link>
              )}
            <Nav.Link href="#cart" onClick={handleShowCart}>
              Cart <Badge bg="success">{productQuantity}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
