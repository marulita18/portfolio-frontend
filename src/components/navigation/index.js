import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selector";

export default function Navigation() {
  const token = useSelector(selectToken);
  console.log(token, " show yourself token");
  const loginLogout = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <div>
      <Navbar
        className="row justify-content-around"
        style={{
          padding: "20px",
          border: "black, solid, 1px",
          backgroundColor: "#6d597a",
        }}
      >
        <Nav style={{ width: "100%" }} fill>
          <Nav.Item>
            <Nav.Link style={{ color: "white" }} href="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Cart</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Gift</Nav.Link>
          </Nav.Item>
          {loginLogout}
        </Nav>
      </Navbar>
      <br />
    </div>
  );
}
