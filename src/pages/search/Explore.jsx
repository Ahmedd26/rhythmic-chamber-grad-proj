import { Link } from "react-router-dom";
import "./explore.scss";
import ExploreCard from "./exploreCard/ExploreCard";
import Filter from "./exploreCard/filters/Filter";
import FilterKeyScale from "./exploreCard/filters/FilterKeyScale";
import Hashtag from "../../components/hashtag/Hashtag";
const Explore = () => {
  // Props to be passed to the filters
  const bpmMenuItems = [
    "60 - 80",
    "80 - 100",
    "100 - 120",
    "120 - 140",
    "140 - 160",
    "160 - 200",
  ];
  // Props to be passed to the filters
  const genreMenuItems = [
    "Pop",
    "Rock",
    "Country",
    "Jazz",
    "Blues",
    "Reggae",
    "Funk",
    "Soul",
    "Electronic",
    "Classical",
    "Metal",
    "Alternative",
    "Rap",
    "Gospel",
    "Indie",
    "Punk",
    "Disco",
    "Ska",
    "Latin",
    "Folk",
    "Rhythm and Blues (R&B)",
    "Hip Hop",
    "Trap",
    "Drill",
    "Techno",
    "House",
    "Dubstep",
    "Dancehall",
    "Salsa",
    "Hip Life",
    "Bollywood",
    "K-Pop",
    "Reggaeton",
    "Grunge",
    "Opera",
    "Samba",
    "Ballad",
    "Motown",
    "Merengue",
    "Other",
  ];
  // Props to be passed to the filters
  const typeMenuItems = [
    "Beat",
    "Instrumental",
    "One-shot kit",
    "Drum-kit",
    "Loop sample pack",
    "Sound engineering",
  ];
  const tags = [
    "909",
    "Trap",
    "Drill",
    "Hiphop",
    "R&B",
    "Classic",
    "Rock",
    "Metal",
    "Blues",
    "Afro",
    "808",
    "Trap",
    "Drill",
    "Hiphop",
    "R&B",
    "Classic",
    "Rock",
    "Metal",
  ];
  return (
    <div className="explore">
      <div className="container">
        <h1 className="title">Explore</h1>
        <div className="search">
          <div className="searchInput">
            <i className="fa-solid fa-magnifying-glass searchIcon"></i>
            <input type="search" placeholder="Search for beats, sound-kits" />
          </div>
          {tags.map((tag) => (
            <Hashtag tag={tag} padding="0.5rem 2rem" />
          ))}
        </div>
        <div className="filters">
          <div className="filterBy">Filter By</div>
          {/* <div className="filter">Key & Scale</div> */}
          <FilterKeyScale className="filter" />
          {/* <div className="filter">BPM</div> */}
          <Filter
            filterName="BPM"
            menuItems={bpmMenuItems}
            className="filter"
          />
          <Filter
            filterName="Genre"
            menuItems={genreMenuItems}
            className="filter"
          />
          <Filter
            filterName="Type"
            menuItems={typeMenuItems}
            className="filter"
          />
          {/* <div className="filter">Genre</div> */}
          {/* <div className="filter">Type</div> */}
        </div>
        <div className="cardsContainer">
          <Link to="/" className="cardLink">
            <ExploreCard />
          </Link>
          <Link to="/" className="cardLink">
            <ExploreCard />
          </Link>
          <Link to="/" className="cardLink">
            <ExploreCard />
          </Link>
          <Link to="/" className="cardLink">
            <ExploreCard />
          </Link>
          <Link to="/" className="cardLink">
            <ExploreCard />
          </Link>
          <Link to="/" className="cardLink">
            <ExploreCard />
          </Link>
          <Link to="/" className="cardLink">
            <ExploreCard />
          </Link>
          <Link to="/" className="cardLink">
            <ExploreCard />
          </Link>
          <Link to="/" className="cardLink">
            <ExploreCard />
          </Link>
          <Link to="/" className="cardLink">
            <ExploreCard />
          </Link>
          <Link to="/" className="cardLink">
            <ExploreCard />
          </Link>
          <Link to="/" className="cardLink">
            <ExploreCard />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Explore;
