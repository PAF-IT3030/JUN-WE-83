import React from "react";
import FitLinkIcon from "../../Images/FitLink.png";
import profileImage from "../../Images/avatar.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { navigationMenu } from "./NavigationMenu";
import { useNavigate , Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log("logout");
    handleClose();
    navigate("/landing"); // Navigate to the LandingPage
  };

  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-5 mr-10 flex justify-center items-center">
          <img src={FitLinkIcon} height="200" width="300" viewBox="0 0 24 24" />
        </div>

        <div className="space-y-11">
          {navigationMenu.map((item) => (
            <div
              className="cursor-pointer flex space-x-3 items-center"
              onClick={() =>
                item.title === "Profile"
                  ? navigate(`/profile/${5}`)
                  : navigate(item.path)
              }
              key={item.title} // Add a unique key to each item
            >
              {item.icon}
              <p className="text-white font-semibold" style={{ fontSize: 20 }}>
                {item.title}
              </p>
            </div>
          ))}
          
        </div>
      </div>

      <div className="flex items-center justify-betwee">
        <div className="flex items-center space-x-5 space-y-16">
          <Avatar
            alt="username"
            src={profileImage}
            style={{ marginTop: 86, width: 60, height: 60 }}
          />
          <div>
            <span style={{ color: "white", fontSize: 20 }}>Sewmi Madhu</span>
            <br />
            <span className="opacity-70" style={{ color: "white" }}>
              @sewmini
            </span>
          </div>

          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreHorizIcon style={{ color: "white", width: 35, height: 35 }} />
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
            <MenuItem onClick={handleLogout} style={{ fontWeight: 300 }}>
              LOGOUT
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
