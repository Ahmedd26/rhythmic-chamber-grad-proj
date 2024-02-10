import React, { useState } from "react";
import "./basicInfo.scss";
import BeatArtwork from "../../../../../assets/images/BeatImage.png";
import Select from "react-select";

const typeTitles = [
  { value: "beat", label: "Beat" },
  { value: "instrumental", label: "Instrumental" },
  { value: "vocals", label: "Vocals" },
  { value: "drum-kit", label: "Drum-kit" },
  { value: "loop-kit", label: "Loop-kit" },
  { value: "vocal-pack", label: "Vocal pack" },
  { value: "sample-pack", label: "Sample pack" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: "1px solid #fcb14b",
    outline: "none",
    backgroundColor: "#232323",
    color: "#fcb14b",
    width: "100%",
    "&:hover": {
      outline: "none",
    },
    "&:focus": {
      border: "none",
      boxShadow: "none",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#fcb14b" : "#101010",
    color: state.isFocused ? "#101010" : "#fcb14b",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "green",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    backgroundColor: "#333",
    color: "#fcb14b",
    borderRadius: 0,
    padding: "2px 8px",
  }),
  multiValueRemove: (provided, state) => ({
    ...provided,
    borderRadius: 0,
    backgroundColor: "#101010",
    color: "#fcb14b",
    cursor: "pointer",
    ":hover": {
      color: "#101010",
      backgroundColor: "#fcb14b",
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: "#fcb14b",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#fcb14b",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#fcb14b",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#101010",
  }),
};

const BasicInfo = ({
  prevClick,
  nextClick,
  data,
  onTitleChange,
  onDescription,
  onImageChange,
  onTypeChange,
  onReleaseDate,
}) => {
  // Handle Image
  const [isValidImage, setIsValidImage] = useState(true);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const img = new Image();

      img.onload = function () {
        const { width, height } = img;
        const aspectRatio = width / height;
        if (Math.abs(aspectRatio - 1 / 1) > 0.01) {
          setIsValidImage(false);
          console.log("False");
        } else {
          setIsValidImage(true);
          onImageChange(reader.result);
          console.log("True");
        }
      };

      if (file) {
        img.src = URL.createObjectURL(file);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  // Handle Title
  const handleTitleChange = (event) => {
    const { value } = event.target;
    onTitleChange(value);
  };
  // Handle Description
  const handleDescriptionChange = (event) => {
    const { value } = event.target;
    onDescription(value);
  };
  // Handle Type
  const handleTypeChange = (selectedOptions) => {
    onTypeChange(selectedOptions);
  };
  // Handle Release Date
  const handleReleaseDateChange = (event) => {
    const { value } = event.target;
    onReleaseDate(value);
  };

  return (
    <div className="basicInfoStep">
      <h1 className="basicInfoHeading">Basic Information</h1>
      <div className="mainBasicStepContainer">
        <div className="leftRightContainer">
          <div className="leftImageContainer">
            <label htmlFor="uploadArtwork" className="uploadArtworkLabel">
              <img
                src={data.productArtwork || BeatArtwork}
                alt="Artwork"
                className="imagePreview"
              />
              <input
                type="file"
                accept="image/*"
                id="uploadArtwork"
                onChange={handleFileChange}
              />
              <div className="uploadArtworkButton">
                {isValidImage && (
                  <i className="fa-solid fa-angles-up upIco"></i>
                )}

                {isValidImage ? (
                  <h3 className="uploadArtworkButtonText">Upload Artwork</h3>
                ) : (
                  <h3 className="uploadArtworkButtonError">
                    Please upload another image with aspect ratio 1:1
                  </h3>
                )}
              </div>
            </label>
          </div>
          <div className="rightInputsContainer">
            <div className="titleAndDescContainer">
              <label htmlFor="">Title</label>
              <input
                type="text"
                value={data.title}
                onChange={handleTitleChange}
              />
            </div>
            <div className="typeAndReleaseDateContainer">
              <div className="typeRelease">
                <label htmlFor="">Type</label>
                <Select
                  isMulti
                  name="typeTitles"
                  options={typeTitles}
                  styles={customStyles}
                  className="basic-multi-select"
                  classNamePrefix="select"
                  value={typeTitles.filter((option) =>
                    data.type.includes(option.value)
                  )}
                  onChange={handleTypeChange}
                />
              </div>
              <div className="typeRelease">
                <label htmlFor="">Release Date</label>
                <input
                  type="date"
                  value={data.releaseDate}
                  onChange={handleReleaseDateChange}
                />
              </div>
            </div>
            <div className="titleAndDescContainer">
              <label htmlFor="">Description</label>
              <textarea
                value={data.description}
                onChange={handleDescriptionChange}
              ></textarea>
            </div>
          </div>
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

export default BasicInfo;
