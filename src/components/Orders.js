import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingOrders } from "../store/orders/actions";
import { selectOrders } from "../store/orders/selector";

export default function Orders() {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  console.log("my orders", orders);

  useEffect(() => {
    dispatch(fetchingOrders());
  }, [dispatch]);

  return (
    <div>
      {orders &&
        orders.map((order) => {
          return (
            <div key={order.id}>
              <table className="table table-bordered">
                <thead>
                  <th scope="col" style={{ textAlign: "center" }}>
                    Order Id
                  </th>
                  <th scope="col" style={{ textAlign: "center" }}>
                    Status
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{order.id}</th>
                    <td>{order.status}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
    </div>
  );
}
