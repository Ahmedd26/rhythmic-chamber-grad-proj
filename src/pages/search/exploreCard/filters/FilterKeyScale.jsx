import "./filterKeyScale.scss";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Menu
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
    backgroundColor: "#101010",
    border: "1px solid #fcb14b",
    borderRadius: 8,
    "& .MuiMenu-list": {
      padding: "16",
    },
    "& .MuiMenuItem-root": {
      color: "#fcb14b",
      backgroundColor: "#101010",
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: "#fcb14b",
        marginRight: "1rem",
      },
    },
  },
}));

// Tabs
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function FilterKeyScale() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.stopPropagation(); // Stop event propagation
    setAnchorEl(null);
  };

  // Tabs
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    const scale = newValue === 0 ? "Major" : newValue === 1 ? "Minor" : "Other";
    setSelectedScale(scale); // Update the selectedScale state
  };

  const handleTabClick = (event) => {
    event.stopPropagation();
  };

  const [selectedKey, setSelectedKey] = React.useState("");
  const [selectedScale, setSelectedScale] = React.useState("");

  const Keys = () => {
    const handleKeyClick = (keyValue) => {
      setSelectedKey(keyValue);
      setSelectedScale(value === 0 ? "Major" : value === 1 ? "Minor" : "Other");
    };

    return (
      <div className="keys">
        <span className="key" onClick={() => handleKeyClick("C")}>
          C
        </span>
        <span className="key" onClick={() => handleKeyClick("C#")}>
          C#
        </span>
        <span className="key" onClick={() => handleKeyClick("D")}>
          D
        </span>
        <span className="key" onClick={() => handleKeyClick("D#")}>
          D#
        </span>
        <span className="key" onClick={() => handleKeyClick("E")}>
          E
        </span>
        <span className="key" onClick={() => handleKeyClick("F")}>
          F
        </span>
        <span className="key" onClick={() => handleKeyClick("F#")}>
          F#
        </span>
        <span className="key" onClick={() => handleKeyClick("G")}>
          G
        </span>
        <span className="key" onClick={() => handleKeyClick("G#")}>
          G#
        </span>
        <span className="key" onClick={() => handleKeyClick("A")}>
          A
        </span>
        <span className="key" onClick={() => handleKeyClick("A#")}>
          A#
        </span>
        <span className="key" onClick={() => handleKeyClick("B")}>
          B
        </span>
      </div>
    );
  };

  React.useEffect(() => {
    if (selectedScale && selectedKey) {
      console.log(`Scale: ${selectedScale}, key: ${selectedKey}`);
    }
  }, [selectedScale, selectedKey]);

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
        Key & Scale
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
        <MenuItem onClick={handleClose} disableRipple>
          <Box sx={{ width: "100%", bgcolor: "#101010", color: "#fcb14b" }}>
            <Box sx={{ borderBottom: 1, borderColor: "#fcb14b" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                onClick={handleTabClick}
                aria-label="basic tabs example"
                indicatorColor="primary"
                sx={{
                  color: "#fcb14b",
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#fcb14b", // Your custom color
                  },
                }}
              >
                <Tab
                  sx={{
                    color: "#fcb14b",
                    fontWeight: "600",
                    textTransform: "none",
                    fontSize: "16px",
                    borderRadius: "8px 0 0 0 ",
                    "& .MuiTab-root.Mui-selected": {
                      borderBottomColor: "#fcb14b",
                    },
                    "&.Mui-selected": {
                      color: "#101010",
                      bgcolor: "#fcb14b",
                    },
                  }}
                  label="Major"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{
                    color: "#fcb14b",
                    fontWeight: "600",
                    textTransform: "none",
                    fontSize: "16px",
                    "& .MuiTab-root.Mui-selected": {
                      borderBottomColor: "#fcb14b",
                    },
                    "&.Mui-selected": {
                      color: "#101010",
                      bgcolor: "#fcb14b",
                    },
                  }}
                  label="Minor"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{
                    color: "#fcb14b",
                    fontWeight: "600",
                    textTransform: "none",
                    fontSize: "16px",
                    borderRadius: "0 8px 0 0",
                    "& .MuiTab-root.Mui-selected": {
                      borderBottomColor: "#fcb14b",
                    },
                    "&.Mui-selected": {
                      color: "#101010",
                      bgcolor: "#fcb14b",
                    },
                  }}
                  label="Other"
                  {...a11yProps(2)}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Keys />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Keys />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Keys />
            </TabPanel>
          </Box>
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
