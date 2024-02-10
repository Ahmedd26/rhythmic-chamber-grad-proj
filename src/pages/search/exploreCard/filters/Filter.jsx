import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    marginTop: 32,
    minWidth: 180,
    width: "auto",
    color: "#101010",
    backgroundColor: "#232323",
    border: "1px solid #fcb14b",
    borderRadius: 8,
    maxHeight: 323, // Set the maximum height to 400px
    overflowY: "auto",
    "& .MuiMenu-list": {
      padding: "16",
    },
    "& .MuiMenuItem-root": {
      color: "#fcb14b",
      backgroundColor: "#232323",
      fontWeight: "600",
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: "#fcb14b",
        marginRight: "1rem",
      },
      "&:hover": {
        backgroundColor: "#fcb14b",
        color: "#101010",
      },
    },
  },
}));

const Filter = ({ filterName, menuItems }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.stopPropagation(); // Stop event propagation
    setAnchorEl(null);
  };

  return (
    <div className="filter">
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        className="button"
      >
        {filterName}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={handleClose} disableRipple>
            {item}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};

export default Filter;
