import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import coverImg from "../../Images/coverImg.png";
import profileImage from "../../Images/avatar.png";
import { Avatar, Box, Button, Tab } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import FitLinkCard from "../HomeSection/FitLinkCard";
import ProfileModal from "./ProfileModal";
import WorkoutStatusCard from "../WorkoutStatusCard/WorkoutStatusCard";
import PlanSharingCard from "../PlanSharingCard/PlanSharingCard";

const Profile = () => {
  const [tabValue, setTabValue] = useState("1");

  const navigate = useNavigate();

  const [openProfileModal, setOpenProfileModal] = useState(false);
  const handleOpenProfileModel = () => setOpenProfileModal(true);
  const handleClose = () => setOpenProfileModal(false);

  const handleBack = () => navigate(-1);

  const handleFollowUser = () => {
    console.log("follow user");
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);

    if (newValue === 4) {
      console.log("users meal plans");
    } else if (newValue === 1) {
      console.log("users posts");
    }
  };

  return (
    <div>
      <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1
          className="py-5 text-xl font-bold opacity-90"
          style={{ marginLeft: 40, fontSize: 24, color: "#1E0443" }}>
          Sewmi Madhu
        </h1>
      </section>

      <section>
        <img
          className="w-[100%] h-[15rem] object-cover"
          src={coverImg}
          alt=""
        />
      </section>

      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="sewmi madhu"
            src={profileImage}
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />

          {true ? (
            <Button
              onClick={handleOpenProfileModel}
              variant="contained"
              sx={{
                borderRadius: "20px",
                backgroundColor: "#1E0443",
                "&:hover": {
                  backgroundColor: "#3F0E40",
                },
              }}>
              EDIT PROFILE
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              variant="contained"
              sx={{
                borderRadius: "20px",
                backgroundColor: "#1E0443",
                "&:hover": {
                  backgroundColor: "#3F0E40",
                },
              }}>
              {true ? "FOLLOW" : "UNFOLLOW"}
            </Button>
          )}
        </div>
        <div>
          <div className="flex items-center mt-8">
            <h1 className="text-lg font-bold" style={{ fontSize: "24px" }}>
              Sewmi Madhu
            </h1>
          </div>
          <h1 className="text-gray-500" style={{ fontSize: "20px" }}>
            @sewmini
          </h1>
        </div>

        <div className="mt-3 space-y-3">
          <p style={{ fontSize: "18px" }}>
            An avid fitness enthusiast,I am committed to pushing personal limits
            and inspiring others through their dedication to a healthy and
            active lifestyle.
          </p>
          <div className="flex py-1 space-x-7">
            <div className="flex items-center text-gray-500">
              <BusinessCenterIcon
                style={{ color: "#6C08CB", width: 30, height: 30 }}
              />
              <p className="ml-2" style={{ fontSize: "17px" }}>
                Education
              </p>
            </div>

            <div className="flex items-center text-gray-500">
              <LocationOnIcon
                style={{ color: "#6C08CB", width: 30, height: 30 }}
              />
              <p className="ml-2" style={{ fontSize: "17px" }}>
                Sri Lanka
              </p>
            </div>

            <div className="flex items-center text-gray-500">
              <CalendarMonthIcon
                style={{ color: "#6C08CB", width: 30, height: 30 }}
              />
              <p className="ml-2" style={{ fontSize: "17px" }}>
                Joined April 2024
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
              <span style={{ fontSize: "17px" }}>190</span>
              <span className="text-gray-500" style={{ fontSize: "17px" }}>
                Following
              </span>
            </div>
            <div className="flex items-center space-x-1 font-semibold">
              <span style={{ fontSize: "17px" }}>590</span>
              <span className="text-gray-500" style={{ fontSize: "17px" }}>
                Followers
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <Box sx={{ width: "100%", typography: "body1", marginTop: "15px" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleTabChange}
                aria-label="lab API tabs example"
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  "& .Mui-selected": {
                    color: "#1E0443",
                    "&:hover": {
                      backgroundColor: "#BFAADE",
                    },
                  },
                  "& .MuiTab-root": {
                    fontSize: "16px",
                    fontWeight: 600,
                    padding: "8px 16px",
                  },
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#1E0443",
                  },
                }}>
                <Tab label="POSTS" value="1" style={{ color: "#1E0443" }} />
                <Tab
                  label="WORKOUT STATUS"
                  value="2"
                  style={{ color: "#1E0443" }}
                />
                <Tab label="PLANS" value="3" style={{ color: "#1E0443" }} />
                <Tab
                  label="MEAL PLANS"
                  value="4"
                  style={{ color: "#1E0443" }}
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              {[1].map((item) => (
                <FitLinkCard />
              ))}
            </TabPanel>
            <TabPanel value="2">
              {[1].map((item) => (
                <WorkoutStatusCard />
              ))}
            </TabPanel>

             <TabPanel value="3">
              {[1].map((item) => (
                <PlanSharingCard />
              ))}
            </TabPanel>

            <TabPanel value="4">users meal plans</TabPanel>

          </TabContext>
        </Box>
      </section>

      <section>
        <ProfileModal handleClose={handleClose} open={openProfileModal} />
      </section>
    </div>
  );
};

export default Profile;
