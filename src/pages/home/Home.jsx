import "./home.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Beats from "../../assets/icons/beats.png";
import Profits from "../../assets/icons/profits.png";
import musicProduction from "../../assets/images/landing/Beat.png";
import Mixing from "../../assets/images/landing/Mix.png";
import Recording from "../../assets/images/landing/Record.png";
import SoundDesign from "../../assets/images/landing/Sound Design.png";
import LandingCard from "./card/Card";
import BeatImage from "../../assets/images/BeatImage.png";
import PackImage from "../../assets/images/pack.png";
import Logo from "../../assets/images/logo.png";
import Announcement from "./announcement/Announcement";
const Home = () => {
  const announcementProps = {
    image: BeatImage,
    title: "New Announcement Title",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis provident deserunt soluta labore at voluptatem obcaecati in rerum sapiente vitae, amet consectetur velit consequatur error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis provident deserunt soluta labore at voluptatem obcaecati in rerum sapiente vitae, amet consectetur velit consequatur error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis provident deserunt soluta labore at voluptatem obcaecati in rerum sapiente vitae, amet consectetur velit consequatur error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis provident deserunt soluta labore at voluptatem obcaecati in rerum sapiente vitae, amet consectetur velit consequatur error.",
  };

  return (
    <div className="home">
      {/* First Section */}
      <div className="sectionOne">
        <div className="leftSide">
          <p>
            Unlock Your Potential and Take Your Music to the Next Level with
            Rhythmic Chamber
          </p>
          <div className="search">
            <SearchIcon className="searchIcon" />
            <input type="text" placeholder="Search for Beats, drum-kits, etc" />
          </div>
          <div className="links">
            <Link to="/" className="link">
              <img src={Beats} alt="" />
              <span>Explore Beats</span>
            </Link>
            <Link to="/" className="link">
              <img src={Profits} alt="" />
              <span>Start Selling</span>
            </Link>
          </div>
        </div>
        <div className="rightSide">
          <div className="text">
            <p>
              Welcome to Rhythmic Chamber! We offer a wide range of tools to
              help take your music to the next level. You can easily access a
              variety of streaming services, discover new music, and create
              personalized playlists.
            </p>
            <h4>Join us today and begin unlocking your potential!</h4>
          </div>
        </div>
      </div>
      {/* Announcement Section */}
      {/* if there are no announcement data, the component wont render  */}
      {announcementProps.image &&
        announcementProps.title &&
        announcementProps.body && (
          <div className="announcementSection">
            <div className="container">
              <Announcement
                image={announcementProps.image}
                title={announcementProps.title}
                body={announcementProps.body}
              />
            </div>
          </div>
        )}
      {/* Section Two */}
      <div className="sectionTwo">
        <div className="container">
          <div className="row">
            <div className="image">
              <img src={musicProduction} alt="" />
            </div>
            <div className="text">
              <h1>Selling Beats Made Easy</h1>
              <p>
                Unlocking Your Potential as <strong>A Music Producer</strong>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="text">
              <h1>take Beats to the next level</h1>
              <p>
                Offering elite <strong>Sound Engineering Services</strong>
              </p>
            </div>
            <div className="image">
              <img src={Mixing} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="image">
              <img src={Recording} alt="" />
            </div>
            <div className="text">
              <h1>get Beat for your next hit</h1>
              <p>
                There are only three easy steps:
                <strong>Beat - Record - Hit!</strong>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="text">
              <h1>use high quality resources</h1>
              <p>
                Get yourself the best&nbsp;<strong>drum kits</strong>
                &nbsp;and&nbsp;<strong>one-shot packs</strong>
              </p>
            </div>
            <div className="image">
              <img src={SoundDesign} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Section Three */}
      <div className="sectionThree">
        <div className="container">
          <div className="top">
            <h1>Discover New Beats</h1>
            <div className="cardContainer">
              <LandingCard
                image={BeatImage}
                title="Love Scars | Love Scars | Love Scars | Love Scars | "
                author="Blind For Love"
                tempo="120 BPM"
              />
              <LandingCard
                image={BeatImage}
                title="Love Scars"
                author="Blind For Love | Blind For Love | Blind For Love | Blind For Love | Blind For Love | Blind For Love | "
                tempo="120 BPM"
              />
              <LandingCard
                image={BeatImage}
                title="Love Scars"
                author="Blind For Love"
                tempo="120 BPM | 120 BPM | 120 BPM | 120 BPM | 120 BPM | "
              />
              <LandingCard tempo="130 BPM" />
            </div>
          </div>
          <div className="bottom">
            <h1>Upgrade your sounds</h1>
            <div className="cardContainer">
              <LandingCard
                image={PackImage}
                title="Vici Loop Pack"
                author="Jay Cactus"
                tempo="20 loop"
              />
              <LandingCard
                image={PackImage}
                title="Vici Loop Pack"
                author="Jay Cactus"
                tempo="20 loop"
              />
              <LandingCard
                image={PackImage}
                title="VICI Loop Kit"
                author="Jay Cactus"
                tempo="20 loop"
              />
              <LandingCard
                // image={PackImage}
                title="VICI Loop Pack | VICI Loop Pack | VICI Loop Pack | VICI Loop Pack | VICI Loop Pack | VICI Loop Pack | "
                author="Jay Cactus | Jay Cactus | Jay Cactus | Jay Cactus | "
                tempo="20 loop | 20 loop | 20 loop | 20 loop | 20 loop | 20 loop | 20 loop"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Section Four */}
      <div className="sectionFour">
        <div className="container">
          <div className="content">
            <div className="left">
              <h1>Sign up now</h1>
              <div className="links">
                <Link to="/subscription-plans" className="regLink">
                  Pricing
                </Link>
                <Link to="/register" className="regLink">
                  Sign up
                </Link>
              </div>
              <Link to="/" className="terms">
                Terms & Conditions
              </Link>
            </div>
            <div className="right">
              <img src={Logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
