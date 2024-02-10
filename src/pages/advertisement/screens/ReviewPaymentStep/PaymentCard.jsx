import React from "react";
import "./paymentCard.scss";
import RhythmicChamberLogo from "../../../../assets/images/logo.png";

const PaymentCard = ({ onPaymentOpen }) => {
  return (
    <div className="paymentCard">
      <div className="paymentCardTopContainer">
        <div className="paymentCardTopTop">
          <img className="RCLogo" src={RhythmicChamberLogo} alt="Logo" />
          <h1 className="RCHeading">Rhythmic Chamber</h1>
        </div>
        <span className="paymentCardTopBottom">Add your Card Information</span>
      </div>
      <div className="paymentCardContent">
        <div className="creditCardInfo">
          <input type="text" placeholder="Card Holder Name" />
          <input type="text" placeholder="Card Number" />
          <div className="inputDiv">
            <input type="text" placeholder="Expiry Date" />
            <input type="text" placeholder="CVV" />
          </div>
        </div>
        <p className="agreement">
          I authorize Rhythmic Chamber Platform to save this payment method and
          automatically charge payment method whenever a subscription is
          associated with it
        </p>
        <div className="cardInfoActions">
          <button className="addCardInfoBtn" onClick={onPaymentOpen}>
            Cancel
          </button>
          <button className="addCardInfoBtn" onClick={onPaymentOpen}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
