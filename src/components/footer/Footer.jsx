import { Link } from "react-router-dom";
import "./footer.scss";
import Logo from "./logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="about">
          <div className="top">
            <img src={Logo} alt="Logo" />
            <h1 className="title">Rhythmic Chamber</h1>
          </div>
          <div className="bottom">
            <p className="aboutText">
              welcome to rhythmic chamber, the premier digital music platform
              for producers, beat-makers, to showcase and sell their beats; and
              allows sound engineers to offer their services for artists, music
              producers, and sound designers; also offer an opportunity to sound
              designers to sell their crafted sounds such as instrumental
              one-shots, drum samples, sound effects and more.
            </p>
          </div>
        </div>
        <div className="menu">
          <h1 className="title">Menu</h1>
          <ul>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <Link to="/">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="link">
          <h1 className="title">Follow Us</h1>
          <ul>
            <li>
              <a href="https://www.facebook.com">
                <i className="fa-brands fa-square-facebook footerIcon"></i>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com">
                <i className="fa-brands fa-instagram footerIcon"></i>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com">
                <i className="fa-brands fa-twitter footerIcon"></i>
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com">
                <i className="fa-brands fa-spotify footerIcon"></i>
                <span>Spotify</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
