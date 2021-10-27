import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import { editWine } from "../store/wines/actions";
import { useDispatch } from "react-redux";

export default function EditWineForm(props) {
  const dispatch = useDispatch();
  const { wine } = props;
  const [updateWine, setUpdateWine] = useState(wine);

  function submitForm(event) {
    event.preventDefault();
    dispatch(editWine(updateWine));
  }

  function onChangeHandler(event) {
    setUpdateWine({ ...updateWine, [event.target.name]: event.target.value });
  }
  console.log("my update", updateWine);
  return (
    <div>
      <Form style={{ marginBottom: "160px", marginTop: "100px" }}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              name="name"
              value={updateWine.name}
              onChange={(event) => onChangeHandler(event)}
              placeholder="Edit name"
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
              name="picture"
              value={updateWine.picture}
              onChange={(event) => onChangeHandler(event)}
              placeholder="Edit pic"
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
              name="price"
              value={updateWine.price}
              onChange={(event) => onChangeHandler(event)}
              placeholder="Edit price"
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
              name="description"
              value={updateWine.description}
              onChange={(event) => onChangeHandler(event)}
              placeholder="Edit description"
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
              name="categoryId"
              value={updateWine.categoryId}
              onChange={(event) => onChangeHandler(event)}
              placeholder="Edit category: White: 1, Red: 2, Rose: 3"
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
