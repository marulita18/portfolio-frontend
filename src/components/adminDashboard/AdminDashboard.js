import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { selectUser } from "../../store/user/selector";
import AddWineForm from "../AddWineForm";
import { fetchingWines } from "../../store/wines/actions";
import { selectHomepageWines } from "../../store/wines/selector";
import WineCard from "../WineCard";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);
  const wines = useSelector(selectHomepageWines);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!user.token || !user.isAdmin) {
      history.push("/");
    }
  }, []);

  useEffect(() => {
    dispatch(fetchingWines());
  }, [dispatch]);

  return (
    <div>
      <div className="d-flex flex-wrap">
        {user.token && user.isAdmin && (
          <button
            onClick={() => setShowForm(!showForm)}
            className="add-btn d-flex flex-wrap justify-content-start"
          >
            Add Wine
          </button>
        )}
        {showForm && <AddWineForm />}
        <Link to="/orders" className="orders-link justify-content-end">
          See orders
        </Link>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {wines.map((wine) => {
          return <WineCard key={wine.id} wine={wine} user={user} />;
        })}
      </div>
    </div>
  );
}
