import React, { useState } from "react";
import "./PlanSharingCard.css";
import profileImage from "../../Images/avatar.png";
import wcard from "../../Images/wcard.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Avatar } from "@mui/material";
import ReplyModal from "../HomeSection/ReplyModal";

function PlanSharingCard() {

    const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const [openReplyModal, setOpenReplyModal] = useState(false);
  const handleOpenReplyModel = () => setOpenReplyModal(true);
  const handleCloseReplyModal = () => setOpenReplyModal(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteFitLink = () => {
    console.log("Delete FitLink");
    handleClose();
  };

  const handleLikeFitLink = () => {
    console.log("handle like FitLink");
  };
  

  return (
    <div className="flex space-x-5 ">
    <Avatar
        className="cursor-pointer"
        alt="username"
        src={profileImage}
        style={{ marginLeft: 40, width: 60, height: 60 }}
      />

      <div className="w-full">
      <div className="flex items-center justify-between">
          <div className="flex items-center WorkoutStatusCard cursor-pointer">
            <span className="font-semibold" style={{ fontSize: "18px" }}>
              Sewmi Madhu
            </span>
            <span className="text-gray-600">@sewmini . 2m</span>
          </div>
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{
                "&:hover": {
                  bgcolor: "#ffffff",
                },
              }}
            >
              <MoreHorizIcon
                style={{
                  color: "#6C08CB",
                  width: 35,
                  height: 35,
                  marginRight: 70,
                }}
              />
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
              <MenuItem
                onClick={handleDeleteFitLink}
                style={{ fontWeight: 300 }}
              >
                Details
              </MenuItem>
              <MenuItem
                onClick={handleDeleteFitLink}
                style={{ fontWeight: 300 }}
              >
                Delete
              </MenuItem>
              <MenuItem
                onClick={handleDeleteFitLink}
                style={{ fontWeight: 300 }}
              >
                Edit
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    
    </div>


  )
}

export default PlanSharingCard