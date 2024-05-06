import axios from "axios";
import { Avatar, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import ImageIcon from "@mui/icons-material/Image";
import profileImage from "../../Images/avatar.png";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import FitLinkCard from "./FitLinkCard";
import WorkoutStatusCard from "../WorkoutStatusCard/WorkoutStatusCard";
import PlanSharingCard from "../PlanSharingCard/PlanSharingCard";

const HomeSection = () => {
  const [postId, setPostId] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  async function save(event) {
    event.preventDefault();

    // Validation: Check if description is not empty
    if (!postDescription.trim()) {
      setDescriptionError("Please enter a description.");
      return;
    }

    try {
      await axios.post("http://localhost:8084/api/v1/post/save", {
        postDescription: postDescription,
      });
      alert("Post Created Successfully");
      setPostId("");
      setPostDescription("");
      setDescriptionError("");
    } catch (err) {
      alert("Post Creation Fail");
    }
  }

  return (
    <div className="space-y-5">
      <section>
        <h1
          className="py-5 text-xl font-bold opacity-90"
          style={{ marginLeft: 40, fontSize: 24, color: "#1E0443" }}
        >
          Home
        </h1>
      </section>

      <section className={`pb-10`}>
        <div className="flex space-x-5">
          <Avatar
            alt="username"
            src={profileImage}
            style={{ marginLeft: 40, width: 60, height: 60 }}
          />
          <div className="w-full">
            <form>
              <div>
                <input
                  type="text"
                  placeholder="What is happening?"
                  className={`border-none outline-none text-xl bg-transparent`}
                  value={postDescription}
                  onChange={(event) => {
                    setPostDescription(event.target.value);
                    setDescriptionError("");
                  }}
                />
                {descriptionError && (
                  <p style={{ color: "red", fontSize: 16 }}>
                    {descriptionError}
                  </p>
                )}
              </div>
              {/*<div>
                <img src="" alt=""/>
            </div>*/}
              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center space-x-5">
                  <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                    <ImageIcon
                      style={{ color: "#6C08CB", width: 30, height: 30 }}
                    />
                    <input type="file" name="imageFile" className="hidden" />
                  </label>
                  <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                    <SlideshowIcon
                      style={{ color: "#6C08CB", width: 30, height: 30 }}
                    />
                    <input type="file" name="imageFile" className="hidden" />
                  </label>

                  <FmdGoodIcon
                    className="flex items-center space-x-2 rounded-md cursor-pointer"
                    style={{ color: "#6C08CB", width: 30, height: 30 }}
                  />
                  <TagFacesIcon
                    className="flex items-center space-x-2 rounded-md cursor-pointer"
                    style={{ color: "#6C08CB", width: 30, height: 30 }}
                  />
                  <div>
                    <Button
                      sx={{
                        borderRadius: "20px",
                        paddingY: "8px",
                        bgcolor: "#1E0443",
                        marginLeft: "275px",
                        width: "150px",
                        color: "#fffffff",
                        fontSize: "16px",
                        "&:hover": {
                          bgcolor: "#2D0754",
                        },
                      }}
                      variant="contained"
                      type="submit"
                      onClick={save}
                    >
                      POST
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section>
        {/* {[1].map((item)=> <FitLinkCard/>)} */}

        {[1].map((item, index) => (
          <WorkoutStatusCard key={index} />
        ))}

        {[1].map((item) => (
          <PlanSharingCard />
        ))}
      </section>
    </div>
  );
};

export default HomeSection;
