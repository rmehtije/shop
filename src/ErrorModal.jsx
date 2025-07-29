import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { setErrorMessage } from './services/state/store';
import { useSelector, useDispatch } from 'react-redux';

function ErrorModal() {
    console.log('ErrorModal');
    const dispatch = useDispatch();
    const message = useSelector((state) => state.errorMessage);

    const handleClose = () => dispatch(setErrorMessage(null));

    return (
        <Modal show={!!message} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ErrorModal;
