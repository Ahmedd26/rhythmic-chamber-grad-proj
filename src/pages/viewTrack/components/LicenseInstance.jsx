import React from "react";
import "./licenseInstance.scss";
const LicenseInstance = ({
  licenseTitle,
  provide,
  sellingPrice,
  selected,
  onClick,
  licenseData,
}) => {
  const handleClick = () => {
    onClick(licenseData);
  };

  return (
    <div
      className={`licenseInstanceComponent ${
        selected ? "selectedLicense" : ""
      }`}
      onClick={handleClick}
    >
      <h1 className="licenseInstanceHeading">{licenseTitle}</h1>
      <div className="licenseInstanceComponentInfo">
        <span className="licenseInstanceComponentProvide">{provide}</span>
        <span className="licenseInstanceComponentPrice">
          {sellingPrice} EGP
        </span>
      </div>
    </div>
  );
};

export default LicenseInstance;
