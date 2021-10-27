import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { contactUsEmail } from "../store/user/actions";

const initialState = {
  message: "",
  email: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);

  function onChangeHandler(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function submitForm(event) {
    console.log("form");
    event.preventDefault();
    dispatch(contactUsEmail(form));
  }

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
              name="message"
              value={form.message}
              onChange={(event) => onChangeHandler(event)}
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
              name="email"
              value={form.email}
              onChange={(event) => onChangeHandler(event)}
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
              onClick={submitForm}
            >
              Submit
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}
