import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import coverImg from "../../Images/coverImg.png";
import profileImage from "../../Images/avatar.png";
import { Avatar, Button } from "@mui/material";

const Profile = () => {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  const handleOpenProfileModel = () => {
    console.log("open profile model");
  };

  const handleFollowUser = () => {
    console.log("follow user");
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
              sx={{ borderRadius: "20px", backgroundColor:"#1E0443", "&:hover": {
                backgroundColor: "#3F0E40"
              }}}>
              EDIT PROFILE
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              variant="contained"
              sx={{ borderRadius: "20px",backgroundColor:"#1E0443", "&:hover": {
                backgroundColor: "#3F0E40"
              }}}>
              {true? "FOLLOW":"UNFOLLOW"}
            </Button>
          )}
        </div>
        <div>
        <div className="flex items-center mt-8">
        <h1 className="font-bold text-lg" style={{fontSize:"24px"}}>Sewmi Madhu</h1>
        </div>
        </div>

        <div></div>
      </section>
    </div>
  );
};

export default Profile;
