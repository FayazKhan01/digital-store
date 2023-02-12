import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

let myStyle = {
  color : "darkGreen",
}
let h5Style = {
  color : "#007bff",
}

export default function SignUp() {
  
  const fullnameRef = useRef();
  const contactRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(fullnameRef.current.value, emailRef.current.value, contactRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Acount already exist");
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h1 style={myStyle} className="className">SAYLANI WELFARE</h1>
          <h5 style={h5Style} className="text-center mb-4">ONLINE DISCOUNT STORE</h5>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
          <Form.Group id="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" ref={fullnameRef} required />
            </Form.Group>
            <Form.Group id="contact">
              <Form.Label>Contact</Form.Label>
              <Form.Control type="number" ref={contactRef} required />
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button
              disabled={loading}
              className="w-100 btn-success"
              type="submit"
            >
            <strong>Sign Up</strong> 
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}
