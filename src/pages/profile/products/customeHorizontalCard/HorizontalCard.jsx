import "./horizontalCard.scss";
import * as React from "react";
import Hashtag from "../../../../components/hashtag/Hashtag";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const HorizontalCard = ({
  prodId,
  artwork,
  title,
  author,
  info,
  tags,
  freeDownload,
  price,
}) => {
  // Dots Button
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const customMenuStyles = {
    backgroundColor: "#232323",
    color: "#fcb14b",
    fontSize: "14px",
    "&:hover": {
      backgroundColor: "#333",
    },
  };

  return (
    <div className="horizontalCard">
      <div className="horCardItemOne">{prodId}</div>
      <div className="horCardItemTwo">
        <img src={artwork} alt="beat-artwork" />
      </div>
      <div className="horCardItemThree">
        <h3 className="productTitle">{title}</h3>
        <div className="crdInf">
          <span className="info">{author}</span>
          <span className="info">{info}</span>
        </div>
      </div>
      <div className="horCardItemFour">
        {/* Return Only the first 3 tags - due to design specifications */}
        {tags.slice(0, 3).map((tag) => (
          <Hashtag tag={tag} padding="8px 16px" fz="16px" />
        ))}
      </div>
      <div className="horCardItemFive">
        {freeDownload ? (
          <div className="freeDownloadButton">
            <span>Free</span>
            <i className="fa-solid fa-download"></i>
          </div>
        ) : (
          <div className="freeDownloadButton">
            <i className="fa-solid fa-download"></i>
          </div>
        )}
      </div>
      <div className="horCardItemSix">
        <div className="addToCartButton">
          <div className="cartIco">
            <i className="fa-solid fa-cart-plus icon"></i>
            <p className="price">${price}</p>
          </div>
          <span>Add to cart</span>
        </div>
      </div>
      <div className="horCardItemSeven">
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              color: "#fcb14b",
            }}
          >
            <i className="fa-solid fa-ellipsis"></i>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem sx={customMenuStyles} onClick={handleClose}>
              View
            </MenuItem>
            <MenuItem sx={customMenuStyles} onClick={handleClose}>
              Remove
            </MenuItem>
            <MenuItem sx={customMenuStyles} onClick={handleClose}>
              Edit
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
