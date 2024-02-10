import { Link } from "react-router-dom";
import userAvatar from "../../assets/images/profile pic (1-1).png";
import beatImage from "../../assets/images/BeatImage.png";
import "./feed.scss";
import Filter from "../search/exploreCard/filters/Filter";
const Feed = () => {
  // Trending Search Result
  const TrendingSearch = ({ searchTag, searchResult }) => {
    return (
      <div className="HCard">
        <h2>#{searchTag}</h2>
        <span>{searchResult} results</span>
      </div>
    );
  };
  // Who To Follow
  const FollowCard = ({ userFollowAvatar, username, followersCount }) => {
    return (
      <div className="FHCard">
        <div className="FLeft">
          <img src={userFollowAvatar} alt="Avatar" />
          <div className="FTxt">
            <h3>{username}</h3>
            <span>{followersCount} Followers</span>
          </div>
        </div>
        <div className="FRight">
          <i className="fa-solid fa-user-plus follow"></i>
        </div>
      </div>
    );
  };
  // Main Feed Posts
  const FeedPost = ({
    userAvatar,
    name,
    username,
    releaseDate,
    artwork,
    productTitle,
    type,
    genre,
    price,
    likes,
    downloads,
    comments,
    plays,
  }) => {
    return (
      <div className="midCard">
        <div className="one">
          <img src={userAvatar} alt="userAvatar" />
          <h2>{name}</h2>
          <span>@{username}</span>
          <span>{releaseDate}</span>
        </div>
        <div className="two">
          <div className="twoOne">
            <img src={artwork} alt="beatImage" />
          </div>
          <div className="twoTwo">
            <div className="twoTwoOne">
              <i class="fa-regular fa-circle-play playPause"></i>
              <h1>{productTitle}</h1>
            </div>
            <div className="twoTwoTwo">
              <p>
                {type} by {name}
              </p>
              <p>Released on {releaseDate}</p>
              <p>
                {genre} Type {type}
              </p>
            </div>
            <div className="twoTwoThree">
              <i class="fa-solid fa-cart-shopping"></i>
              <span>${price}</span>
            </div>
          </div>
        </div>
        <div className="three">
          <span>
            <i class="fa-regular fa-heart"></i>
            {likes}
          </span>
          <span>
            <i class="fa-solid fa-download"></i>
            {downloads}
          </span>
          <span>
            <i class="fa-regular fa-comment-dots"></i>
            {comments}
          </span>
          <span>
            <i class="fa-solid fa-play"></i>
            {plays}
          </span>
        </div>
      </div>
    );
  };
  const filterFeed = [
    "Beat",
    "Instrumental",
    "Sound Engineering",
    "Drum-Kit",
    "One-shot Kit",
    "Loop Sample Pack",
  ];
  const trendingSearchData = [
    {
      searchTag: "BeatBattle",
      searchResult: "5059",
    },
    {
      searchTag: "BeatBattle",
      searchResult: "5059",
    },
    {
      searchTag: "BeatBattle",
      searchResult: "5059",
    },
    {
      searchTag: "BeatBattle",
      searchResult: "5059",
    },
    {
      searchTag: "BeatBattle",
      searchResult: "5059",
    },
    {
      searchTag: "BeatBattle",
      searchResult: "5059",
    },
    {
      searchTag: "BeatBattle",
      searchResult: "5059",
    },
    {
      searchTag: "BeatBattle",
      searchResult: "5059",
    },
  ];

  return (
    <div className="container">
      <div className="mainFeed">
        <div className="feedHeader">
          <h1>Your Feed</h1>
          {/* <div className="feedFilter">All Types</div> */}
          <Filter
            filterName="Filter"
            menuItems={filterFeed}
            className="filter"
          />
        </div>
        <div className="content">
          <div className="left">
            <h1>Trending Searches</h1>
            {trendingSearchData.map((data, id) => (
              <TrendingSearch
                searchTag={data.searchTag}
                searchResult={data.searchResult}
                key={id}
              />
            ))}
          </div>
          <div className="middle">
            <div className="midTop">
              <div className="midTopLeft">
                <i class="fa-solid fa-arrow-up-right-dots promote"></i>
                <h2>Promote your tracks to gain more placements!</h2>
              </div>
              <Link to="/advertisement" className="midTopRight">
                <span>Learn More</span>
                <i class="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div className="midCards">
              <FeedPost
                userAvatar={userAvatar}
                name="Mr Beats"
                username="mrbeats"
                releaseDate="Feb 24, 2023"
                artwork={beatImage}
                productTitle="Love Scars"
                type="Beat"
                genre="R&B"
                price="30.00"
                likes="15"
                downloads="20"
                comments="60"
                plays="100"
              />
              <FeedPost
                userAvatar={userAvatar}
                name="Mr Beats"
                username="mrbeats"
                releaseDate="Feb 24, 2023"
                artwork={beatImage}
                productTitle="Love Scars"
                type="Beat"
                genre="R&B"
                price="30.00"
                likes="15"
                downloads="20"
                comments="60"
                plays="100"
              />
              <FeedPost
                userAvatar={userAvatar}
                name="Mr Beats"
                username="mrbeats"
                releaseDate="Feb 24, 2023"
                artwork={beatImage}
                productTitle="Love Scars"
                type="Beat"
                genre="R&B"
                price="30.00"
                likes="15"
                downloads="20"
                comments="60"
                plays="100"
              />
            </div>
          </div>
          <div className="right">
            <h1>Who to follow</h1>
            <FollowCard
              userFollowAvatar={userAvatar}
              username="Mr Beats"
              followersCount="5000"
            />
            <FollowCard
              userFollowAvatar={userAvatar}
              username="Mr Beats"
              followersCount="5000"
            />
            <FollowCard
              userFollowAvatar={userAvatar}
              username="Mr Beats"
              followersCount="5000"
            />
            <FollowCard
              userFollowAvatar={userAvatar}
              username="Mr Beats"
              followersCount="5000"
            />
            <FollowCard
              userFollowAvatar={userAvatar}
              username="Mr Beats"
              followersCount="5000"
            />
            <FollowCard
              userFollowAvatar={userAvatar}
              username="Mr Beats"
              followersCount="5000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
