import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartWithWines } from "../store/cart/selector";
import { removeFromCart } from "../store/cart/actions";
import { purchase } from "../store/orders/actions";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CartPage.css";
import { PayPalButtons } from "@paypal/react-paypal-js";

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector(getCartWithWines);
  const [showPaypal, setShowPaypal] = useState(false);
  const cartTotal = cart.reduce(
    (total, item) => total + item.amount * item.allWines.price,
    0
  );

  return (
    <div className="body">
      <div className="Cart-container">
        <div className="header">
          <h3 className="heading">Shopping cart</h3>
        </div>
        {cart.length === 0 ? (
          <Link to="/" className="link">
            Get some wines!
          </Link>
        ) : (
          <div>
            {cart.map((item, index) => {
              return (
                <div key={index} className="Cart-Items">
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
                          Subtotal: ${item.amount * item.allWines.price}
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
                    {item.amount > 1 ? "-1" : "Remove"}
                  </Button>
                </div>
              );
            })}
            <div className="total-amount">Total to pay: ${cartTotal}</div>
            <Button
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                backgroundColor: "#eaac8b",
                borderColor: "#eaac8b",
                color: "#6d597a",
                padding: "20px",
                fontSize: "20px",
              }}
              onClick={() => {
                setShowPaypal(true);
              }}
            >
              Purchase!
            </Button>
            {showPaypal && (
              <PayPalButtons
                style={{ layout: "horizontal" }}
                onApprove={() => {
                  dispatch(purchase());
                }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: cartTotal,
                        },
                      },
                    ],
                  });
                }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
