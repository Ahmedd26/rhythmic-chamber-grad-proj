import "./exploreCard.scss";
import BeatImage from "../../../assets/images/BeatImage.png";
const ExploreCard = () => {
  return (
    <div className="card">
      <div className="image">
        <img src={BeatImage} alt="BeatImage" />
      </div>
      <div className="text">
        <div className="exploreCardInfo">
          <span className="price">$20.00</span>
          <i className="fa-solid fa-circle dot"></i>
          <span className="download">
            <span>Free</span>
            <i className="fa-solid fa-download freeDownload"></i>
          </span>
          <i className="fa-solid fa-circle dot"></i>
          <span className="tempo">120 BPM</span>
        </div>
        <h3 className="title">Love Scars</h3>
        <span className="author">Blind For Love</span>
      </div>
    </div>
  );
};

export default ExploreCard;
