import React from "react";
import "./fileUploadComponent.scss";
const FileUploadComponent = ({
  title,
  info,
  icoClass,
  handleAudioFileChange,
}) => {
  // const handleFileInputChange = (event) => {
  //   const file = event.target.files[0];
  //   // Pass the selected audio file to the parent component
  //   handleAudioFileChange(file);
  // };

  return (
    <div className="uploadFileCard">
      <div className="uploadFileCardLeft">
        <i className={`${icoClass} leftIco`}></i>
        <div className="audioCardText">
          <h3>{title}</h3>
          <p>{info}</p>
        </div>
      </div>
      <div className="uploadFileCardRight">
        <input
          type="file"
          accept="Audio"
          id="untaggedAudio"
          className="hideAudioInput"
          // onChange={handleFileInputChange}
        />
        <label htmlFor="untaggedAudio" className="uploadBtn">
          <i className="fa-solid fa-arrow-up-from-bracket labelIco"></i>
          <span>Upload</span>
        </label>
      </div>
    </div>
  );
};

export default FileUploadComponent;
