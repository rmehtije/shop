import Toast from 'react-bootstrap/Toast';
import { setToastMessage } from './services/state/store';
import { useSelector, useDispatch } from 'react-redux';

function ToastMessage() {
    console.log('ToastMessage');

    const dispatch = useDispatch();
    const message = useSelector((state) => state.toastMessage);

    const handleClose = () => dispatch(setToastMessage(null));

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
