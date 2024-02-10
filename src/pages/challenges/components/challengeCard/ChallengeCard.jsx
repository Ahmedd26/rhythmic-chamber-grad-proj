import "./challengeCard.scss";
import { Link } from "react-router-dom";
const ChallengeCard = ({
  challengeImage,
  challengeTitle,
  challengeDetails,
  challengeDueDate,
  challengeLink,
}) => {
  return (
    <div className="challengeCard">
      <div className="chCLft">
        <img src={challengeImage} alt="Challenge" width={224} height={224} />
      </div>
      <div className="chCRt">
        <div className="ChCRtTop">
          <h1>{challengeTitle}</h1>
          <p>{challengeDetails}</p>
          <span>{challengeDueDate}</span>
        </div>
        <Link to={challengeLink} className="ChCRtBottom">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ChallengeCard;
