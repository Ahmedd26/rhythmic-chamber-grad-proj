import "./enrolled.scss";
import { Link } from "react-router-dom";
const EnrolledChallenges = ({
  challengeImage,
  challengeTitle,
  challengeDueDate,
}) => {
  return (
    <div className="enrolledCard">
      <div className="enLeft">
        <img src={challengeImage} alt="challenge" />
      </div>
      <div className="enRight">
        <div className="enRTop">
          <h1>{challengeTitle}</h1>
        </div>
        <div className="enRBottom">
          <span className="dueDate">{challengeDueDate}</span>
          <Link to="/" className="viewChallengeLink">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnrolledChallenges;
