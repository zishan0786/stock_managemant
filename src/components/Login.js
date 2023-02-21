import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  // login Process start here

  const AdminLogin = async (event) => {
    event.preventDefault();
    const name = event.target.username.value;
    const pass = event.target.password.value;
    let data = await fetch("http://localhost/API/index_process.php", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        pass: pass,
      }),
    });
    let res = await data.json();
    if (res.msg === "sucess") {
      localStorage.setItem("login", "true");
    } else {
      localStorage.setItem("login", "false");
    }
  };

  return (
    <div className="container">
      <h1>STocK ManaGemaNT</h1>
      <Form onSubmit={AdminLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>USERNAME</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            name="username"
            required
          />
          <Form.Text className="text-muted">
            Enter Your username that do you have.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            <b>PASSWORD</b>
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>

        <Button variant="dark" type="submit">
          LOGiN
        </Button>
      </Form>
    </div>
  );
}

export default Login;
