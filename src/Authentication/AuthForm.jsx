import React from 'react';
import Form from 'react-bootstrap/Form';
import AuthControl from './AuthControl';
import { singIn } from '../services/api/auth';
import { addNewUser } from '../services/api/users';

const actions = {
    SignIn: 'signIn',
    SignUp: 'signUp'
};

function AuthForm({ formRef, setAuthData, handleClose, setToastMessage }) {
    const [action, setAction] = React.useState(actions.SignIn);

    const handleOnSelect = (action) => setAction(action);

    const handleSubmit = async event => {
        event.preventDefault();

        const username = event.target.username.value;
        const email = event.target.email?.value;
        const password = event.target.password.value;

        if (email && action === actions.SignUp) {
            const { id } = await addNewUser({
                email, username, password
            });

            setToastMessage('New user created with id: ' + id);
        } else {
            const { token } = await singIn(username, password);

            setAuthData(authData => ({ ...authData, jwt: token }));
        }


        handleClose();
    };

    return (
        <Form ref={formRef} onSubmit={handleSubmit}>
            <AuthControl action={action} actions={actions} handleOnSelect={handleOnSelect} />
            <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter username"
                    name="username"
                    defaultValue="derek"
                />
                {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            {action === actions.SignUp && (
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                    />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>
            )}

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    defaultValue="jklg*_56" />
            </Form.Group>
        </Form>
    );
}

export default AuthForm;