import React, { useState, useEffect } from "react";
import "./PlanSharingCard.css";
import profileImage from "../../Images/avatar.png";
import wcard from "../../Images/wcard.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Avatar } from "@mui/material";
import ReplyModal from "../HomeSection/ReplyModal";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import axios from "axios";
import Swal from "sweetalert2";
import EditPlanSharing from "./EditPlanSharingCard";

function PlanSharingCard() {
  const navigate = useNavigate();
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuId, setMenuId] = useState(null);
  const [openReplyModal, setOpenReplyModal] = useState(false);

  const open = Boolean(anchorEl);

  const handleOpenReplyModel = () => setOpenReplyModal(true);
  const handleCloseReplyModal = () => setOpenReplyModal(false);

  useEffect(() => {
    async function fetchWorkoutPlan() {
      try {
        const response = await axios.get(
          "http://localhost:8087/api/v1/WorkoutPlan/getAll"
        );
        setWorkoutPlans(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("error workout plan fetching", error);
      }
    }
    fetchWorkoutPlan();
  }, []);

  async function deleteWorkoutPlan(workoutPlanId) {
    try {
      // Display a confirmation dialog
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to recover this workout plan!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      });

      // If the user confirms deletion
      if (result.isConfirmed) {
        await axios.delete(
          "http://localhost:8087/api/v1/WorkoutPlan/delete/" + workoutPlanId
        );
        setWorkoutPlans((prevWorkoutPlans) =>
          prevWorkoutPlans.filter(
            (workoutPlan) => workoutPlan.id !== workoutPlanId
          )
        );
        // Show success message
        Swal.fire("Deleted!", "Your workout plan has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // If the user cancels
        Swal.fire("Cancelled", "Your workout is safe :)", "error");
      }
    } catch (error) {
      console.log("error deleting workout plan", error);
      // Show error message
      Swal.fire(
        "Error",
        "An error occurred while deleting the workout plan.",
        "error"
      );
    }
  }

  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setMenuId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuId(null);
  };

  const handleLikeFitLink = () => {
    console.log("handle like FitLink");
  };

  return workoutPlans.map((workoutPlan) => (
    <div key={workoutPlan._id} className="flex space-x-5 ">
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
              aria-controls={
                menuId === workoutPlan.id ? "basic-menu" : undefined
              }
              aria-haspopup="true"
              aria-expanded={menuId === workoutPlan.id ? "true" : undefined}
              onClick={(event) => handleClick(event, workoutPlan.id)}
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
              open={menuId === workoutPlan.id}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                style={{ fontWeight: 300 }}
                onClick={() => deleteWorkoutPlan(workoutPlan.id)}
              >
                Delete
              </MenuItem>

              <Link to={`/updateplan/${workoutPlan.id}`}>
                <MenuItem style={{ fontWeight: 300 }}>Edit</MenuItem>
              </Link>
            </Menu>
          </div>
        </div>

        <div className="mt-1">
          <div className="cursor-pointer">
            <p className="p-0 mb-2" style={{ fontSize: "18px" }}>
              {workoutPlan.workoutPlans}
            </p>
            <div
              className="flex flex-col border border-gray-400 rounded-md"
              style={{ width: "70%" }}
            >
              <p
                style={{
                  marginTop: "4px",
                  color: "green",
                  fontSize: "18px",
                  marginLeft: "358px",
                  fontWeight: 600,
                }}
              >
                My Plans
              </p>
              <div className="flex flex-row mt-2">
                <div className="flex flex-col">
                  <b>
                    <h1 style={{ fontSize: "24px", marginLeft: "20px" }}>
                      {workoutPlan.exercise}
                    </h1>
                  </b>
                  <h1 style={{ fontSize: "20px", marginLeft: "20px" }}>
                    Date : {workoutPlan.date}
                  </h1>
                </div>

                <div style={{ marginLeft: "238px" }}>
                  <PendingActionsIcon
                    style={{ width: 60, height: 60, color: "#A05AEA" }}
                  />
                </div>
              </div>

              <div className="flex flex-row mt-7">
                <h2
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    textAlign: "center",
                    marginLeft: "20px",
                  }}
                >
                  Sets : {workoutPlan.sets}
                </h2>
                <h2
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    textAlign: "center",
                    marginLeft: "115px",
                  }}
                >
                  Repetitions : {workoutPlan.repetitions}
                </h2>
              </div>

              <div
                className="mt-4"
                style={{
                  marginLeft: "20px",
                  marginRight: "20px",
                  marginBottom: "45px",
                }}
              >
                <p style={{ textAlign: "justify" }}>
                  <b> Goals : </b> {workoutPlan.goals}
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
              <p>48</p>
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
              <p style={{ marginRight: 400 }}>106</p>
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

export default PlanSharingCard;
