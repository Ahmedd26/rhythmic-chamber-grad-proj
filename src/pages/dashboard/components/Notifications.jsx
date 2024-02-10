import "./notifications.scss";
// import { Link } from "react-router-dom";
import userAvatar from "../../../assets/images/profile pic (1-1).png";
const username = "Mr Beats";

const NotificationsWidget = () => {
  return (
    <div className="notifications">
      <div className="notTitle">Recent Notifications</div>
      <div className="notificationBody">
        <div className="notItem">
          <div className="notLeft">
            <img src={userAvatar} alt="user-avatar" />
            <i className="fa-solid fa-user-plus badge"></i>
            {/* <i className="fa-solid fa-user-check"></i> */}
          </div>
          <div className="notRight">
            <div className="notContent">
              <strong>{username}</strong> is now following your profile
            </div>
            <div className="notActions">
              <span>6d</span>
              <button>Follow back</button>
            </div>
          </div>
        </div>
        <div className="notItem">
          <div className="notLeft">
            <img src={userAvatar} alt="user-avatar" />
            <i className="fa-solid fa-user-plus badge"></i>
            {/* <i className="fa-solid fa-user-check"></i> */}
          </div>
          <div className="notRight">
            <div className="notContent">
              <strong>{username}</strong> is now following your profile
            </div>
            <div className="notActions">
              <span>6d</span>
              <button>Follow back</button>
            </div>
          </div>
        </div>
        <div className="notItem">
          <div className="notLeft">
            <img src={userAvatar} alt="user-avatar" />
            <i className="fa-solid fa-user-plus badge"></i>
            {/* <i className="fa-solid fa-user-check"></i> */}
          </div>
          <div className="notRight">
            <div className="notContent">
              <strong>{username}</strong> is now following your profile
            </div>
            <div className="notActions">
              <span>6d</span>
              <button>Follow back</button>
            </div>
          </div>
        </div>
        <div className="notItem">
          <div className="notLeft">
            <img src={userAvatar} alt="user-avatar" />
            <i className="fa-solid fa-user-plus badge"></i>
            {/* <i className="fa-solid fa-user-check"></i> */}
          </div>
          <div className="notRight">
            <div className="notContent">
              <strong>{username}</strong> is now following your profile
            </div>
            <div className="notActions">
              <span>6d</span>
              <button>Follow back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsWidget;
