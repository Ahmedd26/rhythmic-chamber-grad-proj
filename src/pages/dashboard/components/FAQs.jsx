import "./faqs.scss";
import userAvatar from "../../../assets/images/profile pic (1-1).png";
import siteAvatar from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";

const FAQsWidget = () => {
  return (
    <div className="FAQs">
      <div className="FAQsTitle">FAQs</div>
      <div className="FAQsBody">
        {/* Question */}
        <div className="FAQsItem">
          <div className="FAQsLeft">
            <img src={userAvatar} alt="user-avatar" />
            <i class="fa-regular fa-circle-question badge"></i>
          </div>
          <div className="FAQsRight">
            <p>How to upload my beats on Rhythmic Chamber?</p>
          </div>
        </div>
        {/* Answer */}
        <div className="FAQsItem">
          <div className="FAQsLeft">
            <img src={siteAvatar} alt="user-avatar" />
            <i class="fa-regular fa-comment-dots badge"></i>
          </div>
          <div className="FAQsRight">
            <p>
              To Upload on our platform, first you create an account, choose
              your subscription plan, and after editing your profile{" "}
              <Link to="/" className="readMore">
                … Read more
              </Link>
            </p>
          </div>
        </div>
        <div className="FAQsItem FAQsBtn">
          <Link to="/FAQs" className="readMoreBtn">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQsWidget;
