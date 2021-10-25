import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectUser } from "../store/user/selector";
import { fetchingOrders, updatingOrders } from "../store/orders/actions";
import { selectOrders } from "../store/orders/selector";
import "./OrderPage.css";

export default function OrderPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);
  const orders = useSelector(selectOrders);

  useEffect(() => {
    if (!user.token || !user.isAdmin) {
      history.push("/");
    }
  }, []);

  useEffect(() => {
    dispatch(fetchingOrders());
  }, [dispatch]);

  // dispatch(updatingOrders( ));

  return (
    <div className="body">
      <h2>Orders</h2>
      {orders &&
        orders.map((order) => {
          return (
            <div key={order.id} className="container">
              <div className="row">
                <div className="col-md-4 border">Order Id</div>
                <div className="col-md-4 border"> Order status</div>
                <div className="col-md-4 border"> </div>
              </div>
              <div className="row">
                <div className="col-md-4 border">{order.id}</div>
                <div className="col-md-4 border">{order.status}</div>
                <div className="col-md-4 border">
                  <input
                    type="checkbox"
                    onChange={() =>
                      dispatch(updatingOrders({ id: order.id, status: "done" }))
                    }
                    className="form-check-input"
                    id="defaultCheck1"
                  ></input>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
