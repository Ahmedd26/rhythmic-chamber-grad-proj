import { Link } from "react-router-dom";
import "./upload.scss";
import React from "react";

const Upload = () => {
  return (
    <div className="container">
      <div className="upload">
        <h1 className="uploadHeading">What are you uploading?</h1>
        <div className="uploadMainContent">
          <div className="uploadCustomTitle">Type</div>
          <div className="mainUploadBody">
            <div className="mainUploadActionBtn">
              <Link to="track-upload" className="mainBtn">
                Tracks
              </Link>
              <Link to="pack-upload" className="mainBtn">
                Pack
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
