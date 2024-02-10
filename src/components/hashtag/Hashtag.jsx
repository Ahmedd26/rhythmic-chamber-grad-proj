import "./hashtag.scss";
import Tooltip from "@mui/material/Tooltip";

const Hashtag = ({ tag, padding, fz }) => {
  let displayTag = tag;
  if (tag.length > 10) {
    displayTag = tag.substring(0, 10) + "...";
  }

  const style = {
    padding: padding,
    fontSize: fz,
  };

  return (
    <>
      {tag.length > 10 ? (
        <Tooltip title={tag}>
          <span className="tag" style={style}>
            {displayTag}
          </span>
        </Tooltip>
      ) : (
        <span className="tag" style={style}>
          {displayTag}
        </span>
      )}
    </>
  );
};

export default Hashtag;
