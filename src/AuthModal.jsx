import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AuthForm from './AuthForm';

function AuthModal({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AuthForm />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Login
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AuthModal;
