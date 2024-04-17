import React, { useState } from "react";
import "./WorkoutStatusCard.css";
import log from "../../Images/avatar.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

function WorkoutStatusCard() {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="WorkoutStatusCard">
      <div className="imgSection">
        <img src={log} alt="profile-image" />
      </div>
      <div className="detail-sec">
        <div className="f-set">
          <p className="userName">Monika</p>
          <p>@ram 17/04/2024</p>
          <p>
            <MoreHorizIcon />
          </p>
          {/* {showOptions && (
            <>
              <button>Edit</button>
              <button>Delete</button>
            </>
          )} */}
        </div>
        <div className="s-set">
          <p className="workoutName">Push Ups 😎✌️</p>
          <p>Push Ups - 15</p>
          <p>Did push-ups as part of upper body workout.</p>
        </div>
        <div className="t-sec">
          <FavoriteBorderIcon />
          <ChatBubbleOutlineIcon />
        </div>
      </div>
    </div>
  );
}

export default WorkoutStatusCard;
