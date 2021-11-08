import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, fetchingCategories } from "../../store/wines/actions";
import { selectHomepageCategories } from "../../store/wines/selector";
import "./Selector.css";

export default function Selector() {
  const dispatch = useDispatch();
  const categories = useSelector(selectHomepageCategories);

  useEffect(() => {
    dispatch(fetchingCategories());
  }, [dispatch]);

  return (
    <div>
      <select
        name="select"
        onChange={(event) => dispatch(setCategoryId(event.target.value))}
        className="d-flex flex-wrap justify-content-start selector-home"
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
    </div>
  );
}
