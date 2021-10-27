import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selector";
import Nav from "react-bootstrap/Nav";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className="d-flex align-items-center flex-wrap justify-content-right">
      <Nav.Item style={{ color: "#eaac8b", marginRight: "5px" }}>
        {user.name}{" "}
      </Nav.Item>

      <Button
        className="log-button"
        style={{
          backgroundColor: "white",
          color: "#6d597a",
          borderColor: "#6d597a",
        }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </div>
  );
}
