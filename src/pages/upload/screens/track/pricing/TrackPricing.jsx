import LicenseCard from "../../../components/licenseCard/LicenseCard";
import "./trackPricing.scss";
const TrackPricing = ({
  prevClick,
  nextClick,
  licenseData,
  uploadTrackFormData,
  setUploadTrackFormData,
}) => {
  const handleLicenseToggle = (license) => {
    setUploadTrackFormData((prevFormData) => {
      const selectedLicenses = prevFormData.licenses.slice();
      const licenseIndex = selectedLicenses.findIndex(
        (l) => l.id === license.id
      );

      if (licenseIndex === -1) {
        selectedLicenses.push(license);
      } else {
        selectedLicenses.splice(licenseIndex, 1);
      }

      return { ...prevFormData, licenses: selectedLicenses };
    });
  };

  return (
    <div className="trackPricingStep">
      <h1 className="trackPricingHeading">Pricing</h1>
      <div className="mainTrackPricingContainer">
        <div className="mainTrackPricingContent">
          <h1 className="specialPricingHeading">Licensing</h1>
          {licenseData.map((license) => (
            <LicenseCard
              key={license.id}
              license={license}
              selectedLicenses={uploadTrackFormData.licenses}
              onLicenseToggle={handleLicenseToggle}
            />
          ))}
        </div>
        <div className="navigationButtonsContainer">
          <button className="navBtn" onClick={prevClick}>
            Previous
          </button>
          <button className="navBtn" onClick={nextClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackPricing;
