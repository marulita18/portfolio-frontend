import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartWithWines } from "../store/cart/selector";
import { removeFromCart, purchase } from "../store/cart/actions";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CartPage.css";

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector(getCartWithWines);

  return (
    <div className="Cart-container">
      <div className="header">
        <h3 className="heading">Shopping cart</h3>
      </div>
      <div>
        {cart.map((item) => {
          return (
            <div className="Cart-Items" key={item.id}>
              <div className="about">
                <div className="title">
                  {item.allWines.name}
                  <img
                    className="image-box"
                    src={item.allWines.picture}
                    alt=""
                  />
                  <span>
                    {" "}
                    <strong>Qty:</strong> {item.amount}{" "}
                  </span>
                  <span>${item.allWines.price} </span>
                </div>
              </div>
              <div className="checkout">
                <div className="total">
                  <div>
                    <div className="total-amount">
                      <strong>Total: </strong> $
                      {item.amount * item.allWines.price}
                    </div>
                  </div>
                </div>
              </div>
              <Button
                onClick={() => {
                  dispatch(removeFromCart({ wineId: item.wineId }));
                }}
                style={{
                  backgroundColor: "#6d597a",
                  borderColor: "#6d597a",
                  color: "white",
                }}
              >
                Remove
              </Button>
              {/* {!item ? <Link to="/">Get some wines!</Link> : null} */}
            </div>
          );
        })}

        <Button
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            backgroundColor: "#324a5f",
            borderColor: "#324a5f",
            color: "white",
          }}
          onClick={() => {
            dispatch(purchase(cart));
          }}
        >
          Purchase!
        </Button>
      </div>
    </div>
  );
}
