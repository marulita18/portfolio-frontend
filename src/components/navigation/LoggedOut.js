import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function LoggedOut() {
  const history = useHistory();

  return (
    <Button
      style={{
        backgroundColor: "white",
        color: "#6d597a",
        borderColor: "#6d597a",
      }}
      onClick={() => history.push(`/login`)}
    >
      Log in
    </Button>
  );
}
