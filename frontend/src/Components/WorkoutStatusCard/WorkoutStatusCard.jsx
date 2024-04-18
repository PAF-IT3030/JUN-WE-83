import React, { useState } from "react";
import "./WorkoutStatusCard.css";
import log from "../../Images/avatar.png";
import wcard from "../../Images/wcard.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

function WorkoutStatusCard() {
  return (
    <div className="WorkoutStatusCard">
      <div className="img-sec">
        <img src={log} alt="prefile-image" />
      </div>
      <div className="detail-sec">
        <div className="f-sec">
          <p className="userName">Monika</p>
          <p>@ram . 5m</p>
          <MoreHorizIcon />
        </div>
        <div className="s-sec">
          <p>Today My Status is best 😎✌️</p>
        </div>
        <div className="t-sec">
          <p className="workoutName">Push Ups</p>
          <div className="tt-sec">
            <div className="tt-img">
              <img src={wcard} alt="wcard" />
            </div>
            <div className="td-sec">
              <h3 className="workoutCount">20 Push Ups</h3>
              <p>2024.04.18</p>
            </div>
          </div>
        </div>
        <div className="f-sec">
          <FavoriteBorderIcon />
          <ChatBubbleOutlineIcon />
        </div>
      </div>
    </div>
  );
}

export default WorkoutStatusCard;
