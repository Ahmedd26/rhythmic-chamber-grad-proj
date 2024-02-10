import "./challenges.scss";
import challengeImage from "../../assets/images/Challenges.jpg";
import EnrolledChallenges from "./components/enrolled/Enrolled";
import ChallengeCard from "./components/challengeCard/ChallengeCard";
const Challenges = () => {
  const username = "Mr Beats";
  return (
    <div className="container">
      <div className="challenges">
        <div className="enrolledBox">
          <h1>Welcome to Rhythmic Chamber Challenges</h1>
          <p>
            {username}, here are some challenges you have enrolled in previously
          </p>
          <div className="cardsHolder">
            <EnrolledChallenges
              challengeImage={challengeImage}
              challengeTitle="Remix 'The Goat' Challenge"
              challengeDueDate="Ends: Thu, 27 Apr 2023"
            />
            <EnrolledChallenges
              challengeImage={challengeImage}
              challengeTitle="Remix 'The Goat' Challenge"
              challengeDueDate="Ends: Thu, 27 Apr 2023"
            />
            <EnrolledChallenges
              challengeImage={challengeImage}
              challengeTitle="Remix 'The Goat' Challenge"
              challengeDueDate="Ends: Thu, 27 Apr 2023"
            />
            <EnrolledChallenges
              challengeImage={challengeImage}
              challengeTitle="Remix 'The Goat' Challenge"
              challengeDueDate="Ends: Thu, 27 Apr 2023"
            />
          </div>
        </div>
        <div className="challengesHeader">
          <h1>
            Browse <span className="lighter">Rhythmic Chamber</span> Newest
            Challenges
          </h1>
          <div className="rightCat">
            <h6>Category</h6>
            <span>all</span>
          </div>
        </div>
        <div className="browseChallenges">
          <ChallengeCard
            challengeImage={challengeImage}
            challengeTitle='Remix "THE GOAT" Challenge'
            challengeDetails='Submit your best remix for "THE GOAT" Song by "Mr Beats" features
          "Blind for Love"'
            challengeDueDate="Ends: Thu, 27 Apr 2023"
            challengeLink="test"
          />
          <ChallengeCard
            challengeImage={challengeImage}
            challengeTitle='Remix "THE GOAT" Challenge'
            challengeDetails='Submit your best remix for "THE GOAT" Song by "Mr Beats" features
          "Blind for Love"'
            challengeDueDate="Ends: Thu, 27 Apr 2023"
            challengeLink="test"
          />
          <ChallengeCard
            challengeImage={challengeImage}
            challengeTitle='Remix "THE GOAT" Challenge'
            challengeDetails='Submit your best remix for "THE GOAT" Song by "Mr Beats" features
          "Blind for Love"'
            challengeDueDate="Ends: Thu, 27 Apr 2023"
            challengeLink="test"
          />
          <ChallengeCard
            challengeImage={challengeImage}
            challengeTitle='Remix "THE GOAT" Challenge'
            challengeDetails='Submit your best remix for "THE GOAT" Song by "Mr Beats" features
          "Blind for Love"'
            challengeDueDate="Ends: Thu, 27 Apr 2023"
            challengeLink="test"
          />
        </div>
      </div>
    </div>
  );
};

export default Challenges;
