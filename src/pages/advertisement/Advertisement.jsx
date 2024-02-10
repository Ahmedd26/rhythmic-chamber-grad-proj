import { useState } from "react";
import "./advertisement.scss";
import ChooseProduct from "./screens/PromotionTypeStep/ChooseProduct";
import PromotionTypeStep from "./screens/PromotionTypeStep/PromotionTypeStep";
import SideText from "./screens/SideText";
import DurationBudgetStep from "./screens/DurationBudgetStep/DurationBudgetStep";
import ReviewPaymentStep from "./screens/ReviewPaymentStep/ReviewPaymentStep";
import ThanksStep from "./screens/ThanksStep/ThanksStep";
import PaymentCard from "./screens/ReviewPaymentStep/PaymentCard";
const Advertisement = () => {
  // show products Dialog box
  const [showProducts, setShowProducts] = useState(false);

  const handleCategoryOpen = () => {
    setShowProducts((prevShowProducts) => !prevShowProducts);
  };
  // Show Payment Card
  const [showPaymentCard, setShowPaymentCard] = useState(false);
  const handlePaymentOpen = () => {
    setShowPaymentCard((prevShowPayment) => !prevShowPayment);
    console.log("Hello");
  };
  // Set Page Navigations
  const [step, setStep] = useState(0);

  // Set States for Handling the Form Data.
  const [campaignData, setCampaignData] = useState({
    product: "",
    duration: "",
    startDate: "",
    budgetPerDay: "",
    paymentData: {
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    },
  });
  console.log(campaignData);
  // Handle Navigation
  const handleNextStep = () => {
    console.log("next!");
    if (step < 3) {
      setStep(step + 1);
    }
  };
  const handlePrevStep = () => {
    console.log("Prev!");
    if (step > 0) {
      setStep(step - 1);
    }
  };
  return (
    <>
      <div className="advBackground"></div>
      <div className="campaignContent container">
        <SideText />
        {step === 0 ? (
          <>
            <PromotionTypeStep
              onCategoryOpen={handleCategoryOpen}
              nextStep={handleNextStep}
              campaignData={campaignData}
              setCampaignData={setCampaignData}
            />
            {showProducts && <ChooseProduct />}
          </>
        ) : step === 1 ? (
          <DurationBudgetStep
            nextStep={handleNextStep}
            prevStep={handlePrevStep}
            campaignData={campaignData}
            setCampaignData={setCampaignData}
          />
        ) : step === 2 ? (
          <>
            <ReviewPaymentStep
              nextStep={handleNextStep}
              prevStep={handlePrevStep}
              campaignData={campaignData}
              setCampaignData={setCampaignData}
              onPaymentOpen={handlePaymentOpen}
            />
            {showPaymentCard && (
              <PaymentCard
                campaignData={campaignData}
                setCampaignData={setCampaignData}
                onPaymentOpen={handlePaymentOpen}
              />
            )}
          </>
        ) : (
          <ThanksStep />
        )}
      </div>
    </>
  );
};

export default Advertisement;
