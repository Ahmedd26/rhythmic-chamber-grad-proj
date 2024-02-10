import "./plan.scss";
import React from "react";

const SubPlan = ({ planData, onAddToCart, existingPlan }) => {
  const { title, price, duration, features, services } = planData;

  const handleAddToCart = () => {
    const cartData = {
      title,
      price,
      duration,
    };

    if (existingPlan) {
      // Display the ReplacePlan component
      onAddToCart(cartData);
    } else {
      // Store the cart data in local storage
      localStorage.setItem("cartData", JSON.stringify(cartData));

      // Call the parent component's onAddToCart function
      onAddToCart(cartData);
      console.log("Plan added to cart!");
    }
  };
  return (
    <div className="wholePlan">
      <div className="planContainer">
        <div className="planTopSection">
          <h1 className="planTitle">{title}</h1>
          <div className="planPrice">
            <span className="pPrice">{price}</span>
            <span className="pDuration">{duration}</span>
          </div>
        </div>
        <div className="planMidSection">
          <h1 className="featuresTitle">Features</h1>
          <ul className="featuresBullets">
            {features.map((feature, index) => (
              <li className="featureBullet" key={index}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="planBottomSection">
          <h1 className="afterSale">After Sale Services</h1>
          <ul className="servicesBullets">
            {services.map((service, index) => (
              <React.Fragment key={index}>
                <li className="serviceBullet">{service}</li>
                {index !== services.length - 1 && <span>-</span>}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
      <button className="addPlanToCartButton" onClick={handleAddToCart}>
        <i className="fa-solid fa-cart-plus addPlanToCartIcon"></i>
        <span className="addPlanToCartText">Add To Cart</span>
      </button>
    </div>
  );
};

export default SubPlan;
