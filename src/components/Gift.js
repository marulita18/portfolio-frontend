import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";

export default function Gift() {
  return (
    <div
      style={{
        padding: "40px",
        border: "black, solid, 2px",
        backgroundColor: "#ccc9dc",
      }}
    >
      <Form>
        <Form.Group as={Col} className="mb-3">
          <Col sm={10}>
            <h3 style={{ color: "#324a5f" }}>
              Be a good human being and gift wine!
            </h3>
          </Col>
        </Form.Group>
        <br />
        <br />

        <Link
          to="/gift"
          style={{
            backgroundColor: "#6d597a",
            color: "white",
            borderColor: "#6d597a",
            padding: "8%",
            borderRadius: "5%",
            textDecoration: "none",
          }}
        >
          Gift!
        </Link>
      </Form>
    </div>
  );
}
