import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingWines } from "../store/wines/actions";
import { toCart } from "../store/cart/actions";
import { addWine } from "../store/wines/actions";

import { selectHomepageLoading } from "../store/wines/selector";
import { selectHomepageWines } from "../store/wines/selector";
import { selectUser, selectToken } from "../store/user/selector";
import { Card, Button } from "react-bootstrap";
import ContactForm from "../components/ContactForm";
import AddWineForm from "../components/AddWineForm";

export default function Homepage() {
  const dispatch = useDispatch();
  const wines = useSelector(selectHomepageWines);
  const loading = useSelector(selectHomepageLoading);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

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
              style={{ width: "30rem", maxWidth: "30rem" }}
              className="row justify-content-center m-2"
            >
              <Card.Img variant="right" src={wine.picture} />
              <Card.Body>
                <Card.Title style={{ color: "#324a5f" }}>
                  {wine.name}
                </Card.Title>
                <Card.Text>{wine.description}.</Card.Text>
                <div className="d-flex align-items-center justify-content-center">
                  {token && user.isAdmin ? (
                    <div>
                      <Button
                        // onClick={() => {
                        //   dispatch(toCart({ wineId: wine.id }));
                        // }}
                        style={{
                          backgroundColor: "#1b2a41",
                          borderColor: "#1b2a41",
                          color: "white",
                          marginRight: "10px",
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        // onClick={() => {
                        //   dispatch(toCart({ wineId: wine.id }));
                        // }}
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
                    </div>
                  )}
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
      {token && user.isAdmin ? (
        <div
          style={{
            border: "black, solid, 1px",
            marginRight: "80px",
            marginBottom: "40px",
            padding: "40px",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <AddWineForm
            onClick={() => {
              dispatch(
                addWine(
                  wines.name,
                  wines.picture,
                  wines.price,
                  wines.description,
                  wines.categoryId
                )
              );
            }}
          >
            Add wines
          </AddWineForm>
        </div>
      ) : (
        <div
          style={{
            border: "black, solid, 1px",
            marginRight: "20px",
            marginBottom: "40px",
            padding: "40px",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <ContactForm />
        </div>
      )}
    </div>
  );
}
