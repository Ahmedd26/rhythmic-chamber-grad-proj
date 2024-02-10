import "./promotionTypeStep.scss";
import PianoIcon from "@mui/icons-material/Piano";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TuneIcon from "@mui/icons-material/Tune";
import { useState } from "react";
const PromotionTypeStep = ({
  onCategoryOpen,
  nextStep,
  campaignData,
  setCampaignData,
}) => {
  const [isButtonClicked, setButtonClicked] = useState(false);
  // const handleBtnClickColor = () => {
  //   setButtonClicked((prev) => !prev);
  // };
  const handleBtnClickColor = (buttonId) => {
    setButtonClicked((prevActiveButton) => {
      if (prevActiveButton === buttonId) {
        return ""; // Remove the class if already active
      } else {
        return buttonId; // Add the class if not active
      }
    });
  };
  return (
    <div className="promotionTypeStep">
      <h1 className="typeSelectionHeading">What do you want to promote?</h1>
      <ul className="productCategory">
        <li>
          <div className="leftSide">
            <i className="fa-regular fa-user ico"></i>
            <span className="productCatName">Profile</span>
          </div>
          <button
            className={`rightSide ${
              isButtonClicked === "button1" ? "clickedBtn" : ""
            }`}
            onClick={() => {
              setCampaignData((prevData) => ({
                ...prevData,
                product: "profile",
              }));
              onCategoryOpen();
              handleBtnClickColor("button1");
            }}
          ></button>
        </li>
        <li>
          <div className="leftSide">
            <i className="fa-solid fa-headphones-simple ico"></i>
            <span className="productCatName">Track</span>
          </div>
          <button
            className={`rightSide ${
              isButtonClicked === "button2" ? "clickedBtn" : ""
            }`}
            onClick={(onCategoryOpen, () => handleBtnClickColor("button2"))}
          ></button>
        </li>
        <li>
          <div className="leftSide">
            <i className="fa-solid fa-drum ico"></i>
            <span className="productCatName">Drum-kit</span>
          </div>
          <button
            className={`rightSide ${
              isButtonClicked === "button3" ? "clickedBtn" : ""
            }`}
            onClick={(onCategoryOpen, () => handleBtnClickColor("button3"))}
          ></button>
        </li>
        <li>
          <div className="leftSide">
            <PianoIcon className="ico" />
            <span className="productCatName">One-shot pack</span>
          </div>
          <button
            className={`rightSide ${
              isButtonClicked === "button4" ? "clickedBtn" : ""
            }`}
            onClick={(onCategoryOpen, () => handleBtnClickColor("button4"))}
          ></button>
        </li>
        <li>
          <div className="leftSide">
            <GraphicEqIcon className="ico" />
            <span className="productCatName">Sample/Loop Pack</span>
          </div>
          <button
            className={`rightSide ${
              isButtonClicked === "button5" ? "clickedBtn" : ""
            }`}
            onClick={(onCategoryOpen, () => handleBtnClickColor("button5"))}
          ></button>
        </li>
        <li>
          <div className="leftSide">
            <TuneIcon className="ico" />
            <span className="productCatName">Mixing / Mastering Services</span>
          </div>
          <button
            className={`rightSide ${
              isButtonClicked === "button6" ? "clickedBtn" : ""
            }`}
            onClick={(onCategoryOpen, () => handleBtnClickColor("button6"))}
          ></button>
        </li>
      </ul>
      <div className="stepNavigation">
        <button className="nextStep" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PromotionTypeStep;
