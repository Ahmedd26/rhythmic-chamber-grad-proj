// import { useState } from "react";
import "./licenseCard.scss";

const LicenseCard = ({
  title,
  price,
  category,
  sellingPrice,
  provide,
  isSelected,
  onPurchaseClick,
  addedToCart,
}) => {
  const provideList = Array.isArray(provide) ? provide : [];

  const handlePurchaseClick = () => {
    if (onPurchaseClick) {
      onPurchaseClick({ title, price, category, sellingPrice, provide });
    }
  };

  return (
    <div className="licenseCard">
      <div className="licenseCardTop">
        <h1 className="licenseTitle">{title}</h1>
        <span className="licensePrice">{price} EGP</span>
      </div>
      <div className="licenseCardBottom">
        <ul className="licenseInfo">
          <li>{category}</li>
          <li>{sellingPrice} EGP</li>
          <li>{provideList.join(", ")}</li>
        </ul>
        <button
          className={` ${
            addedToCart ? "addedToCartButton" : "purchaseLicense"
          }`}
          disabled={addedToCart}
          onClick={onPurchaseClick}
        >
          {addedToCart ? "Added to your Cart" : "Purchase License"}
        </button>
      </div>
    </div>
  );
};

export default LicenseCard;
