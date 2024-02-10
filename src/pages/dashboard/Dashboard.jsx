import { Link } from "react-router-dom";
import "./dashboard.scss";
import DownloadingIcon from "@mui/icons-material/Downloading";
import PaymentsIcon from "@mui/icons-material/Payments";
import NotificationsWidget from "./components/Notifications";
import RequestsWidget from "./components/Requests";
import FAQsWidget from "./components/FAQs";
import AnnouncementsWidget from "./components/Announcement";
const Dashboard = () => {
  const username = "Mr Beats";

  return (
    <div className="container">
      <div className="dashboard">
        {/* Stats */}
        <div className="stats">
          <h1 className="heading">Welcome Back, {username}</h1>
          <div className="options">
            <div className="statDuration">
              <span>Quick Stats</span>
              <div className="dropdownTime">This Day</div>
            </div>
            <Link to="/profile" className="linkToProfile">
              View Profile
            </Link>
          </div>
          <div className="statTiles">
            <div className="statTile">
              <i className="dashIco fa-solid fa-dollar-sign"></i>
              <span className="value">526.30</span>
              <span className="name">Total Sales</span>
            </div>
            <div className="statTile">
              <i className="dashIco fa-regular fa-heart"></i>
              <span className="value">42</span>
              <span className="name">Likes</span>
            </div>
            <div className="statTile">
              <i className="dashIco fa-regular fa-comments"></i>
              <span className="value">542</span>
              <span className="name">Comments</span>
            </div>
            <div className="statTile">
              <i className="dashIco fa-solid fa-download"></i>
              <span className="value">84</span>
              <span className="name">Downloads</span>
            </div>
            <div className="statTile">
              <i className="dashIco fa-regular fa-handshake"></i>
              <span className="value">45</span>
              <span className="name">Requests</span>
            </div>
            <div className="statTile">
              <i className="dashIco fa-solid fa-user-plus"></i>
              <span className="value">54</span>
              <span className="name">Followers</span>
            </div>
            <div className="statTile">
              <i className="dashIco fa-solid fa-play"></i>
              <span className="value">542</span>
              <span className="name">Plays</span>
            </div>
            <div className="statTile">
              <i className="dashIco fa-solid fa-calendar-days"></i>
              <span className="value">3</span>
              <span className="name">Challenges</span>
            </div>
          </div>
        </div>
        {/* Row 2 // Challenges, getting Started, Notifications */}
        <div className="dashboardSectionTwo">
          <div className="challengesWidget">
            <Link to="/challenges" className="linkToDash">
              <div className="chTop">
                <h1>Challenges</h1>
              </div>
              <div className="chMiddle">
                <h3>Join Now</h3>
              </div>
              <div className="chBottom">
                <p>
                  Musicians, don't miss out on the opportunity to push your
                  creative boundaries and compete against other talented artists
                  in our beat battles and challenges. Show off your skills, gain
                  recognition in the music industry, and take your music to new
                  heights. Enter now and let your talent shine!
                </p>
              </div>
            </Link>
          </div>

          <div className="guide">
            <h1 className="GTitle">Getting Started</h1>
            <div className="squares">
              <Link className="square" to="/profile/upload">
                <DownloadingIcon
                  className="squareIcon"
                  style={{ transform: "rotate(180deg)" }}
                />
                <span className="guideText">Upload</span>
              </Link>
              <Link className="square" to="/advertisement">
                <i className="fa-solid fa-rocket squareIcon dashIco"></i>
                <span className="guideText">Promote</span>
              </Link>
              <Link className="square" to="/profile/edit-profile">
                <i className="fa-solid fa-pen squareIcon dashIco"></i>
                <span className="guideText">Edit Profile</span>
              </Link>
              <Link className="square" to="/subscription-plans">
                <PaymentsIcon className="squareIcon" />
                <span className="guideText">Subscribe</span>
              </Link>
            </div>
          </div>

          <NotificationsWidget />
          {/* Make the Notification Container a component because it is used three times */}
          {/* Row 3 // requests, FAQs, Announcements */}
        </div>
        <div className="dashboardSectionThree">
          <RequestsWidget />
          <FAQsWidget />
          <AnnouncementsWidget />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
