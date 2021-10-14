import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selector";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const token = useSelector(selectToken);
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
            <NavLink style={{ color: "white" }} to="/">
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/cart">Cart</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/gift">Gift</NavLink>
          </Nav.Item>
          {loginLogout}
        </Nav>
      </Navbar>
      <br />
    </div>
  );
}
