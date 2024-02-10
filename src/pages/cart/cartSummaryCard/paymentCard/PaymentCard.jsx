import React, { useState } from "react";
import "./paymentCard.scss";
import RhythmicChamberLogo from "../../../../assets/images/logo.png";

const PaymentCard = ({ onPaymentOpen, onAddCard }) => {
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState({});

  const handleCardHolderNameChange = (event) => {
    setCardHolderName(event.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, cardHolderName: false }));
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, cardNumber: false }));
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, expiryDate: false }));
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, cvv: false }));
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();

    const isValidCardHolderName = /^[a-zA-Z ]+$/.test(cardHolderName);
    const isValidCardNumber = /^\d{16}$/.test(cardNumber);
    const isValidExpiryDate = /^\d{2}\/\d{2}$/.test(expiryDate);
    const isValidCvv = /^\d{3}$/.test(cvv);

    const newErrors = {
      cardHolderName: !isValidCardHolderName,
      cardNumber: !isValidCardNumber,
      expiryDate: !isValidExpiryDate,
      cvv: !isValidCvv,
    };

    setErrors(newErrors);

    if (
      isValidCardHolderName &&
      isValidCardNumber &&
      isValidExpiryDate &&
      isValidCvv
    ) {
      onAddCard({
        cardHolderName,
        cardNumber,
        expiryDate,
        cvv,
      });

      setCardHolderName("");
      setCardNumber("");
      setExpiryDate("");
      setCvv("");
    }
  };

  return (
    <form className="paymentCard" onSubmit={handleFormSubmission}>
      <div className="paymentCardTopContainer">
        <div className="paymentCardTopTop">
          <img className="RCLogo" src={RhythmicChamberLogo} alt="Logo" />
          <h1 className="RCHeading">Rhythmic Chamber</h1>
        </div>
        <span className="paymentCardTopBottom">Add your Card Information</span>
      </div>
      <div className="paymentCardContent">
        <div className="creditCardInfo">
          <input
            type="text"
            placeholder="Card Holder Name"
            value={cardHolderName}
            onChange={handleCardHolderNameChange}
            className={errors.cardHolderName ? "input-error" : ""}
          />
          {errors.cardHolderName && (
            <span className="error-message">Please enter a valid name</span>
          )}
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={handleCardNumberChange}
            className={errors.cardNumber ? "input-error" : ""}
          />
          {errors.cardNumber && (
            <span className="error-message">
              Please enter a valid card number
            </span>
          )}
          <div className="inputDiv">
            <input
              type="text"
              placeholder="Expiry Date (mm/yy)"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              className={errors.expiryDate ? "input-error" : ""}
            />
            <input
              type="text"
              placeholder="CVV"
              value={cvv}
              onChange={handleCvvChange}
              className={errors.cvv ? "input-error" : ""}
            />
          </div>
          <div className="inputDiv">
            {errors.expiryDate && (
              <span className="error-message-date">
                Please enter a valid expiry date (mm/yy)
              </span>
            )}
            {errors.cvv && (
              <span className="error-message-cvv">
                Please enter a valid CVV (3 digits)
              </span>
            )}
          </div>
        </div>
        <p className="agreement">
          I authorize Rhythmic Chamber Platform to save this payment method and
          automatically charge the payment method whenever a subscription is
          associated with it.
        </p>
        <div className="cardInfoActions">
          <button className="addCardInfoBtn" onClick={onPaymentOpen}>
            Cancel
          </button>
          <button type="submit" className="addCardInfoBtn">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default PaymentCard;
