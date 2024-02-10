import "./displayProductCard.scss";

const DisplayProductCard = ({
  BeatArtwork,
  itemTitle,
  itemQuantity,
  itemType,
  itemTypeTitle,
  itemLikes,
  itemComments,
  itemPlays,
  itemDownloads,
}) => {
  const lowercaseItemType = itemType.toLowerCase();
  const isBeat = lowercaseItemType === "beat";

  return (
    <div className="card">
      <img src={BeatArtwork} alt="beatArtwork" className="beatArtwork" />
      <div className="info">
        <div className="title-info">
          <h2>{itemTitle}</h2>
          <span>
            {itemQuantity} {itemTypeTitle}
          </span>
        </div>
        <div className="stats">
          {isBeat && (
            <>
              <div className="stat">
                <i className="fa-regular fa-heart _item"></i>
                <span className="_item">{itemLikes}</span>
                <span className="_item bolding">Likes</span>
              </div>
              <div className="stat">
                <i className="fa-regular fa-comment _item"></i>
                <span className="_item">{itemComments}</span>
                <span className="_item bolding">Comments</span>
              </div>
              <div className="stat">
                <i className="fa-solid fa-play _item"></i>
                <span className="_item">{itemPlays}</span>
                <span className="_item bolding">Plays</span>
              </div>
              <div className="stat">
                <i className="fa-solid fa-download _item"></i>
                <span className="_item">{itemDownloads}</span>
                <span className="_item bolding">Downloads</span>
              </div>
            </>
          )}
          {!isBeat && (
            <>
              <div className="stat">
                <i className="fa-regular fa-heart _item"></i>
                <span className="_item">{itemLikes}</span>
                <span className="_item bolding">Likes</span>
              </div>
              <div className="stat">
                <i className="fa-solid fa-download _item"></i>
                <span className="_item">{itemDownloads}</span>
                <span className="_item bolding">Downloads</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayProductCard;
