import React from "react";
import "./reviewPaymentStep.scss";
import { ProductCard } from "../PromotionTypeStep/ChooseProduct";
import beatImage from "../../../../assets/images/BeatImage.png";
import { Link } from "react-router-dom";

const ReviewPaymentStep = ({
  nextStep,
  prevStep,
  campaignData,
  setCampaignData,
  onPaymentOpen,
}) => {
  return (
    <div className="reviewPaymentStep">
      <h1 className="reviewPaymentStepHeading">Review your new campaign</h1>
      <div className="chosenProductReview">
        <h3 className="trackToPromote">Track to promote</h3>
        <ProductCard
          productImage={beatImage}
          productTitle="Love Scars"
          releaseDate="15 Apr, 2023"
        />
      </div>
      <div className="paymentProcess">
        <button onClick={onPaymentOpen}>
          <i className="fa-solid fa-plus"></i>
          <span className="addPaymentMethod">Add payment</span>
        </button>
      </div>
      <div className="startAndEndDate">
        <div className="dateStartFinish">
          <h4 className="reviewDate">Start</h4>
          <h4 className="actualDate">Sat, April 22, 2023</h4>
        </div>
        <div className="dateStartFinish">
          <h4 className="reviewDate">Finish</h4>
          <h4 className="actualDate">Sat, April 29, 2023</h4>
        </div>
      </div>
      <div className="reviewCheckOut">
        <div className="checkoutPromotion">
          <h4 className="budgetPer">Budget per day</h4>
          <h4 className="budgetPrice">$5.00</h4>
        </div>
        <div className="checkoutPromotion">
          <h4 className="budgetPer">Budget in total</h4>
          <h4 className="budgetPrice">$35.00</h4>
        </div>
      </div>
      <div className="statements">
        <p className="statement">All promotion purchases are Non-Refundable.</p>
        <p className="statement">
          By creating a campaign you accept our&nbsp;
          <Link to="/terms-and-conditions" className="tAndC">
            Terms & Conditions.
          </Link>
        </p>
      </div>
      <div className="navigationBackAndSubmit">
        <button className="navBtn" onClick={prevStep}>
          Previous
        </button>
        <button className="navBtn" onClick={nextStep}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewPaymentStep;
