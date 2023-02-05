import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Login(props) {
  return (
    <div>
      
    <Form onSubmit={props.AdminLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>USERNAME</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" name='username' required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' required/>
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Login
