import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingWines } from "../store/wines/actions";
import {
  selectHomepageLoading,
  selectHomepageWines,
  selectHomepageCategoryId,
} from "../store/wines/selector";
import { selectUser } from "../store/user/selector";
import ContactForm from "../components/ContactForm";
import WineCard from "../components/WineCard";
import Selector from "../components/selector/Selector";

export default function Homepage() {
  const dispatch = useDispatch();
  const wines = useSelector(selectHomepageWines);
  const loading = useSelector(selectHomepageLoading);
  const user = useSelector(selectUser);
  const categoryId = useSelector(selectHomepageCategoryId);

  useEffect(() => {
    dispatch(fetchingWines(categoryId));
  }, [dispatch, categoryId]);

  return (
    <div>
      <h2 style={{ color: "#324a5f" }}>Wine because life is hard</h2>
      <Selector />
      <div className="d-flex flex-wrap justify-content-center">
        {loading ? "Wine a minute please..." : null}

        {wines.map((wine) => {
          return <WineCard key={wine.id} wine={wine} user={user} />;
        })}
      </div>

      {user.token && !user.isAdmin ? (
        <div
          style={{
            border: "black, solid, 1px",
            marginRight: "20px",
            marginBottom: "10px",
            padding: "20px",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <ContactForm />
        </div>
      ) : null}
    </div>
  );
}
