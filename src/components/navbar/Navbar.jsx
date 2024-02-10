import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import {
  FileUploadOutlined,
  WavingHand,
  ShoppingBasket,
  Chat,
  LocalActivity,
  Gavel,
  Payments,
  Campaign,
  Logout,
} from "@mui/icons-material/";
import { IconButton, Menu, MenuItem } from "@mui/material";
import styled from "styled-components";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "#232323",
    border: "1px solid #fcb14b",
    borderRadius: "8px",
    color: "#fcb14b",
    "& .MuiMenu-list": {
      backgroundColor: "#232323",
    },
    "& .MuiMenuItem-root": {
      color: "#fcb14b",
      "& .menuLink": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        "& span": {
          fontSize: "24px",
          fontFamily: "Bebas Neue",
          fontWeight: "lighter",
        },
      },
      "&:hover": {
        backgroundColor: "#fcb14b",
        color: "#101010",
      },
      "& .MuiSvgIcon-root": {},
      "&:active": {},
    },
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header className="navbar container">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
        <h1>Rhythmic Chamber</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/feed">Feed</Link>
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <IconButton color="inherit" onClick={handleClick}>
              <ListOutlinedIcon />
            </IconButton>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                <Link to="profile/upload" className="menuLink">
                  <FileUploadOutlined />
                  <span>Upload</span>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <Link to="/" className="menuLink">
                  <Chat />
                  <span>Messages</span>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <Link to="/requests" className="menuLink">
                  <WavingHand />
                  <span>Requests</span>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <Link to="/cart" className="menuLink">
                  <ShoppingBasket />
                  <span>Cart</span>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <Link to="/licenses" className="menuLink">
                  <Gavel />
                  <span>Licenses</span>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <Link to="/subscription-plans" className="menuLink">
                  <Payments />
                  <span>Plans</span>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <Link to="/challenges" className="menuLink">
                  <LocalActivity />
                  <span>Challenges</span>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <Link to="/advertisement" className="menuLink">
                  <Campaign />
                  <span>Create advertisement</span>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <Link to="/" className="menuLink">
                  <Logout />
                  <span>Logout</span>
                </Link>
              </MenuItem>
            </StyledMenu>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
