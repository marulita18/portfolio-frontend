import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selector";
import "./footer.css";

export default function Footer() {
  const user = useSelector(selectUser);

  return (
    <div className="main-footer d-flex justify-content-flex">
      {user.token && user.isAdmin ? (
        <div className="dashboard-btn">
          <Link
            to="/admin"
            style={{
              color: "#ccc9dc",
              textDecoration: "none",
              padding: "10px",
              backgroundColor: "#324a5f",
            }}
          >
            Admin Dashboard
          </Link>
        </div>
      ) : null}

      <div className="logo">
        <img
          src="https://res.cloudinary.com/dwr3lgrza/image/upload/v1634235717/WhatsApp_Image_2021-10-12_at_18.24_uuj8gd.jpg"
          alt="logo"
          style={{ padding: "10px" }}
        ></img>
      </div>
    </div>
  );
}
