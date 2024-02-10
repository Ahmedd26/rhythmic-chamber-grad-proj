import "./requestCard.scss";
// import userAvatar from "../../../assets/images/profile pic (1-1).png";

const RequestCard = ({
  requestType,
  userAvatar,
  userName,
  requestDetails,
  proposalPrice,
  deadline,
  index,
}) => {
  return (
    <div className="view-request">
      <h1 className="RequestHeading">{requestType}</h1>
      <div className="content">
        <img src={userAvatar} alt="userAvatar" />
        <div className="request-text">
          <h2>
            {userName} Has requested {requestType} for his track.
          </h2>
          <p>{requestDetails} </p>
          <div className="request-details">
            <h2>
              <b>Proposal price: </b>${proposalPrice}
            </h2>
            <h2>
              <b>Deadline: </b>
              {deadline}
            </h2>
            <h3>
              <i className="fa-solid fa-circle-info"></i>Files will be
              downloaded automatically when you accept the request
            </h3>
          </div>
        </div>
      </div>
      <div className="request-btns">
        <button>Reject</button>
        <button>Accept</button>
      </div>
    </div>
  );
};

export default RequestCard;
