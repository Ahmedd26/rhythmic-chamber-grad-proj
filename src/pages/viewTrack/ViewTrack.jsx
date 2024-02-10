import React, { useState } from "react";
import "./viewTrack.scss";
import artwork from "../../assets/images/BeatImage.png";
import ViewTrackAside from "./components/ViewTrackAside";
import Licensing from "./components/Licensing";
import Track from "./track.wav";

function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
const ViewTrack = () => {
  const asideData = {
    artwork: artwork,
    productTitle: "Love Scars",
    productAuthor: "Blind For Love",
    isFreeDownload: false,
    plays: "500",
    likes: "87",
    comments: "54",
    downloads: "542",
    publishDate: "Feb 24, 2023",
    BPM: "169",
    key: "G",
    scale: "minor",
    genre: "r&b",
    tagsData: ["R&B", "HipHop", "Soulful Trap"],
  };
  const licenseData = {
    licenses: [
      {
        licenseTitle: "Regular License",
        provide: ["MP3"],
        sellingPrice: "150",
        features: [
          "Used for music recording",
          "Distribute up to 100 copies",
          "500 Online Audio Streams",
          "No Music Video",
          "For Profit Live Performances",
          "Radio Broadcasting rights (0 Stations)",
        ],
      },
      {
        licenseTitle: "Basic License",
        provide: ["MP3", "WAV"],
        sellingPrice: "350",
        features: [
          "Used for music recording",
          "Distribute up to 1000 copies",
          "5000 Online Audio Streams",
          "1 Music Video",
          "For Profit Live Performances",
          "Radio Broadcasting rights (2 Stations)",
        ],
      },
      {
        licenseTitle: "Premium License",
        provide: ["MP3", "WAV", "Track Stems"],
        sellingPrice: "500",
        features: [
          "Used for music recording",
          "Distribute up to 30,000 copies",
          "500000 Online Audio Streams",
          "5 Music Video",
          "For Profit Live Performances",
          "Radio Broadcasting rights (5 Stations)",
        ],
      },
    ],
  };
  const [selectedSellingPrice, setSelectedSellingPrice] = useState("");
  console.log(selectedSellingPrice);

  return (
    <div className="container">
      <div className="viewTrackComponent">
        <ViewTrackAside
          artwork={artwork}
          productTitle={capitalizeFirstLetter(asideData.productTitle)}
          productAuthor={capitalizeFirstLetter(asideData.productAuthor)}
          isFreeDownload={false}
          plays={asideData.plays}
          likes={asideData.likes}
          comments={asideData.comments}
          downloads={asideData.downloads}
          publishDate={capitalizeFirstLetter(asideData.publishDate)}
          BPM={asideData.BPM}
          key={asideData.key.toUpperCase()}
          scale={capitalizeFirstLetter(asideData.scale)}
          genre={asideData.genre.toUpperCase()}
          tagsData={asideData.tagsData}
        />
        <div className="viewTrackLeftContent">
          <div className="audioPlayerPlaceHolder">
            <audio src={Track} controls className="audio"></audio>
          </div>
          <Licensing
            licenseData={licenseData}
            setSelectedSellingPrice={setSelectedSellingPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewTrack;
