import React, { useState } from "react";
import "./trackMetaData.scss";
import Select from "react-select";
import PublicOffIcon from "@mui/icons-material/PublicOff";
const genreOptions = [
  "Hiphop",
  "Drill",
  "Pop",
  "Rock",
  "R&B",
  "EDM",
  "Country",
  "Jazz",
  "Reggae",
  "Classical",
  "Metal",
  "Funk",
  "Blues",
  "Soul",
  "Alternative",
  "Indie",
  "Punk",
  "Gospel",
  "Electronic",
  "Dance",
  "Techno",
  "House",
  "Dubstep",
  "Disco",
  "Folk",
  "Ska",
  "Experimental",
  "Acoustic",
  "Ambient",
  "World",
  "Latin",
  "Hip Hop",
  "Trap",
  "Drum and Bass",
  "Reggaeton",
  "Salsa",
  "K-Pop",
  "J-Pop",
  "Bollywood",
  "Soundtrack",
  "New Age",
  "Grunge",
  "Trip Hop",
  "Hard Rock",
  "Psychedelic",
  "Instrumental",
  "Opera",
  "Gospel",
  "Chillout",
  "Post-Rock",
];

const genreTitles = genreOptions.map((genre) => ({
  value: genre.toLowerCase().replace(/\s+/g, "-"),
  label: genre,
}));
const keyTitles = [
  {
    value: "C",
    label: "C",
  },
  {
    value: "C#",
    label: "C#",
  },
  {
    value: "D",
    label: "D",
  },
  {
    value: "D#",
    label: "D#",
  },
  {
    value: "E",
    label: "E",
  },
  {
    value: "F",
    label: "F",
  },
  {
    value: "F#",
    label: "F#",
  },
  {
    value: "G",
    label: "G",
  },
  {
    value: "G#",
    label: "G#",
  },
  {
    value: "A",
    label: "A",
  },
  {
    value: "A#",
    label: "A#",
  },
  {
    value: "B",
    label: "B",
  },
];
const scalesTitle = [
  { value: "Major", label: "Major" },
  { value: "Minor", label: "Minor" },
  { value: "Dorian", label: "Dorian" },
  { value: "Phrygian", label: "Phrygian" },
  { value: "Lydian", label: "Lydian" },
  { value: "Mixolydian", label: "Mixolydian" },
  { value: "Locrian", label: "Locrian" },
  { value: "Melodic Minor", label: "Melodic Minor" },
  { value: "Harmonic Minor", label: "Harmonic Minor" },
  { value: "Blues", label: "Blues" },
  { value: "Pentatonic", label: "Pentatonic" },
  { value: "Whole Tone", label: "Whole Tone" },
  { value: "Other", label: "Other" },
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
    backgroundColor: state.isFocused ? "#fcb14b" : "#232323",
    color: state.isFocused ? "#101010" : "#fcb14b",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#fcb14b",
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
    backgroundColor: "#232323",
  }),
};

