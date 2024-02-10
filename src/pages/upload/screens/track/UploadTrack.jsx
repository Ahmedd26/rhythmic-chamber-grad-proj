import React, { useEffect, useState } from "react";
import "./uploadTrack.scss";
import SelectFiles from "./files/SelectFiles";
import BasicInfo from "./basicInfo/BasicInfo";
import TrackMetaData from "./metadata/TrackMetaData";
import TrackPricing from "./pricing/TrackPricing";
import SubmitTrackUpload from "./submitTrackUpload/SubmitTrackUpload";
const UploadTrack = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 39) {
        // Right arrow key
        handleNextStep();
      } else if (event.keyCode === 37) {
        // Left arrow key
        handlePrevStep();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const handleNextStep = () => {
    console.log("next!");
    if (step < 5) {
      setStep(step + 1);
    }
  };
  const handlePrevStep = () => {
    console.log("Prev!");
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const licenseData = [
    {
      id: 1,
      title: "Exclusive",
      price: "300",
      category: "Exclusive",
      sellingPrice: "500",
      provide: ["MP3", "WAV", "Stems"],
    },
    {
      id: 2,
      title: "Premium",
      price: "200",
      category: "Regular",
      sellingPrice: "400",
      provide: ["MP3", "WAV", "Stems"],
    },
    {
      id: 3,
      title: "Pro",
      price: "150",
      category: "Regular",
      sellingPrice: "300",
      provide: ["MP3", "WAV"],
    },
    {
      id: 4,
      title: "Free",
      price: "0",
      category: "Regular",
      sellingPrice: "0",
      provide: ["MP3"],
    },
  ];

  const [uploadTrackFormData, setUploadTrackFormData] = useState({
    unTaggedAudioFile: "",
    zipFile: "",
    taggedAudioFile: "",
    productArtwork: "",
    title: "",
    type: [],
    releaseDate: "",
    description: "",
    tagOne: "",
    tagTwo: "",
    tagThree: "",
    genre: "",
    key: "",
    scale: "",
    BPM: "",
    usedInstruments: "",
    videoLink: "",
    licenses: [],
  });
  // Handling Inputs:
  // Handling Select Files Step
  const handleUnTaggedAudioChange = (file) => {
    setUploadTrackFormData((prevState) => ({
      ...prevState,
      unTaggedAudioFile: file,
    }));
  };
  const handleZipFileChange = (zipFile) => {
    setUploadTrackFormData((prevState) => ({
      ...prevState,
      zipFile: zipFile,
    }));
  };
  const handleTaggedAudioChange = (taggedAudioFile) => {
    setUploadTrackFormData((prevState) => ({
      ...prevState,
      taggedAudioFile: taggedAudioFile,
    }));
  };
  // Handling Basic Info Step
  const handleTitleChange = (title) => {
    setUploadTrackFormData((prevState) => ({
      ...prevState,
      title: title,
    }));
  };
  const handleDescriptionChange = (description) => {
    setUploadTrackFormData((prevState) => ({
      ...prevState,
      description: description,
    }));
  };
  const handleImageChange = (image) => {
    setUploadTrackFormData((prevState) => ({
      ...prevState,
      productArtwork: image,
    }));
  };
  const handleTypeChange = (selectedOptions) => {
    const selectedTypeValues = selectedOptions.map((option) => option.value);
    setUploadTrackFormData((prevState) => ({
      ...prevState,
      type: selectedTypeValues,
    }));
  };
  const handleReleaseDateChange = (releaseDate) => {
    setUploadTrackFormData((prevState) => ({
      ...prevState,
      releaseDate: releaseDate,
    }));
  };
  // Handling Metadata Step
  const handleTagOneChange = (tagOne) => {
    setUploadTrackFormData((prevState) => ({
      ...prevState,
      tagOne: tagOne,
    }));
  };
  const handleTagTwoChange = (tagTwo) => {
    setUploadTrackFormData((prevState) => ({
      ...prevState,
      tagTwo: tagTwo,
    }));
  };
  const handleTagThreeChange = (tagThree) => {
    setUploadTrackFormData((prevState) => ({
      ...prevState,
      tagThree: tagThree,
    }));
  };
  const handleGenreChange = (selectedOptions) => {
    const selectedTypeValues = selectedOptions.map((option) => option.value);
    setUploadTrackFormData((prevState) => ({
      ...prevState,
      genre: selectedTypeValues,
    }));
  };
  const handleScaleChange = (scale) => {
    setUploadTrackFormData((prevState) => ({
      ...prevState,
      scale: scale,
    }));
  };
  const handleKeyChange = (key) => {
    setUploadTrackFormData((prevState) => ({
      ...prevState,
      key: key,
    }));
  };
  const handleBPMChange = (bpm) => {
    const bpmString = String(bpm);
    setUploadTrackFormData((prevState) => ({
      ...prevState,
      BPM: bpmString,
    }));
  };
  const handleUsedInstrumentsChange = (usedInstruments) => {
    setUploadTrackFormData((prevState) => ({
      ...prevState,
      usedInstruments: usedInstruments,
    }));
  };
  const handleVideoLinkChange = (videoLink) => {
    setUploadTrackFormData((prevState) => ({
      ...prevState,
      videoLink: videoLink,
    }));
  };
  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (uploadTrackFormData !== "") {
      console.log(uploadTrackFormData);
      console.log("DONE");
    } else {
      console.log("EMPTY");
    }
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="uploadTrackMainContainer">
        <h1 className="uploadTrackHeading">Upload Track</h1>
        <div className="trackUploadSteps">
          {step === 0 ? (
            <>
              {/* {window.scrollTo(0, 0)} */}
              <SelectFiles
                nextClick={handleNextStep}
                data={uploadTrackFormData}
                untaggedAudioFile={handleUnTaggedAudioChange}
                zipFile={handleZipFileChange}
                taggedAudioFile={handleTaggedAudioChange}
              />
            </>
          ) : step === 1 ? (
            <>
              {/* {window.scrollTo(0, 0)} */}
              <BasicInfo
                nextClick={handleNextStep}
                prevClick={handlePrevStep}
                data={uploadTrackFormData}
                onTitleChange={handleTitleChange}
                onDescription={handleDescriptionChange}
                onImageChange={handleImageChange}
                onTypeChange={handleTypeChange}
                onReleaseDate={handleReleaseDateChange}
              />
            </>
          ) : step === 2 ? (
            <>
              {/* {window.scrollTo(0, 0)} */}
              <TrackMetaData
                nextClick={handleNextStep}
                prevClick={handlePrevStep}
                data={uploadTrackFormData}
                onTagOneChange={handleTagOneChange}
                onTagTwoChange={handleTagTwoChange}
                onTagThreeChange={handleTagThreeChange}
                onGenreChange={handleGenreChange}
                onKeyChange={handleKeyChange}
                onScaleChange={handleScaleChange}
                onBPMChange={handleBPMChange}
                onUsedInstrumentsChange={handleUsedInstrumentsChange}
                onVideoLinkChange={handleVideoLinkChange}
              />
            </>
          ) : step === 3 ? (
            <>
              {/* {window.scrollTo(0, 0)} */}
              <TrackPricing
                nextClick={handleNextStep}
                prevClick={handlePrevStep}
                licenseData={licenseData}
                uploadTrackFormData={uploadTrackFormData}
                setUploadTrackFormData={setUploadTrackFormData}
              />
            </>
          ) : (
            <>
              {/* {window.scrollTo(0, 0)} */}
              <div className="submitUpload">
                <SubmitTrackUpload
                  formSubmission={handleSubmit}
                  prevClick={handlePrevStep}
                  data={uploadTrackFormData}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </form>
  );
};

export default UploadTrack;
