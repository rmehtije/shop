import React from 'react';
import Form from 'react-bootstrap/Form';
import AuthControl from './AuthControl';

const actions = {
    SignIn: 'signIn',
    SignUp: 'signUp'
};

function AuthForm() {
    const [action, setAction] = React.useState(actions.SignIn);

    const handleOnSelect = (action) => setAction(action);

    return (
        <Form>
            <AuthControl action={action} actions={actions} handleOnSelect={handleOnSelect} />
            <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
                {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            {action === actions.SignUp && (
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>
            )}

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        </Form>
    );
}

export default AuthForm;