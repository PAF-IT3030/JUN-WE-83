import axios from "axios";
import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import profileImage from "../../Images/avatar.png";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PostImage from "../../Images/fitness-tips-1645774618.jpg";
import ReplyModal from "./ReplyModal";

const FitLinkCard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get(
      "http://localhost:8084/api/v1/post/getposts"
    );
    setPosts(result.data);
    console.log(result.data);
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

  async function DeletePost(postid) {
    await axios.delete("http://localhost:8084/api/v1/post/delete/" + postid);
    alert("Post Deleted Successfully");
    handleClose();
  }

  const handleLikeFitLink = () => {
    console.log("handle like FitLink");
  };

  return (
    <React.Fragment>
      {/*<div className='flex items-center font-semibold text-gray-700 py-2'>


        </div>*/}
      {posts.map(function fn(post) {
        return (
          <div className="flex space-x-5">
            <Avatar
              onClick={() => navigate(`/profile/${6}`)}
              className="cursor-pointer"
              alt="username"
              src={profileImage}
              style={{ marginLeft: 40, width: 60, height: 60 }}
            />

            <div className="w-full">
              <div className="flex justify-between items-center">
                <div className="flex cursor-pointer items-center space-x-2">
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
                    }}>
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
                    }}>
                    <MenuItem style={{ fontWeight: 300 }}>Details</MenuItem>
                    <MenuItem
                      onClick={() => DeletePost(post._id)}
                      style={{ fontWeight: 300 }}>
                      Delete
                    </MenuItem>
                    <MenuItem style={{ fontWeight: 300 }}>Edit</MenuItem>
                  </Menu>
                </div>
              </div>

              <div className="mt-1">
                <div
                  onClick={() => navigate(`/fitlink/${3}`)}
                  className="cursor-pointer">
                  <p className="mb-2 p-0" style={{ fontSize: "18px" }}>
                    {post.postDescription}
                  </p>
                  <img
                    className="w-[28rem] border border-gray-400 p-5 rounded-md"
                    src={PostImage}
                    alt=""
                  />
                </div>

                <div className="py-5 flex flex-wrap justify-between items-center">
                  <div className="space-x-3 flex items-center text-gray-600">
                    <ChatBubbleOutlineIcon
                      className="cursor-pointer"
                      onClick={handleOpenReplyModel}
                      style={{ height: 30, width: 30 }}
                    />
                    <p>43</p>
                  </div>
                  <div
                    className={`${
                      true ? "text-pink-600" : "text-gray-600"
                    } space-x-1 flex
              items-center`}>
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
                    <p style={{ marginRight: 400 }}>54</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <section>
        <ReplyModal open={openReplyModal} handleClose={handleCloseReplyModal} />
      </section>
    </React.Fragment>
  );
};

export default FitLinkCard;
