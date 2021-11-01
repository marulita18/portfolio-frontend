import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="body">
      <h2>We drink wine and we know things...</h2>
      <div>
        <p className="about-p">
          Chien Noir was born to make it easy for wine lovers to get their
          favorite wines. What started as a hobby, quickly developed into this
          business that keeps growing and makes us very happy. <br />
          Meet Chien Noir's funders, Leo and Mariel.
        </p>
        <img
          src="https://res.cloudinary.com/dwr3lgrza/image/upload/v1634754959/IMG_0379_rocpfd.jpg"
          alt="about us pic"
          className="about-pic img-fluid"
        />
      </div>
    </div>
  );
}
