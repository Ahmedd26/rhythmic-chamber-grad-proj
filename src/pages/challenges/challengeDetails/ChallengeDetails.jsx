import "./challengeDetails.scss";
import ChallengeImage from "../../../assets/images/Challenges.jpg";
import { Link } from "react-router-dom";
const ChallengeDetails = () => {
  return (
    <div className="container">
      <div className="challengeDetails">
        <h1 className="detailsHeader">Challenge Details</h1>
        <div className="detailsTop">
          <div className="detailsRight">
            <img src={ChallengeImage} alt="Details" />
          </div>
          <div className="detailsLeft">
            <h1 className="detTitle">Remix 'The Goat' Challenge</h1>
            <span className="detInfo">
              <b>Client:</b> Mr Beats
            </span>
            <span className="detInfo">
              <b>Challenge Type:</b> Remix
            </span>
            <span className="detInfo">
              <b>Starts:</b> Thu, 13 Apr 2023
            </span>
            <span className="detInfo">
              <b>Ends:</b> Thu, 27 Apr 2023
            </span>
            <p className="detPara">
              Submit your best remix for "THE GOAT" Song by "Mr Beats" features
              "Blind for Love"
            </p>
          </div>
        </div>
        <div className="detailsBottom">
          <div className="submitRight">
            <h2>Submit your track to enroll</h2>
            <p>
              Submission to opportunities are only available on Pro or Unlimited
              Subscription accounts.
              <Link to="/"> Upgrade Account</Link>
            </p>
          </div>
          <div className="submitLeft">
            <form>
              <input type="file" id="upTrack" />
              <label htmlFor="upTrack">Submit Track</label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetails;
