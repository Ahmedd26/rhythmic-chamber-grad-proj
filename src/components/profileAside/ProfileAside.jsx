import "./profileAside.scss";
import UserAvatar from "../../assets/images/profile pic (1-1).png";
import { Link } from "react-router-dom";
// import BeatArtwor from "../../assets/images/BeatImage.png";
const ProfileAside = () => {
  return (
    <aside className="profileAside">
      <img src={UserAvatar} alt="profile-pic" className="avatar" />
      <div className="username-title">
        <h1>Mr Beats</h1>
        <p>Music Producer</p>
      </div>
      <hr />
      <Link to="edit-profile" className="editProfileButton">
        Edit Profile
        <i className="fa-solid fa-pencil"></i>
      </Link>
      <hr />
      <div className="stats">
        <h3>Stats</h3>
        <div className="stat">
          <span>Followers</span>
          <span>2,000</span>
        </div>
        <div className="stat">
          <span>Plays</span>
          <span>3,500</span>
        </div>
        <div className="stat">
          <span>Products</span>
          <span>62</span>
        </div>
      </div>
      <hr />
      <div className="asideProducts">
        <div className="productsTitle">
          <h2>Products</h2>
          <Link to="products">View Products</Link>
        </div>
        <div className="productTiles">
          <span className="productTile">50 Track</span>
          <span className="productTile">12 Sound pack</span>
        </div>
      </div>
      <hr />
      <div className="aboutBio">
        <h2>About</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum
          animi quisquam voluptatem consequatur, eaque ducimus ex voluptatum,
          alias quae explicabo, unde illo eos vero?
        </p>
      </div>
      <hr />
      <div className="userLinks">
        <a href="https://www.facebook.com">
          <i className="fa-brands fa-square-facebook"></i>
        </a>
        <a href=" https://www.instagram.com ">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.twitter.com">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.youtube.com">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="https://www.sound-cloud.com">
          <i className="fa-brands fa-soundcloud"></i>
        </a>
        <a href="https://www.spotify.com">
          <i className="fa-brands fa-spotify"></i>
        </a>
      </div>
    </aside>
  );
};

export default ProfileAside;
