import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <div className="main-footer d-flex justify-content-start">
      <div>
        <Link
          to="/admin"
          style={{
            color: "#ccc9dc",
            textDecoration: "none",
            padding: "5px",
            backgroundColor: "#324a5f",
          }}
        >
          Admin Dashboard
        </Link>
      </div>
      <div className="align-items-center">
        <img
          src="https://res.cloudinary.com/dwr3lgrza/image/upload/v1634235717/WhatsApp_Image_2021-10-12_at_18.24_uuj8gd.jpg"
          alt="logo"
          style={{ padding: "10px" }}
        ></img>
      </div>
    </div>
  );
}
