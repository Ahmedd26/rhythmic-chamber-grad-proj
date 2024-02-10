import React, { useRef, useEffect, useState } from "react";
import "./card.scss";
import DefaultImage from "../../../assets/images/Mixing Services.jpg";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const LandingCard = ({
  image = "",
  title = "No title",
  author = "None",
  tempo = "None",
}) => {
  const imageSource = image || DefaultImage;
  const hasFallbackImage = !image;
  const [isTitleTooltipActive, setTitleTooltipActive] = useState(false);
  const [isAuthorTooltipActive, setAuthorTooltipActive] = useState(false);
  const [isTempoTooltipActive, setTempoTooltipActive] = useState(false);
  const titleRef = useRef(null);
  const authorRef = useRef(null);
  const tempoRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      const isTitleOverflowing =
        titleRef.current.scrollWidth > titleRef.current.clientWidth;
      setTitleTooltipActive(isTitleOverflowing && title.length > 10);
    }
    if (authorRef.current) {
      const isAuthorOverflowing =
        authorRef.current.scrollWidth > authorRef.current.clientWidth;
      setAuthorTooltipActive(isAuthorOverflowing && author.length > 10);
    }
    if (tempoRef.current) {
      const isTempoOverflowing =
        tempoRef.current.scrollWidth > tempoRef.current.clientWidth;
      setTempoTooltipActive(isTempoOverflowing && tempo.length > 10);
    }
  }, [title, author, tempo]);

  const CustomToolTip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#101010",
      color: hasFallbackImage ? "#808080" : "#fcb14b",
      fontSize: 14,
    },
  }));

  return (
    <div className="landingCard">
      <div className={`image ${hasFallbackImage ? "fallback-image" : ""}`}>
        <img src={imageSource} alt="artwork" />
      </div>
      <div className={`text ${hasFallbackImage ? "fallback-text" : ""}`}>
        <CustomToolTip title={isTitleTooltipActive ? title : ""}>
          <h3
            className={`title ${hasFallbackImage ? "fallback-title" : ""}`}
            ref={titleRef}
          >
            {title}
          </h3>
        </CustomToolTip>
        <div
          className={`landingCardInfo ${
            hasFallbackImage ? "fallback-info" : ""
          }`}
        >
          <CustomToolTip title={isAuthorTooltipActive ? author : ""}>
            <span
              className={`author ${hasFallbackImage ? "fallback-author" : ""}`}
              ref={authorRef}
            >
              {author}
            </span>
          </CustomToolTip>
          <CustomToolTip title={isTempoTooltipActive ? tempo : ""}>
            <span
              className={`tempo ${hasFallbackImage ? "fallback-tempo" : ""}`}
              ref={tempoRef}
            >
              {tempo}
            </span>
          </CustomToolTip>
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
