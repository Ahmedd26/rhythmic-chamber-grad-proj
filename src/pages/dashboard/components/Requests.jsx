import "./requests.scss";
import userAvatar from "../../../assets/images/profile pic (1-1).png";
const username = "Mr Beats";

const RequestsWidget = () => {
  return (
    <div className="request">
      <div className="reqTitle">Requests</div>
      <div className="reqBody">
        <div className="reqItem">
          <div className="reqLeft">
            <img src={userAvatar} alt="user-avatar" />
            <i class="fa-solid fa-person-circle-question badge"></i>
          </div>
          <div className="reqRight">
            <div className="reqContent">
              <strong>{username}</strong> requested a Beat
            </div>
            <div className="reqActions">
              <span>6d</span>
              <button>Respond</button>
            </div>
          </div>
        </div>
        <div className="reqItem">
          <div className="reqLeft">
            <img src={userAvatar} alt="user-avatar" />
            <i class="fa-solid fa-person-circle-question badge"></i>
          </div>
          <div className="reqRight">
            <div className="reqContent">
              <strong>{username}</strong> requested a Beat
            </div>
            <div className="reqActions">
              <span>6d</span>
              <button>Respond</button>
            </div>
          </div>
        </div>
        <div className="reqItem">
          <div className="reqLeft">
            <img src={userAvatar} alt="user-avatar" />
            <i class="fa-solid fa-person-circle-question badge"></i>
          </div>
          <div className="reqRight">
            <div className="reqContent">
              <strong>{username}</strong> requested a Beat
            </div>
            <div className="reqActions">
              <span>6d</span>
              <button>Respond</button>
            </div>
          </div>
        </div>
        <div className="reqItem">
          <div className="reqLeft">
            <img src={userAvatar} alt="user-avatar" />
            <i class="fa-solid fa-person-circle-question badge"></i>
          </div>
          <div className="reqRight">
            <div className="reqContent">
              <strong>{username}</strong> requested a Beat
            </div>
            <div className="reqActions">
              <span>6d</span>
              <button>Respond</button>
            </div>
          </div>
        </div>
        <div className="reqItem">
          <div className="reqLeft">
            <img src={userAvatar} alt="user-avatar" />
            <i class="fa-solid fa-person-circle-question badge"></i>
          </div>
          <div className="reqRight">
            <div className="reqContent">
              <strong>{username}</strong> requested a Beat
            </div>
            <div className="reqActions">
              <span>6d</span>
              <button>Respond</button>
            </div>
          </div>
        </div>
        <div className="reqItem">
          <div className="reqLeft">
            <img src={userAvatar} alt="user-avatar" />
            <i class="fa-solid fa-person-circle-question badge"></i>
          </div>
          <div className="reqRight">
            <div className="reqContent">
              <strong>{username}</strong> requested a Beat
            </div>
            <div className="reqActions">
              <span>6d</span>
              <button>Respond</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestsWidget;
