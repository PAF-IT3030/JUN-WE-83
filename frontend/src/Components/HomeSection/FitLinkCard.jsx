import axios from "axios";
import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import profileImage from "../../Images/avatar.png";
import { useNavigate, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PostImage from "../../Images/fitness-tips-1645774618.jpg";
import ReplyModal from "./ReplyModal";
import Swal from "sweetalert2";

const FitLinkCard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuId, setMenuId] = useState(null);
  const [openReplyModal, setOpenReplyModal] = useState(false);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get(
      "http://localhost:8087/api/v1/post/getposts"
    );
    setPosts(result.data);
    console.log(result.data);
  }

  const open = Boolean(anchorEl);
  const handleOpenReplyModel = () => setOpenReplyModal(true);
  const handleCloseReplyModal = () => setOpenReplyModal(false);

  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setMenuId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenuId(null);
  };

  async function DeletePost(postid) {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You will not be able to recover this post!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      });

      if (result.isConfirmed) {
        await axios.delete(
          `http://localhost:8087/api/v1/post/delete/${postid}`
        );
        setPosts((prevPosts) => {
          const newPosts = prevPosts.filter((post) => post._id !== postid);
          console.log("Updated posts after deletion:", newPosts);
          return newPosts;
        });
        Swal.fire("Deleted!", "Your post has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "Your post is safe :)", "error");
      }

      handleClose();
    } catch (error) {
      console.error("Error deleting post:", error);
      Swal.fire("Error", "An error occurred while deleting the post.", "error");
    }
  }

  const handleLikeFitLink = () => {
    console.log("handle like FitLink");
  };

  return (
    <React.Fragment>
      {posts.map((post) => (
        <div key={post._id} className="flex space-x-5">
          <Avatar
            onClick={() => navigate(`/profile/${6}`)}
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
                  aria-controls={menuId === post._id ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={menuId === post._id ? "true" : undefined}
                  onClick={(event) => handleClick(event, post._id)}
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
                  open={menuId === post._id}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem style={{ fontWeight: 300 }}>Details</MenuItem>
                  <MenuItem
                    onClick={() => DeletePost(post._id)}
                    style={{ fontWeight: 300 }}
                  >
                    Delete
                  </MenuItem>

                  <Link to={`/updatepost/${post._id}`}>
                    <MenuItem style={{ fontWeight: 300 }}>Edit</MenuItem>
                  </Link>
                </Menu>
              </div>
            </div>

            <div className="mt-1">
              <div>
                <p className="p-0 mb-2" style={{ fontSize: "18px" }}>
                  {post.postDescription}
                </p>
                <div>
                  {post.images.map((image, index) => (
                    <img
                      key={index}
                      className="w-[28rem] border border-gray-400 p-5 rounded-md my-5"
                      src={image}
                      alt={`Image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between py-5">
                <div className="flex items-center space-x-3 text-gray-600">
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
                  <p style={{ marginRight: 400 }}>54</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <section>
        <ReplyModal open={openReplyModal} handleClose={handleCloseReplyModal} />
      </section>
    </React.Fragment>
  );
};

export default FitLinkCard;
