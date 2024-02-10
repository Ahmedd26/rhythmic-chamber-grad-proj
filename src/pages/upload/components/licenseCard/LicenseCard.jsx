import React, { useEffect, useState } from "react";
import "./licenseCard.scss";

const LicenseCard = ({ license, selectedLicenses, onLicenseToggle }) => {
  const [toggler, setToggler] = useState(false);
  const [showPrice, setShowPrice] = useState(false);

  useEffect(() => {
    setToggler(selectedLicenses.some((l) => l.id === license.id));
  }, [selectedLicenses, license.id]);

  const handleToggling = () => {
    setToggler((prevValue) => !prevValue);
    onLicenseToggle(license);
  };

  useEffect(() => {
    setShowPrice(toggler);
  }, [toggler]);

  return (
    <div className={`${toggler ? "chosenLicense" : ""} uploadLicenseCard`}>
      <div className="uploadLicenseCardLeft">
        <div
          onClick={handleToggling}
          className={`${toggler ? "togglerOn" : "togglerOff"} onOffSwitch`}
        >
          <span className="toggler"></span>
        </div>
        <div className="uploadLicenseCardLeftInfo">
          <h2>{license.title}</h2>
          <p>{license.provide.join(", ")}</p>
        </div>
      </div>
      <div className="uploadLicenseCardRight">
        {showPrice ? (
          <>
            <span className="uploadLicenseCardRightPrice">Selling price:</span>
            <span className="uploadLicenseCardRightValue">
              {license.sellingPrice} EGP
            </span>
          </>
        ) : (
          <>
            <span className="uploadLicenseCardRightGuide">
              Click the button to Choose the License
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default LicenseCard;
