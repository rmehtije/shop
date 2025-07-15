import React from 'react';
import Form from 'react-bootstrap/Form';
import AuthControl from './AuthControl';

const actions = {
    SignIn: 'signIn',
    SignUp: 'signUp'
};

function AuthForm({ formRef }) {
    const [action, setAction] = React.useState(actions.SignIn);

    const handleOnSelect = (action) => setAction(action);

    const handleSubmit = event => {
        event.preventDefault();

        const username = event.target.username.value;
        const email = event.target.email?.value;
        const password = event.target.password.value;
        
        console.log({ username, email, password });
    };

    return (
        <Form ref={formRef} onSubmit={handleSubmit}>
            <AuthControl action={action} actions={actions} handleOnSelect={handleOnSelect} />
            <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" name="username" />
                {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            {action === actions.SignUp && (
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>
            )}

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" />
            </Form.Group>
        </Form>
    );
}

export default AuthForm;