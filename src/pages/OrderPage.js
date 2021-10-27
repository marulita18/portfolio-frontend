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

  function approvedOnclickHandler(orders) {
    const data = { id: orders.id, status: "done" };
    dispatch(updatingOrders(data));
  }

  function cancelOnclickHandler(orders) {
    const data = { id: orders.id, status: "cancelled" };
    dispatch(updatingOrders(data));
  }

  return (
    <div className="body">
      <h2>Orders</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-3 border">
            <strong>Order Id</strong>
          </div>
          <div className="col-md-3 border">
            <strong>Order status </strong>
          </div>
          <div className="col-md-3 border"> </div>
          <div className="col-md-3 border"> </div>
        </div>
      </div>
      {orders &&
        orders.map((order) => {
          return (
            <div key={order.id} className="container">
              <div className="row">
                <div className="col-md-3 border">{order.id}</div>
                <div className="col-md-3 border">{order.status}</div>
                <div className="col-md-3 border">
                  <button
                    className="btn-order"
                    type="submit"
                    onClick={() => approvedOnclickHandler(order)}
                  >
                    Done
                  </button>
                </div>
                <div className="col-md-3 border">
                  <button
                    className="btn-order"
                    type="submit"
                    onClick={() => cancelOnclickHandler(order)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
