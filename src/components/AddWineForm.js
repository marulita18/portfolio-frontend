import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import { addWine } from "../store/wines/actions";
import { useDispatch } from "react-redux";

export default function AddWineForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");

  function submitForm(event) {
    event.preventDefault();
    dispatch(addWine(name, picture, price, description, categoryId));
  }
  return (
    <div style={{ display: "block", width: "100%" }}>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name of new wine"
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
            Picture
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              value={picture}
              onChange={(event) => setPicture(event.target.value)}
              placeholder="Please add a pic"
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
            Price
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              placeholder="Please add a price"
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
            Description
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Please add a description"
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
            Category Id
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              value={categoryId}
              onChange={(event) => setCategoryId(event.target.value)}
              placeholder="White: 1, Red: 2, Rose: 3"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <button
              onClick={submitForm}
              type="submit"
              style={{
                backgroundColor: "#6d597a",
                color: "white",
                borderColor: "#6d597a",
                fontSize: "20px",
              }}
            >
              Submit
            </button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}
