import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toCart } from "../store/cart/actions";
import { removeWine } from "../store/wines/actions";
import { getCartWithWines } from "../store/cart/selector";
import EditWineForm from "./EditWineForm";
import { Card, Button } from "react-bootstrap";

export default function WineCard(props) {
  const dispatch = useDispatch();
  const cart = useSelector(getCartWithWines);
  const { wine, user } = props;
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <Card
      key={wine.id}
      style={{ width: "30rem", maxWidth: "30rem" }}
      className="row justify-content-center m-2"
    >
      <Card.Img variant="right" src={wine.picture} />
      <Card.Body>
        <Card.Title style={{ color: "#324a5f" }}>{wine.name}</Card.Title>
        <Card.Text>{wine.description}.</Card.Text>
        <div className="d-flex align-items-center justify-content-center">
          {user.token && user.isAdmin ? (
            <div>
              <Button
                onClick={() => {
                  setShowEditForm(!showEditForm);
                }}
                style={{
                  backgroundColor: "#1b2a41",
                  borderColor: "#1b2a41",
                  color: "white",
                  marginRight: "10px",
                }}
              >
                Edit
              </Button>
              {showEditForm ? <EditWineForm wine={wine} /> : null}
              <Button
                onClick={() => {
                  dispatch(removeWine(wine.id));
                }}
                style={{
                  backgroundColor: "#e56b6f",
                  borderColor: "#e56b6f",
                  color: "white",
                }}
              >
                Remove
              </Button>
            </div>
          ) : (
            <div>
              <Card.Text
                style={{
                  backgroundColor: "#1b2a41",
                  color: "#ccc9dc",
                  borderRadius: "50%",
                  padding: "10px",
                }}
              >
                $ {wine.price}
              </Card.Text>
              <Button
                onClick={() => {
                  dispatch(toCart({ wineId: wine.id }));
                }}
                style={{
                  backgroundColor: "#6d597a",
                  borderColor: "#6d597a",
                  color: "white",
                }}
              >
                Add to cart
              </Button>
              {/* {cart.filter((item) => {
                return item.id === wine.id;
              })} */}
              {/* {cart.map((item) => {
                return <div key={item.id}>{item.amount} </div>;
              })} */}
              <img
                src="https://res.cloudinary.com/dwr3lgrza/image/upload/v1634646109/icons/cart-fill_kpeqky.svg"
                alt="cart logo"
                style={{ maxWidth: "100px" }}
              />
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
