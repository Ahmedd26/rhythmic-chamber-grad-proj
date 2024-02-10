import ProfileAside from "../../components/profileAside/ProfileAside";
import ProfileProductHolder from "../../components/profileProductHolder/ProfileProductHolder";
import "./profile.scss";
import BeatArtwork from "../../assets/images/BeatImage.png";
import PackArtwork from "../../assets/images/packImage.jpg";

const UserProfile = () => {
  const BeatCardInfo = {
    BeatArtwork: BeatArtwork,
    itemTitle: "Love Scars",
    itemQuantity: "120",
    itemType: "Beat",
    itemTypeTitle: "BPM",
    itemLikes: "150",
    itemComments: "20",
    itemPlays: "51",
    itemDownloads: "12",
  };
  const PackCardInfo = {
    BeatArtwork: PackArtwork,
    itemTitle: "Sound Hack",
    itemQuantity: "20",
    itemType: "Pack",
    itemTypeTitle: "Sound Pack",
    itemLikes: "150",
    itemPlays: "51",
    itemComments: "20",
    itemDownloads: "12",
  };
  return (
    <div className="container">
      <div className="userProfile">
        <ProfileAside />
        <div className="main">
          <ProfileProductHolder
            productHolderTitle="Beats"
            cardInfo={BeatCardInfo}
          />
          <ProfileProductHolder
            productHolderTitle="Sound Kits"
            cardInfo={PackCardInfo}
          />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

// After API Implementation
/*
import React, { useEffect, useState } from 'react';
import ProfileAside from '../../components/profileAside/ProfileAside';
import ProfileProductHolder from '../../components/profileProductHolder/ProfileProductHolder';
import './profile.scss';

const UserProfile = () => {
  const [beatCardInfo, setBeatCardInfo] = useState(null);
  const [packCardInfo, setPackCardInfo] = useState(null);

  useEffect(() => {
    // Fetch beat card info from API
    fetch('api/beatCardInfo')
      .then(response => response.json())
      .then(data => setBeatCardInfo(data))
      .catch(error => console.log(error));

    // Fetch pack card info from API
    fetch('api/packCardInfo')
      .then(response => response.json())
      .then(data => setPackCardInfo(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container">
      <div className="userProfile">
        <ProfileAside />
        <div className="main">
          {beatCardInfo && (
            <ProfileProductHolder
              productHolderTitle="Beats"
              cardInfo={beatCardInfo}
            />
          )}
          {packCardInfo && (
            <ProfileProductHolder
              productHolderTitle="Sound Kits"
              cardInfo={packCardInfo}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
*/
