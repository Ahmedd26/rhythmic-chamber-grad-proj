import "./products.scss";
import UserAvatar from "../../../assets/images/BeatImage.png";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import SpeedIcon from "@mui/icons-material/Speed";
import {
  genreOptions,
  typeOptions,
  scaleOptions,
  keyOptions,
} from "./filtersData";
import { cardData } from "./CardData";
import { Link } from "react-router-dom";
import HorizontalCard from "./customeHorizontalCard/HorizontalCard";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "#fcb14b" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "transparent",
  color: "#fcb14b",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid #fcb14b",
}));

// -------------- Component Start -------------------
const Products = () => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Accordion
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  // Filter state variables
  const [selectedGenres, setSelectedGenres] = React.useState([]);
  const [selectedTypes, setSelectedTypes] = React.useState([]);
  const [selectedScales, setSelectedScales] = React.useState([]);
  const [selectedKeys, setSelectedKeys] = React.useState([]);
  const [minPrice, setMinPrice] = React.useState("");
  const [maxPrice, setMaxPrice] = React.useState("");
  const [minBPM, setMinBPM] = React.useState("");
  const [maxBPM, setMaxBPM] = React.useState("");

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };
  const handleMinBPMChange = (event) => {
    setMinBPM(event.target.value);
  };

  const handleMaxBPMChange = (event) => {
    setMaxBPM(event.target.value);
  };
  // Event handlers for filter selection
  const handleGenreChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedGenres((prevSelectedGenres) => [...prevSelectedGenres, value]);
    } else {
      setSelectedGenres((prevSelectedGenres) =>
        prevSelectedGenres.filter((genre) => genre !== value)
      );
    }
  };

  const handleTypeChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedTypes((prevSelectedTypes) => [...prevSelectedTypes, value]);
    } else {
      setSelectedTypes((prevSelectedTypes) =>
        prevSelectedTypes.filter((type) => type !== value)
      );
    }
  };

  const handleScaleChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedScales((prevSelectedScales) => [...prevSelectedScales, value]);
    } else {
      setSelectedScales((prevSelectedScales) =>
        prevSelectedScales.filter((scale) => scale !== value)
      );
    }
  };

  const handleKeyChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedKeys((prevSelectedKeys) => [...prevSelectedKeys, value]);
    } else {
      setSelectedKeys((prevSelectedKeys) =>
        prevSelectedKeys.filter((key) => key !== value)
      );
    }
  };

  // Filter the cardData based on selected filter values
  const filteredData = cardData.filter((card) => {
    // Genre
    const genreMatch =
      selectedGenres.length === 0 ||
      selectedGenres.includes(card.genre.toLowerCase());
    // Type
    const typeMatch =
      selectedTypes.length === 0 ||
      selectedTypes.includes(card.type.toLowerCase());
    // Scale
    const scaleMatch =
      selectedScales.length === 0 ||
      selectedScales.includes(card.scale.toLowerCase());
    // Key
    const keyMatch =
      selectedKeys.length === 0 ||
      selectedKeys.includes(card.key.toLowerCase());
    // Price
    const priceMatch =
      (minPrice === "" && maxPrice === "") ||
      (minPrice !== "" &&
        maxPrice === "" &&
        card.price >= parseInt(minPrice)) ||
      (minPrice === "" &&
        maxPrice !== "" &&
        card.price <= parseInt(maxPrice)) ||
      (minPrice !== "" &&
        maxPrice !== "" &&
        card.price >= parseInt(minPrice) &&
        card.price <= parseInt(maxPrice));
    // BPM
    const BPMMatch =
      (minBPM === "" && maxBPM === "") ||
      (minBPM !== "" && maxBPM === "" && card.BPM >= parseInt(minBPM)) ||
      (minBPM === "" && maxBPM !== "" && card.BPM <= parseInt(maxBPM)) ||
      (minBPM !== "" &&
        maxBPM !== "" &&
        card.BPM >= parseInt(minBPM) &&
        card.BPM <= parseInt(maxBPM));
    return (
      genreMatch &&
      typeMatch &&
      scaleMatch &&
      keyMatch &&
      priceMatch &&
      BPMMatch
    );
  });

  return (
    <div className="container">
      <div className="products">
        <aside className="filters">
          <Link to="/profile" className="top">
            <div className="tl">
              <img src={UserAvatar} alt="user-avatar" />
            </div>
            <div className="tr">
              <h1>Mr Beats</h1>
              <span>Music Producer</span>
            </div>
          </Link>
          <hr />
          <h1 className="filtersHeading">Filters</h1>
          <hr />
          {/* Accordions */}
          <div>
            {/* Genre */}
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography className="filterTitle">
                  <i className="fa-solid fa-headphones"></i>
                  <span className="filterName">Genre</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {genreOptions.map((genre) => (
                  <div className="productFilter" key={genre}>
                    <Checkbox
                      {...label}
                      checked={selectedGenres.includes(genre.toLowerCase())}
                      onChange={handleGenreChange}
                      value={genre.toLowerCase()}
                    />
                    <span className="productFilterType">
                      {capitalizeFirstLetter(genre)}
                    </span>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>

            <hr />
            {/* Product Type */}
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography className="filterTitle">
                  <i
                    className="fa-solid fa-tag"
                    style={{ transform: "scaleX(-1)" }}
                  ></i>
                  <span className="filterName">Product Type</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {typeOptions.map((type) => (
                  <div className="productFilter" key={type}>
                    <Checkbox
                      {...label}
                      checked={selectedTypes.includes(type.toLowerCase())}
                      onChange={handleTypeChange}
                      value={type.toLowerCase()}
                    />
                    <span className="productFilterType">
                      {capitalizeFirstLetter(type)}
                    </span>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
            <hr />
            {/* Price */}
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography className="filterTitle">
                  <i className="fa-solid fa-dollar-sign"></i>
                  <span className="filterName">Price</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="pt">
                  <div className="field">
                    <i className="fa-solid fa-dollar-sign dollarIco"></i>
                    <input
                      type="text"
                      value={minPrice}
                      onChange={handleMinPriceChange}
                    />
                  </div>
                  <div className="m">to</div>
                  <div className="field">
                    <i className="fa-solid fa-dollar-sign dollarIco"></i>
                    <input
                      type="text"
                      value={maxPrice}
                      onChange={handleMaxPriceChange}
                    />
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>

            <hr />
            {/* Scale */}
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                aria-controls="panel4d-content"
                id="panel4d-header"
              >
                <Typography className="filterTitle">
                  <i className="fa-solid fa-stairs"></i>
                  <span className="filterName">Scale</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {scaleOptions.map((scale) => (
                  <div className="productFilter" key={scale}>
                    <Checkbox
                      {...label}
                      checked={selectedScales.includes(scale.toLowerCase())}
                      onChange={handleScaleChange}
                      value={scale.toLowerCase()}
                    />
                    <span className="productFilterType">
                      {capitalizeFirstLetter(scale)}
                    </span>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
            <hr />
            {/* Key */}
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                aria-controls="panel5d-content"
                id="panel5d-header"
              >
                <Typography className="filterTitle">
                  <i className="fa-solid fa-music"></i>
                  <span className="filterName">Key</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {keyOptions.map((key) => (
                  <div className="productFilter" key={key}>
                    <Checkbox
                      {...label}
                      checked={selectedKeys.includes(key.toLowerCase())}
                      onChange={handleKeyChange}
                      value={key.toLowerCase()}
                    />
                    <span className="productFilterType">
                      {capitalizeFirstLetter(key)}
                    </span>
                  </div>
                ))}
              </AccordionDetails>
            </Accordion>
            <hr />
            {/* BPM */}
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                aria-controls="panel6d-content"
                id="panel6d-header"
              >
                <Typography className="filterTitle">
                  <SpeedIcon />
                  <span className="filterName">BPM</span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="pt">
                  <div className="field">
                    <SpeedIcon sx={{ fontSize: "18px" }} />
                    <input
                      type="text"
                      value={minBPM}
                      onChange={handleMinBPMChange}
                    />
                  </div>
                  <div className="m">to</div>
                  <div className="field">
                    <SpeedIcon sx={{ fontSize: "18px" }} />
                    <input
                      type="text"
                      value={maxBPM}
                      onChange={handleMaxBPMChange}
                    />
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </aside>
        <main className="content">
          <h1 className="showProductsHeading">Mr Beats &gt; Tracks</h1>
          <div className="horizontalCardsContainer">
            {filteredData.map((card, index) => (
              <HorizontalCard
                key={index}
                prodId={index + 1}
                artwork={card.artwork}
                title={card.title}
                author={card.author}
                info={card.info}
                tags={card.tags}
                freeDownload={card.freeDownload}
                price={card.price}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Products;
