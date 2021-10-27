import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { useSelector } from "react-redux";
import { getCartWithWines } from "../../store/cart/selector";
import { selectToken } from "../../store/user/selector";
import { NavLink } from "react-router-dom";
import "./Index.css";

export default function Navigation() {
  const cart = useSelector(getCartWithWines);
  const token = useSelector(selectToken);
  const loginLogout = token ? <LoggedIn /> : <LoggedOut />;

  const totalItems = cart.reduce((total, item) => total + item.amount, 0);
  return (
    <div className="nav-text">
      <Navbar
        className="row justify-content-around align-items-center"
        style={{
          padding: "20px",
          border: "black, solid, 1px",
          backgroundColor: "#6d597a",
        }}
      >
        <Nav style={{ width: "100%" }} fill>
          <img
            src="https://res.cloudinary.com/dwr3lgrza/image/upload/v1634235717/WhatsApp_Image_2021-10-12_at_18.24_uuj8gd.jpg"
            alt="logo"
            className="logo"
          />
          <Nav.Item>
            <NavLink
              className="navLink"
              activeClassName="active"
              to="/"
              exact={true}
            >
              Home
            </NavLink>
          </Nav.Item>
          <div className="wrapper">
            <Nav.Item>
              <NavLink
                className="navLink cart-items"
                activeClassName="active"
                to="/cart"
              >
                {totalItems ? <span>{totalItems}</span> : null}
                Cart
              </NavLink>
            </Nav.Item>
          </div>
          <Nav.Item>
            <NavLink className="navLink" activeClassName="active" to="/about">
              About us
            </NavLink>
          </Nav.Item>
          {loginLogout}
        </Nav>
      </Navbar>
      <br />
    </div>
  );
}
