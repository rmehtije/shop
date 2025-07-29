import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AuthForm from './AuthForm';
import { useSelector, useDispatch } from 'react-redux';
import { setShowAuthForm } from '../services/state/store';

function AuthModal({ setAuthData }) {
    console.log('AuthModal');
    const dispatch = useDispatch();
    const show = useSelector((state) => state.showAuthForm);

    const formRef = React.useRef();

    const handleClick = () => formRef.current.requestSubmit();
    const handleClose = () => dispatch(setShowAuthForm(false));

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AuthForm
                    formRef={formRef}
                    setAuthData={setAuthData}
                    handleClose={handleClose}
                    />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClick}>
                    Login
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AuthModal;
