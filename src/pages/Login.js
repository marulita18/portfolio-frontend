import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { login } from "../store/user/actions";
import { selectToken } from "../store/user/selector";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function submitForm(event) {
    console.log("hi");
    event.preventDefault();

    dispatch(login(email, password, redirectHomepage));

    setEmail("");
    setPassword("");
  }

  function redirectHomepage() {
    history.push("/");
  }

  return (
    <div>
      <Form style={{ display: "block", width: "80%" }}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter email"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button
              type="submit"
              style={{
                backgroundColor: "#6d597a",
                color: "white",
                borderColor: "#6d597a",
              }}
              onClick={submitForm}
            >
              Sign in
            </Button>
          </Col>
        </Form.Group>
      </Form>
      <div style={{ display: "block", textAlign: "center" }}>
        <p style={{ fontSize: "18px" }}>
          Don't have an account? Sign up <Link to="/signup">here</Link> !
        </p>
      </div>
    </div>
  );
}
