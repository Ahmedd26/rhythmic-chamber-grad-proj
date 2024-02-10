import React from "react";
import "./viewTrackAside.scss";
import Hashtag from "../../../components/hashtag/Hashtag";
const ViewTrackAside = ({
  artwork,
  productTitle,
  productAuthor,
  isFreeDownload,
  plays,
  likes,
  comments,
  downloads,
  publishDate,
  BPM,
  key,
  scale,
  genre,
  tagsData,
}) => {
  return (
    <div className="viewProductAsideContainer">
      <div className="sectionOne">
        <div className="imageWrapper">
          <img src={artwork} alt="Artwork" />
        </div>
        <div className="productHeading">
          <h1 className="productName">{productTitle}</h1>
          <p className="productAuthor">{productAuthor}</p>
        </div>
        {isFreeDownload && (
          <div className="freeDownloadButton">
            <span>Free Download</span>
            <i className="fa-solid fa-download"></i>
          </div>
        )}
      </div>
      <hr className="specialLine" />
      <div className="sectionTwo">
        <div className="productStat">
          <i className="fa-solid fa-play ProductStatIco"></i>
          <div className="productStatLeft">
            <span className="count">{plays}</span>
            <span className="title">Play</span>
          </div>
        </div>
        <div className="productStat">
          <i className="fa-solid fa-heart ProductStatIco"></i>
          <div className="productStatLeft">
            <span className="count">{likes}</span>
            <span className="title">Like</span>
          </div>
        </div>
        <div className="productStat">
          <i className="fa-solid fa-comment ProductStatIco"></i>
          <div className="productStatLeft">
            <span className="count">{comments}</span>
            <span className="title">Comment</span>
          </div>
        </div>
        <div className="productStat">
          <i className="fa-solid fa-download ProductStatIco"></i>
          <div className="productStatLeft">
            <span className="count">{downloads}</span>
            <span className="title">Download</span>
          </div>
        </div>
      </div>
      <hr className="specialLine" />
      <div className="sectionThree">
        <h3 className="sectionTitle">Information</h3>
        <div className="gridSys">
          <ul>
            <li>Published</li>
            <li>BPM</li>
            <li>Key & Scale</li>
            <li>Genre</li>
          </ul>

          <ul>
            <li>{publishDate}</li>
            <li>{BPM}</li>
            <li>
              {key} {scale}
            </li>
            <li>{genre}</li>
          </ul>
        </div>
      </div>
      <hr className="specialLine" />
      <div className="sectionFour">
        <h3 className="sectionTitle">Tags</h3>
        <div className="productTagsContainer">
          {tagsData.map((tag) => (
            <Hashtag tag={tag} padding="0.5rem 1rem" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewTrackAside;
