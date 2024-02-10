import "./announcement.scss";
import announcementImage from "../../../assets/images/Mixing Services.jpg";
const AnnouncementsWidget = () => {
  return (
    <div className="announcementWidget">
      <h1 className="annTitle">Announcement</h1>
      <div className="annBody">
        <div className="annLeft">
          <img src={announcementImage} alt="announcement" />
        </div>
        <div className="annRight">
          <h2 className="annHead">New Promotion Pricing Available!</h2>
          <p className="annContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            blanditiis dolore labore quam omnis iste inventore beatae sed
            mollitia, consequatur quis aliquid similique. Enim, ab nesciunt
            deserunt eum voluptatum mollitia? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nam blanditiis dolore labore quam
            omnis iste inventore beatae sed mollitia, consequatur quis aliquid
            similique. Enim, ab nesciunt deserunt eum voluptatum mollitia?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementsWidget;
