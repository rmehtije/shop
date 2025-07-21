import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AuthForm from './AuthForm';

function AuthModal({ show, handleClose, setAuthData, setToastMessage }) {
    const formRef = React.useRef();

    const handleClick = () => formRef.current.requestSubmit();

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
                    setToastMessage={setToastMessage} />
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
