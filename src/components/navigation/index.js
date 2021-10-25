import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import { useSelector } from "react-redux";
import { getCartWithWines } from "../../store/cart/selector";
import { selectToken } from "../../store/user/selector";
import { NavLink } from "react-router-dom";
import "./navigation.css";

export default function Navigation() {
  const cart = useSelector(getCartWithWines);
  const token = useSelector(selectToken);
  const loginLogout = token ? <LoggedIn /> : <LoggedOut />;
  // console.log("lenght", cart[0].amount);

  return (
    <div>
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
                <span>
                  {" "}
                  {/* {cart[0].amount && cart[0].amount > 0
                    ? cart[0].amount
                    : null}{" "} */}
                </span>
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
