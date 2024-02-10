import { useState } from "react";
import CartOverlay from "./plan/CartOverlay";
import SubPlan from "./plan/Plan";
import "./subscriptionPlans.scss";
import ReplacePlan from "./plan/ReplacePlan";

const SubscriptionPlans = () => {
  const planData = [
    {
      title: "Free",
      price: "0",
      duration: "EGP/Month",
      features: [
        "Limited access to analytics.",
        "20 Tracks upload.",
        "2 Licences.",
      ],
      services: ["none", "none", "none"],
    },
    {
      title: "Premium",
      price: "200",
      duration: "EGP/Month",
      features: [
        "More access to analytics.",
        "50 Tracks upload.",
        "5 Licences.",
      ],
      services: ["Gift Card", "Team Support", "Free Promotion"],
    },
    {
      title: "Pro",
      price: "500",
      duration: "EGP/Month",
      features: [
        "Full access to analytics.",
        "Unlimited Tracks upload.",
        "10 Licences.",
      ],
      services: ["Gift Card", "Team Support", "Free Promotion"],
    },
  ];
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [existingPlan, setExistingPlan] = useState(
    JSON.parse(localStorage.getItem("cartData"))
  );
  const [isPlanAddedToCart, setIsPlanAddedToCart] = useState(false);
  const [isReplacePlanVisible, setIsReplacePlanVisible] = useState(false);

  const handleAddToCart = (plan) => {
    setSelectedPlan(plan);

    if (existingPlan) {
      setIsReplacePlanVisible(true);
    } else {
      setIsPlanAddedToCart(true);
      setExistingPlan(plan);
      localStorage.setItem("cartData", JSON.stringify(plan));
    }
  };

  const handleReplacePlan = () => {
    setIsPlanAddedToCart(true);
    setExistingPlan(selectedPlan);
    localStorage.setItem("cartData", JSON.stringify(selectedPlan));
    setIsReplacePlanVisible(false);
  };

  const handleDismissReplacePlan = () => {
    setIsReplacePlanVisible(false);
    setSelectedPlan(null);
  };

  const handleOkayClick = () => {
    setIsPlanAddedToCart(false);
  };
  return (
    <div className="container subPlansMain">
      <h1 className="subscriptionPlansHeading">Subscription Plans</h1>
      {isPlanAddedToCart && <CartOverlay onOkayClick={handleOkayClick} />}
      {isReplacePlanVisible && (
        <ReplacePlan
          onOkayClick={handleReplacePlan}
          onDismissClick={handleDismissReplacePlan}
          existingPlan={existingPlan}
          selectedPlan={selectedPlan}
        />
      )}
      <div className="subscriptionPlans">
        {planData.map((data, index) => (
          <SubPlan
            key={index}
            planData={data}
            onAddToCart={handleAddToCart}
            existingPlan={existingPlan}
          />
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;
