import Toast from 'react-bootstrap/Toast';

function ToastMessage({ message, handleClose }) {
    console.log('ToastMessage');
    return (
        <Toast
            onClose={handleClose}
            show={!!message}
            delay={3000}
            autohide
            className='position-absolute bottom-0 end-0'
            bg="success">
            <Toast.Body>{message}</Toast.Body>
        </Toast>
    )
};

export default ToastMessage;
