import React, { useState, useEffect } from "react";
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
import axios from "axios";
import Swal from "sweetalert2";

function Mealplancard() {
  const navigate = useNavigate();
  const [mealPlans, setmealPlans] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuId, setMenuId] = useState(null);
  const [openReplyModal, setOpenReplyModal] = useState(false);

  useEffect(() => {
    async function fetchmealPlan() {
      try {
        const response = await axios.get(
          "http://localhost:8087/api/v1/meal/getAll"
        );
        setmealPlans(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("error workout fetching", error);
      }
    }
    fetchmealPlan();
  }, []);

  async function deleteMeal(MealId) {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to recover this Meal Plan!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      });

      if (result.isConfirmed) {
        await axios.delete(
          "http://localhost:8087/api/v1/meal/delete/" + MealId
        );
        setmealPlans((prevMeals) =>
          prevMeals.filter((mealPlan) => mealPlan._id !== MealId)
        );
        Swal.fire("Deleted!", "Your Meal Plan has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your Meal Plan is safe :)", "error");
      }
    } catch (error) {
      console.log("error deleting Meal Plan", error);
      Swal.fire(
        "Error",
        "An error occurred while deleting the Meal Plan.",
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

  return mealPlans.map((mealPlan) => (
    <div key={mealPlan._id} className="flex space-x-5 ">
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
          </div>
          <div>
            <Button
              id="basic-button"
              aria-controls={menuId === mealPlan._id ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={menuId === mealPlan._id ? "true" : undefined}
              onClick={(event) => handleClick(event, mealPlan._id)}
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
              open={menuId === mealPlan._id}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem
                style={{ fontWeight: 300 }}
                onClick={() => deleteMeal(mealPlan._id)}
              >
                Delete
              </MenuItem>
              <Link to={`/updatemealplan/${mealPlan._id}`}>
              <MenuItem style={{ fontWeight: 300 }}>Edit</MenuItem>
              </Link>
              
            </Menu>
          </div>
        </div>
        <div className="mt-1">
          <div className="cursor-pointer">
            <p className="p-0 mb-2" style={{ fontSize: "18px" }}>
              {mealPlan.ingredients}
            </p>
            <div
              className="flex border border-gray-400 rounded-md"
              style={{ width: "70%" }}
            >
              <img
                className="w-[18rem]  p-5 rounded-md"
                src={mealPlan.images}
                alt=""
              />
              <div className="flex flex-col mt-10">
                <h1 className="workoutname">{mealPlan.cookingInstructions}</h1>
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                ></h2>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between py-5">
            <div className="flex items-center space-x-3 text-gray-600">
              <ChatBubbleOutlineIcon
                className="cursor-pointer"
                onClick={() => setOpenReplyModal(true)}
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
        <ReplyModal
          open={openReplyModal}
          handleClose={() => setOpenReplyModal(false)}
        />
      </section>
    </div>
  ));
}

export default Mealplancard;