// Main Component Start
const TrackMetaData = ({
  prevClick,
  nextClick,
  data,
  onTagOneChange,
  onTagTwoChange,
  onTagThreeChange,
  onGenreChange,
  onKeyChange,
  onScaleChange,
  onBPMChange,
  onUsedInstrumentsChange,
  onVideoLinkChange,
}) => {
  // Handling Inputs
  const handleTagOneChange = (event) => {
    const { value } = event.target;
    onTagOneChange(value);
  };
  const handleTagTwoChange = (event) => {
    const { value } = event.target;
    onTagTwoChange(value);
  };
  const handleTagThreeChange = (event) => {
    const { value } = event.target;
    onTagThreeChange(value);
  };
  const handleGenreChange = (selectedOptions) => {
    onGenreChange(selectedOptions);
  };
  const handleKeyChange = (selectedOptions) => {
    onKeyChange(selectedOptions);
  };
  const handleScaleChange = (selectedOptions) => {
    onScaleChange(selectedOptions);
  };
  // const handleBPMChange = (event) => {
  //   const { value } = event.target;
  //   onBPMChange(value);
  // };

  const handleBPMChange = (event) => {
    const { value } = event.target;
    onBPMChange(value);
  };

  const handleUsedInstrumentsChange = (event) => {
    const { value } = event.target;
    onUsedInstrumentsChange(value);
  };

  // const [isValidURL, setIsValidURL] = useState(true);
  // const handleVideoLinkBlur = () => {
  //   const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/i;
  //   const isValid = urlPattern.test(data.videoLink);
  //   setIsValidURL(isValid);
  //   if (isValid) {
  //     onVideoLinkChange(data.videoLink);

  //     console.log(onVideoLinkChange.videoLink);
  //     console.log(data.videoLink);
  //     console.log("videoLink");
  //   }
  // };
  // const handleVideoLinkChange = (event) => {
  //   onVideoLinkChange(event.target.value);
  // };
  const [isValidBPM, setIsValidBPM] = useState(true);

  const handleBPMBlur = () => {
    const numericValue = Number(data.BPM);
    const isValidTempo = !isNaN(numericValue);
    setIsValidBPM(isValidTempo);

    if (isValidTempo) {
      onBPMChange(numericValue);
    } else {
      onBPMChange("");
    }
  };
  const [videoLink, setVideoLink] = useState("");
  const [isValidURL, setIsValidURL] = useState(true);

  const handleVideoLinkChange = (event) => {
    const link = event.target.value;
    setVideoLink(link);
    const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/\S*)?$/i;
    const isValid = urlPattern.test(link);
    setIsValidURL(isValid);
    if (isValid) {
      onVideoLinkChange(link);
    } else {
      setVideoLink(link);
    }
  };
  return (
    <div className="metadataStep">
      <h1 className="metadataHeading">Metadata</h1>
      <div className="metadataStepContainer">
        <div className="mainMetaDataContent">
          <div className="section">
            <div className="specialHeading">
              <i className="fa-solid fa-compact-disc spHeadIco"></i>
              <h1 className="spHeadTxt">Track Details</h1>
            </div>
            <div className="inputItem">
              <label htmlFor="">Tags</label>
              <div className="tagInputs">
                <input
                  type="text"
                  className="tagInput"
                  placeholder="Tag 1"
                  value={data.tagOne}
                  onChange={handleTagOneChange}
                />
                <input
                  type="text"
                  className="tagInput"
                  placeholder="Tag 2"
                  value={data.tagTwo}
                  onChange={handleTagTwoChange}
                />
                <input
                  type="text"
                  className="tagInput"
                  placeholder="Tag 3"
                  value={data.tagThree}
                  onChange={handleTagThreeChange}
                />
              </div>
            </div>
            <div className="inputItem">
              <label htmlFor="">Genre</label>
              <Select
                onChange={handleGenreChange}
                value={genreTitles.filter((option) =>
                  data.genre.includes(option.value)
                )}
                isMulti
                name="genreTitles"
                options={genreTitles}
                styles={customStyles}
                className="basic-multi-select"
                classNamePrefix="select"
              />
              {/* <input type="text" name="" id="" /> */}
            </div>
          </div>
          <div className="section">
            <div className="specialHeading">
              <i className="fa-solid fa-music spHeadIco"></i>
              <h1 className="spHeadTxt">Musical Characteristics</h1>
            </div>
            <div className="threeInputHolder">
              <div className="secondInputItem">
                <label htmlFor="">Key</label>
                <Select
                  onChange={handleKeyChange}
                  value={data.key}
                  name="keyTitles"
                  options={keyTitles}
                  styles={customStyles}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </div>
              <div className="secondInputItem">
                <label htmlFor="">Scale</label>
                <Select
                  onChange={handleScaleChange}
                  value={data.scale}
                  name="scalesTitle"
                  options={scalesTitle}
                  styles={customStyles}
                  className="basic-multi-select"
                  classNamePrefix="select"
                />
              </div>
              <div className="secondInputItem">
                <label htmlFor="">BPM</label>
                <input
                  type="text"
                  className="bpmInp"
                  value={data.BPM}
                  onBlur={handleBPMBlur}
                  onChange={handleBPMChange}
                />
                {!isValidBPM && (
                  <div className="inValidURL">
                    <span className="errTxt">Please enter numeric value</span>
                    <PublicOffIcon className="errIco" />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="section">
            <div className="specialHeading">
              <i className="fa-solid fa-guitar spHeadIco"></i>
              <h1 className="spHeadTxt">Instruments</h1>
            </div>
            <div className="inputItem">
              <label htmlFor="">Used Instruments</label>
              <input
                type="text"
                value={data.usedInstruments}
                onChange={handleUsedInstrumentsChange}
                placeholder='example: "Guitar", "Violin", "Piano", etc'
              />
            </div>
          </div>
          <div className="section">
            <div className="specialHeading">
              <i className="fa-brands fa-youtube spHeadIco"></i>
              <h1 className="spHeadTxt">Video Link</h1>
            </div>
            <div className="inputItem">
              <label htmlFor="">Youtube URL</label>
              <input
                type="text"
                placeholder="https://www.example.domain/"
                // value={data.videoLink}
                // onChange={handleVideoLinkChange}
                // onBlur={handleVideoLinkBlur}
                value={videoLink}
                onChange={handleVideoLinkChange}
                // onBlur={handleVideoLinkBlur}
              />
              {!isValidURL && (
                <div className="inValidURL">
                  <span className="errTxt">Invalid URL</span>
                  <PublicOffIcon className="errIco" />
                </div>
              )}
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

export default TrackMetaData;
