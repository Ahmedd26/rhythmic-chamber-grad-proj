import RequestCard from "./requestCard/RequestCard";
import "./requests.scss";
import userAvatar from "../../assets/images/profile pic (1-1).png";

const Requests = () => {
  const requestsData = [
    {
      index: 1,
      requestType: "Mixing Service",
      userAvatar: userAvatar,
      userName: "Blind For Love",
      requestDetails:
        "Hello Larry, I have a track that needs your mixing, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, possimus sunt atque ab corrupti provident at harum odit laudantium. Mollitia a nesciunt eligendi quo sint. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, possimus sunt atque ab corrupti provident at harum odit laudantium. Mollitia a nesciunt eligendi quo sint. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, possimus sunt atque ab corrupti provident at harum odit laudantium. Mollitia a nesciunt eligendi quo sint.",
      proposalPrice: "20.00",
      deadline: "25 May, 2023",
    },
    {
      index: 2,
      requestType: "Mastering Service",
      userAvatar: userAvatar,
      userName: "Antonio",
      requestDetails:
        "Hello Larry, I have a track that needs your mixing, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, possimus sunt atque ab corrupti provident at harum odit laudantium. Mollitia a nesciunt eligendi quo sint. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, possimus sunt atque ab corrupti provident at harum odit laudantium. Mollitia a nesciunt eligendi quo sint. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, possimus sunt atque ab corrupti provident at harum odit laudantium. Mollitia a nesciunt eligendi quo sint.",
      proposalPrice: "20.00",
      deadline: "25 May, 2023",
    },
    {
      index: 3,
      requestType: "Custom Beat",
      userAvatar: userAvatar,
      userName: "Blind For Love",
      requestDetails:
        "Hello Larry, I have a track that needs your mixing, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, possimus sunt atque ab corrupti provident at harum odit laudantium. Mollitia a nesciunt eligendi quo sint. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, possimus sunt atque ab corrupti provident at harum odit laudantium. Mollitia a nesciunt eligendi quo sint. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, possimus sunt atque ab corrupti provident at harum odit laudantium. Mollitia a nesciunt eligendi quo sint.",
      proposalPrice: "20.00",
      deadline: "25 May, 2023",
    },
  ];
  return (
    <div className="container">
      <div className="requests">
        {requestsData.map((request) => (
          <RequestCard
            requestType={request.requestType}
            userAvatar={request.userAvatar}
            userName={request.userName}
            requestDetails={request.requestDetails}
            proposalPrice={request.proposalPrice}
            deadline={request.deadline}
            key={request.index}
          />
        ))}
      </div>
    </div>
  );
};

export default Requests;
