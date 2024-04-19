import React, { useState } from "react";
import "./WorkoutStatusCard.css";
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

function WorkoutStatusCard() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

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
          <div className="flex items-center space-x-2 cursor-pointer">
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
        <div className="mt-1">
          <div className="cursor-pointer">
            <p className="p-0 mb-2" style={{ fontSize: "18px" }}>
              Quick Fitness Tips 👍
            </p>
            <div className="flex p-5 border border-gray-400 rounded-md">
              <img className="w-[18rem]  p-5 rounded-md" src={wcard} alt="" />
              <div className="flex flex-col mt-20">
                <h1 className="workoutname">Push Ups</h1>
                <h2 className="workoutname2">15 reps</h2>
                <p>2014.04.17</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between py-5">
            <div className="flex items-center space-x-3 text-gray-600">
              <ChatBubbleOutlineIcon
                className="cursor-pointer"
                style={{ height: 30, width: 30 }}
              />
              <p>43</p>
            </div>
            <div
              className={`${
                true ? "text-pink-600" : "text-gray-600"
              } space-x-1 flex
              items-center`}
            >
              {true ? (
                <FavoriteIcon
                  onClick={handleLikeFitLink}
                  className="cursor-pointer"
                  style={{ height: 30, width: 30 }}
                />
              ) : (
                <FavoriteBorderIcon
                  onClick={handleLikeFitLink}
                  className="cursor-pointer"
                  style={{ height: 30, width: 30 }}
                />
              )}
              <p style={{ marginRight: 300 }}>54</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkoutStatusCard;
