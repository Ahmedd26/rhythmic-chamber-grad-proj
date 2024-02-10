import React from "react";
import "./thanksStep.scss";
import Logo from "../../../../assets/images/logo.png";
import { Link } from "react-router-dom";
const ThanksStep = () => {
  return (
    <div className="thanksScreenContainer">
      <div className="brandHeading">
        <img src={Logo} alt="Logo" className="LogoImage" />
        <h1 className="brandTitle">Rhythmic Chamber</h1>
      </div>
      <h2 className="thanksMessage">
        Congratulations on creating a successful marketing campaign with
        Rhythmic Chamber!
      </h2>
      <div className="thanksText">
        <p>
          We would like to express our sincere gratitude for choosing our
          platform to promote your products. We are confident that your decision
          will lead to exceptional results and a remarkable return on
          investment.
        </p>
        <p>
          At Rhythmic Chamber, we are committed to providing cutting-edge
          marketing tools and strategies to maximize your reach and amplify your
          brand's presence. Our dedicated team of experts is continuously
          working behind the scenes to ensure your campaign's success.
        </p>
        <p>
          By leveraging our platform, you have taken a significant step towards
          expanding your customer base and achieving your business goals. The
          possibilities are endless, and we encourage you to continue exploring
          the vast potential of our marketing tools.
        </p>
        <p>
          Stay assured that Rhythmic Chamber is here to support you every step
          of the way. We are thrilled to be part of your journey to success, and
          we can't wait to witness the remarkable impact your campaign will
          have.
        </p>
        <p className="lastP">
          Thank you once again for placing your trust in Rhythmic Chamber. Let's
          continue to create extraordinary marketing campaigns together!
        </p>
        <div className="signature">
          <span>Best regards,</span>
          <span>The Rhythmic Chamber Team</span>
        </div>
      </div>
      <div className="navToHome">
        <Link to="/dashboard">Done</Link>
      </div>
    </div>
  );
};

export default ThanksStep;
