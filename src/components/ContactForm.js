import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function ContactForm() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div
      style={{
        padding: "40px",
        border: "black, solid, 2px",
        backgroundColor: "#ccc9dc",
      }}
    >
      <h3 style={{ color: "#324a5f" }}>Get in touch with us!</h3>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Message
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Your message"
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
            Email
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email"
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
                fontSize: "20px",
              }}
              // onClick={submitForm}
            >
              Submit
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}
