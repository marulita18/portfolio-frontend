import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingWines } from "../store/wines/actions";
import { selectHomepageLoading } from "../store/wines/selector";
import { selectHomepageWines } from "../store/wines/selector";
import Navigation from "../components/Navigation";

export default function Homepage() {
  const dispatch = useDispatch();
  const wines = useSelector(selectHomepageWines);
  const loading = useSelector(selectHomepageLoading);

  useEffect(() => {
    dispatch(fetchingWines());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      Homepage
      {wines.map((wine) => {
        return <div key={wine.id}>{wine.name}</div>;
      })}
    </div>
  );
}
