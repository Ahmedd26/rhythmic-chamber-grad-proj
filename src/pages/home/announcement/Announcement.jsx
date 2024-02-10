import "./announcement.scss";
import announcementImage from "../../../assets/images/Recording.jpg";
const Announcement = ({ image = "", title = "No title", body = "None" }) => {
  const imageSource = image || announcementImage;
  return (
    <div className="announcement">
      <div className="top">
        <ul>
          <li>
            <div>N</div>
          </li>
          <li>
            <div>E</div>
          </li>
          <li>
            <div>W</div>
          </li>
        </ul>
        <ul>
          <li>
            <div>A</div>
          </li>
          <li>
            <div>N</div>
          </li>
          <li>
            <div>N</div>
          </li>
          <li>
            <div>o</div>
          </li>
          <li>
            <div>u</div>
          </li>
          <li>
            <div>n</div>
          </li>
          <li>
            <div>c</div>
          </li>
          <li>
            <div>e</div>
          </li>
          <li>
            <div>m</div>
          </li>
          <li>
            <div>e</div>
          </li>
          <li>
            <div>n</div>
          </li>
          <li>
            <div>t</div>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="left">
          <img src={imageSource} alt="AnnouncementImage" />
        </div>
        <div className="right">
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
