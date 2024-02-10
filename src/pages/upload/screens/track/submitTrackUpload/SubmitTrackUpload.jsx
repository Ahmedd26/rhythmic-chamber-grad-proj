import React from "react";
import "./submitTrackUpload.scss";
import beatImage from "../../../../../assets/images/BeatImage.png";
import Hashtag from "../../../../../components/hashtag/Hashtag";
const SubmitTrackUpload = ({ formSubmission, prevClick, data }) => {
  return (
    <div className="submitTrackUploadComponent">
      <h1 className="submitTrackUploadHeading">Review & Submit</h1>
      <div className="submitTrackUploadContainer">
        <div className="submitTrackUploadContent">
          <div className="uploadedFilesReview">
            <div className="uploadedFile">
              <div className="uploadedFileLeft">
                <div className="uploadedFileLeftTop">Untagged Audio File</div>
                <div className="uploadedFileLeftBottom">
                  {data.unTaggedAudioFile.name}
                </div>
              </div>
              <div className="uploadedFileRight">
                {data.unTaggedAudioFile !== "" && (
                  <audio
                    src={URL.createObjectURL(data.unTaggedAudioFile)}
                    controls
                  ></audio>
                )}
              </div>
            </div>
            <div className="uploadedFile">
              <div className="uploadedFileLeft">
                <div className="uploadedFileLeftTop">Zip File</div>
                <div className="uploadedFileLeftBottom">
                  {data.zipFile.name}
                </div>
              </div>
              <div className="uploadedFileRight">
                {data.zipFile !== "" && (
                  <a
                    href={URL.createObjectURL(data.zipFile)}
                    download={data.zipFile.name}
                  >
                    <i className="fa-regular fa-file-zipper"></i>
                  </a>
                )}
              </div>
            </div>
            <div className="uploadedFile">
              <div className="uploadedFileLeft">
                <div className="uploadedFileLeftTop">Untagged Audio File</div>
                <div className="uploadedFileLeftBottom">
                  {data.taggedAudioFile.name}
                </div>
              </div>
              <div className="uploadedFileRight">
                {data.taggedAudioFile !== "" && (
                  <audio
                    src={URL.createObjectURL(data.taggedAudioFile)}
                    controls
                  ></audio>
                )}
              </div>
            </div>
          </div>
          <div className="basicInfoReview">
            <div className="basicInfoReviewRight">
              <img
                src={data.productArtwork || beatImage}
                alt="uploaded-artwork"
              />
              <div className="releaseDateContainer">
                <h3 className="releaseDateTitle">Release Date</h3>
                <span className="releaseDateReview">{data.releaseDate}</span>
              </div>
            </div>
            <div className="basicInfoReviewLeft">
              <h1 className="basicInfoTrackTitle">{data.title}</h1>
              <div className="grid-container">
                <div className="grid-special-item grid-item">
                  <h3>Type</h3>
                  <div className="typesView">
                    {data.type.map((type) => (
                      <span className="typeView">{type}</span>
                    ))}
                  </div>
                </div>
                <div className="grid-item">
                  <h3>Key</h3>
                  <p>{data.key.label}</p>
                </div>
                <div className="grid-item">
                  <h3>Scale</h3>
                  <p>{data.scale.value}</p>
                </div>
              </div>
              <div className="grid-container">
                <div className="grid-item">
                  <h3>BPM</h3>
                  <p>{data.BPM}</p>
                </div>
                <div className="grid-item">
                  <h3>Scale</h3>
                  <p>{data.scale.value}</p>
                </div>
                <div className="grid-special-item grid-item">
                  <h3>Used instruments</h3>
                  <p>{data.usedInstruments}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="metadataReviewContainer">
            <div className="metadataReview">
              <h1 className="descTit">Description</h1>
              <div className="metadataDescription">{data.description}</div>
            </div>
          </div>
          <div className="tagsAndLinkReview">
            <div className="tagsReview">
              <Hashtag tag={data.tagOne} padding="0.5rem 2rem" />
              <Hashtag tag={data.tagTwo} padding="0.5rem 2rem" />
              <Hashtag tag={data.tagThree} padding="0.5rem 2rem" />
            </div>
            <div className="linkReview">
              <h3>Video Link</h3>
              <a
                href={data.videoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.videoLink}
              </a>
            </div>
          </div>
          <div className="LicensesReview">
            {data.licenses.map((data) => (
              <div className="licenseInstanceReview">
                <h1 className="licenseTitleReview">{data.title}</h1>
                <div className="licenseInfoReview">
                  <span>{data.provide.join(", ")}</span>
                  <span>{data.sellingPrice} EGP</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="navigationButtonsContainer">
          <button className="navBtn" onClick={prevClick}>
            Previous
          </button>
          <button className="navBtn" onClick={formSubmission}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitTrackUpload;
