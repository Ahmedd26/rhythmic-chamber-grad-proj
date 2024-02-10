import "./licenses.scss";
import LicenseCard from "./licensesComponents/LicenseCard";
import { useState } from "react";

const Licences = () => {
  const licenseData = [
    {
      title: "Exclusive",
      price: "300",
      category: "Exclusive",
      sellingPrice: "500",
      provide: ["MP3", "WAV", "Stems"],
    },
    {
      title: "Premium",
      price: "200",
      category: "Regular",
      sellingPrice: "400",
      provide: ["MP3", "WAV", "Stems"],
    },
    {
      title: "Pro",
      price: "150",
      category: "Regular",
      sellingPrice: "300",
      provide: ["MP3", "WAV"],
    },
    {
      title: "Free",
      price: "0",
      category: "Regular",
      sellingPrice: "0",
      provide: ["MP3"],
    },
  ];

  const [selectedLicenses, setSelectedLicenses] = useState([]);
  const [addedToCart, setAddedToCart] = useState([]);

  const handlePurchaseClick = (selectedLicense) => {
    setSelectedLicenses((prevSelectedLicenses) => [
      ...prevSelectedLicenses,
      selectedLicense,
    ]);

    setAddedToCart((prevAddedToCart) => [
      ...prevAddedToCart,
      selectedLicense.title,
    ]);

    // Add license data to local storage
    localStorage.setItem(
      "licenseData",
      JSON.stringify([...selectedLicenses, selectedLicense])
    );
    console.log("License data added to local storage:", selectedLicense);
  };

  return (
    <div className="container">
      <div className="licensesPageContainer">
        <h1 className="licenseHeading">Licenses</h1>
        <div className="licensesContainer">
          {licenseData.map((license) => (
            <LicenseCard
              key={license.title}
              title={license.title}
              price={license.price}
              category={license.category}
              sellingPrice={license.sellingPrice}
              provide={license.provide}
              isSelected={selectedLicenses.some(
                (selectedLicense) => selectedLicense.title === license.title
              )}
              onPurchaseClick={() => handlePurchaseClick(license)}
              addedToCart={addedToCart.includes(license.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Licences;
