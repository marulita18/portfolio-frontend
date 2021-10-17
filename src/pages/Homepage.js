import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchingWines,
  fetchingCategories,
  setCategoryId,
} from "../store/wines/actions";

import {
  selectHomepageLoading,
  selectHomepageCategories,
  selectHomepageWines,
  selectHomepageCategoryId,
} from "../store/wines/selector";
import { selectUser } from "../store/user/selector";
import ContactForm from "../components/ContactForm";
import AddWineForm from "../components/AddWineForm";
import WineCard from "../components/WineCard";

export default function Homepage() {
  const dispatch = useDispatch();
  const wines = useSelector(selectHomepageWines);
  const loading = useSelector(selectHomepageLoading);
  const categories = useSelector(selectHomepageCategories);
  const user = useSelector(selectUser);
  const categoryId = useSelector(selectHomepageCategoryId);

  useEffect(() => {
    dispatch(fetchingWines(categoryId));
  }, [dispatch, categoryId]);

  useEffect(() => {
    dispatch(fetchingCategories());
  }, [dispatch]);

  return (
    <div>
      <h2 style={{ color: "#324a5f" }}>Wine because life is hard</h2>

      <select
        name="select"
        onChange={(event) => dispatch(setCategoryId(event.target.value))}
      >
        <option value="">All</option>
        {categories.map((category) => {
          return (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          );
        })}
      </select>

      <div className="d-flex flex-wrap justify-content-center">
        {loading ? "Wine a minute please..." : null}

        {wines.map((wine) => {
          return <WineCard key={wine.id} wine={wine} user={user} />;
        })}
      </div>
      {user.token && user.isAdmin ? (
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
          <AddWineForm>Add wines</AddWineForm>
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
