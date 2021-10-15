import { Link } from "react-router-dom";
import { selectUser, selectToken } from "../store/user/selector";
import { useSelector } from "react-redux";
import "./footer.css";

export default function Footer() {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  return (
    <div className="main-footer">
      <img
        src="https://res.cloudinary.com/dwr3lgrza/image/upload/v1634235717/WhatsApp_Image_2021-10-12_at_18.24_uuj8gd.jpg"
        alt="logo"
        style={{ padding: "10px" }}
      ></img>
      <div>
        {token && user.isAdmin ? (
          <Link
            to="/adminpage"
            className="d-flex justify-content-start"
            style={{
              backgroundColor: "#1b2a41",
              color: "#ccc9dc",
              borderColor: "#1b2a41",
              position: "fixed",
              bottom: "30px",
              left: "10px",
              padding: "10px",
              textDecoration: "none",
            }}
          >
            Admin dashboard
          </Link>
        ) : null}
      </div>
    </div>
  );
}
