import React, { useState, useEffect } from "react";
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
import ReplyModal from "../HomeSection/ReplyModal";
import axios from "axios";
import Swal from "sweetalert2";

function WorkoutStatusCard() {
  const navigate = useNavigate();
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    async function fetchWorkouts() {
      try {
        const response = await axios.get(
          "http://localhost:8087/api/v1/workout/getAllWorkouts"
        );
        setWorkouts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("error workout fetching", error);
      }
    }
    fetchWorkouts();
  }, []);

  async function deleteWorkout(workoutId) {
    try {
      // Display a confirmation dialog
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to recover this workout!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      });

      // If the user confirms deletion
      if (result.isConfirmed) {
        await axios.delete(
          "http://localhost:8087/api/v1/workout/delete/" + workoutId
        );
        setWorkouts((prevWorkouts) =>
          prevWorkouts.filter((workout) => workout._id !== workoutId)
        );
        // Show success message
        Swal.fire("Deleted!", "Your workout has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // If the user cancels
        Swal.fire("Cancelled", "Your workout is safe :)", "error");
      }
    } catch (error) {
      console.log("error deleting workout", error);
      // Show error message
      Swal.fire(
        "Error",
        "An error occurred while deleting the workout.",
        "error"
      );
    }
  }

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

  return workouts.map((workout) => (
    <div key={workout._id} className="flex space-x-5 ">
      <Avatar
        className="cursor-pointer"
        alt="username"
        src={profileImage}
        style={{ marginLeft: 40, width: 60, height: 60 }}
      />
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center cursor-pointer WorkoutStatusCard">
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
                style={{ fontWeight: 300 }}
                onClick={() => deleteWorkout(workout._id)}
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
              {workout.workoutDescription}
            </p>
            <div
              className="flex border border-gray-400 rounded-md"
              style={{ width: "70%" }}
            >
              <img className="w-[18rem]  p-5 rounded-md" src={wcard} alt="" />
              <div className="flex flex-col mt-20">
                <h1 className="workoutname">{workout.workoutName}</h1>
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  {workout.workoutMatrix} {workout.workoutName}
                </h2>
                <p
                  style={{
                    fontSize: "18px",
                    textAlign: "center",
                    marginTop: "20px",
                    color: "green",
                    fontWeight: 600,
                  }}
                >
                  {workout.workoutDate}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between py-5">
            <div className="flex items-center space-x-3 text-gray-600">
              <ChatBubbleOutlineIcon
                className="cursor-pointer"
                onClick={handleOpenReplyModel}
                style={{ height: 30, width: 30 }}
              />
              <p>89</p>
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
              <p style={{ marginRight: 400 }}>98</p>
            </div>
          </div>
        </div>
      </div>
      <section>
        <ReplyModal open={openReplyModal} handleClose={handleCloseReplyModal} />
      </section>
    </div>
  ));
}

export default WorkoutStatusCard;
