import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingWines } from "../store/wines/actions";
import { toCart } from "../store/cart/actions";

import { selectHomepageLoading } from "../store/wines/selector";
import { selectHomepageWines } from "../store/wines/selector";
import { Card, Button } from "react-bootstrap";
import ContactForm from "../components/ContactForm";
import Gift from "../components/Gift";
import { useHistory } from "react-router";

export default function Homepage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const wines = useSelector(selectHomepageWines);
  const loading = useSelector(selectHomepageLoading);

  useEffect(() => {
    dispatch(fetchingWines());
  }, [dispatch]);

  return (
    <div>
      <h2 style={{ color: "#324a5f" }}>Wine because life is hard</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {loading ? "Wine a minute please..." : null}

        {wines.map((wine) => {
          return (
            <Card
              key={wine.id}
              style={{ width: "18rem", maxWidth: "18rem" }}
              className="row justify-content-center m-2"
            >
              <Card.Img variant="right" src={wine.picture} />
              <Card.Body>
                <Card.Title style={{ color: "#324a5f" }}>
                  {wine.name}
                </Card.Title>
                <Card.Text>{wine.description}.</Card.Text>
                <div className="d-flex align-items-center justify-content-center">
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
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            border: "black, solid, 1px",
            margin: "30px",
            padding: "40px",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Gift />
        </div>
        <div
          style={{
            border: "black, solid, 1px",
            margin: "30px",
            padding: "40px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
