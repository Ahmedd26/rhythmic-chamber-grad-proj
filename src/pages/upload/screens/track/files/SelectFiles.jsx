import React from "react";
import "./selectFiles.scss";
import { useNavigate } from "react-router-dom";
const SelectFiles = ({
  nextClick,
  data,
  untaggedAudioFile,
  zipFile,
  taggedAudioFile,
}) => {
  const navigate = useNavigate();
  const handleNavBack = () => {
    navigate("/profile/upload");
  };

  const handleUntaggedAudioFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      // Process the file content
      untaggedAudioFile(file); // Set the uploaded file
    };

    reader.readAsDataURL(file);
  };
  // Handle Zip File
  const handleZipFileChange = (event) => {
    const file = event.target.files[0];
    zipFile(file);
  };

  // Handle Tagged Audio File
  const handleTaggedAudioFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      // const fileContent = event.target.result;
      // Process the file content

      taggedAudioFile(file); // Set the uploaded file name
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="selectFilesStep">
      <h1 className="filesStepHeading">Files</h1>
      <div className="mainSelectFilesContainer">
        <h2 className="sectionTitle">Audio files for download</h2>
        <div className="uploadFilesContainer">
          {/* Untagged Audio File */}
          <div className="uploadFileCard">
            <div className="uploadFileCardLeft">
              <i className="fa-solid fa-music leftIco"></i>
              <div className="audioCardText">
                <h3>Un-tagged audio</h3>
                <p>untagged audio file "Mp3 or WAV"</p>
              </div>
            </div>
            <div className="uploadFileCardRight">
              {data.unTaggedAudioFile && (
                <div className="uploadFileCardINFO">
                  <h3 className="uploadedFileName">Uploaded File Name</h3>
                  <p className="audioFileName">{data.unTaggedAudioFile.name}</p>
                  <div className="audioPlayerContainer">
                    <audio
                      src={URL.createObjectURL(data.unTaggedAudioFile)}
                      controls
                    ></audio>
                  </div>
                </div>
              )}

              <div className="uploadButtonContainer">
                <input
                  type="file"
                  accept="audio/*"
                  id="untaggedAudio"
                  className="hideAudioInput"
                  onChange={handleUntaggedAudioFileChange}
                />
                <label htmlFor="untaggedAudio" className="uploadBtn">
                  <i className="fa-solid fa-arrow-up-from-bracket labelIco"></i>
                  <span>Upload</span>
                </label>
              </div>
            </div>
          </div>
          {/* Zip File */}
          <div className="uploadFileCard">
            <div className="uploadFileCardLeft">
              <i className="fa-regular fa-file-zipper leftIco"></i>
              <div className="audioCardText">
                <h3>Track Stems</h3>
                <p>Upload .zip or .rar files only</p>
              </div>
            </div>
            <div className="uploadFileCardRight">
              {data.zipFile && (
                <div className="uploadFileCardINFO">
                  <h3 className="uploadedFileName">Uploaded File Name</h3>
                  <a
                    href={URL.createObjectURL(data.zipFile)}
                    download={data.zipFile.name}
                  >
                    Download
                  </a>
                </div>
              )}
              <div className="uploadButtonContainer">
                <input
                  type="file"
                  accept=".zip, .rar"
                  id="zipFile"
                  className="hideAudioInput"
                  onChange={handleZipFileChange}
                />
                <label htmlFor="zipFile" className="uploadBtn">
                  <i className="fa-solid fa-arrow-up-from-bracket labelIco"></i>
                  <span>Upload</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <h2 className="sectionTitle">Audio files for Streaming</h2>
        <div className="uploadFilesContainer">
          <div className="uploadFileCard">
            <div className="uploadFileCardLeft">
              <i className="fa-solid fa-music leftIco"></i>
              <div className="audioCardText">
                <h3>Tagged audio</h3>
                <p>Tagged audio file for streaming & Free Download</p>
              </div>
            </div>
            <div className="uploadFileCardRight">
              {data.taggedAudioFile && (
                <div className="uploadFileCardINFO">
                  <h3 className="uploadedFileName">Uploaded File Name</h3>
                  <p className="audioFileName">{data.taggedAudioFile.name}</p>
                  <div className="audioPlayerContainer">
                    <audio
                      src={URL.createObjectURL(data.taggedAudioFile)}
                      controls
                    ></audio>
                  </div>
                </div>
              )}
              <div className="uploadButtonContainer">
                <input
                  type="file"
                  accept="audio/*"
                  id="taggedAudio"
                  className="hideAudioInput"
                  onChange={handleTaggedAudioFileChange}
                />
                <label htmlFor="taggedAudio" className="uploadBtn">
                  <i className="fa-solid fa-arrow-up-from-bracket labelIco"></i>
                  <span>Upload</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="navigationButtons">
          <button className="navigationBtn" onClick={handleNavBack}>
            Back
          </button>
          <button className="navigationBtn" onClick={nextClick}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectFiles;
