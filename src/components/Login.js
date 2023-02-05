import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Login(props) {
 
  return (
    <div className=''>
      <h1>STocK ManaGemaNT</h1>
    <Form onSubmit={props.AdminLogin} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><b>USERNAME</b></Form.Label>
        <Form.Control type="text" placeholder="Enter Username" name='username' required/>
        <Form.Text className="text-muted">
          Enter Your username that do you have.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><b>PASSWORD</b></Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' required/>
      </Form.Group>
      
      <Button variant="dark" type="submit">
        LOGiN
      </Button>
    </Form>
    </div>
  )
}

export default Login
