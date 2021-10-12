import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <div>
      <Navbar
        className="row justify-content-start"
        style={{
          padding: "20px",
          border: "black, solid, 1px",
          backgroundColor: "#6d597a",
        }}
      >
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link style={{ color: "white" }} href="/home">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Cart</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Gift</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
      <br />
    </div>
  );
}
