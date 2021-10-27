import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { signUp } from "../store/user/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(name, email, password, redirectHomepage));

    setEmail("");
    setPassword("");
    setName("");
  }

  function redirectHomepage() {
    history.push("/");
  }

  return (
    <div style={{ minHeight: "calc(70vh - 10px)" }}>
      <Form style={{ display: "block", width: "80%" }}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="name"
              placeholder="Enter your name"
              required
            />
          </Col>
        </Form.Group>
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
              style={{
                backgroundColor: "#6d597a",
                color: "white",
                borderColor: "#6d597a",
              }}
              type="submit"
              onClick={submitForm}
            >
              Sign in
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}
