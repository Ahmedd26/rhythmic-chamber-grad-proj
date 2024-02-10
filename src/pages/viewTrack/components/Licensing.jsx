import React, { useState } from "react";
import "./licensing.scss";
import LicenseInstance from "./LicenseInstance";

const Licensing = ({ licenseData, setSelectedSellingPrice }) => {
  const [selectedLicense, setSelectedLicense] = useState(null);

  const handleLicenseClick = (licenseData) => {
    if (
      selectedLicense &&
      selectedLicense.sellingPrice === licenseData.sellingPrice
    ) {
      setSelectedLicense(null);
      setSelectedSellingPrice(null);
    } else {
      setSelectedLicense(licenseData);
      setSelectedSellingPrice(licenseData.sellingPrice);
    }
  };

  // Calculate the total price based on the selected license
  const totalPrice = selectedLicense
    ? `${selectedLicense.sellingPrice} EGP`
    : "No selection";

  return (
    <div className="licensingComponent">
      <div className="licensingComponentHeader">
        <h1 className="licensingHeading">Licensing</h1>
        <div className="licensingHeadingLeft">
          <div className="productPrice">
            <span>Total</span>
            <span className="price">{totalPrice}</span>
          </div>
          <div className="addToCartSection">
            <div className="addToCartButton">
              <i className="fa-solid fa-cart-plus"></i>
            </div>
            <p className="addToCartText">Add to Cart</p>
          </div>
        </div>
      </div>
      <div className="licensingComponentLicensesContainer">
        {licenseData.licenses.map((data) => (
          <LicenseInstance
            licenseTitle={data.licenseTitle}
            provide={data.provide.join(", ")}
            sellingPrice={data.sellingPrice}
            selected={
              selectedLicense &&
              selectedLicense.sellingPrice === data.sellingPrice
            }
            onClick={handleLicenseClick}
            licenseData={data}
          />
        ))}
      </div>
      {selectedLicense ? (
        <div className="selectedLicenseFeatures">
          <h3 className="featuresTitle">Selected License Features:</h3>
          <ul className="featuresList">
            {selectedLicense.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="selectMessage">
          <h1 className="pleaseSelectHeading">Please select a license</h1>
        </div>
      )}
    </div>
  );
};

export default Licensing;
