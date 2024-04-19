import React, { useState, useEffect } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Notification.css";

const Notification = () => {
  const [replies, setReplies] = useState([]);
  const [hiddenNewButtons, setHiddenNewButtons] = useState([]);

  useEffect(() => {
    // Fetch stored replies from local storage
    const storedReplies = JSON.parse(localStorage.getItem("replies")) || [];
    setReplies(storedReplies);
  }, []);

  const handleDelete = (id) => {
    // Filter out the reply with the specified id
    const updatedReplies = replies.filter((reply) => reply.id !== id);
    // Update state and local storage
    setReplies(updatedReplies);
    localStorage.setItem("replies", JSON.stringify(updatedReplies));
  };

  const handleToggleHiddenNewButton = (id) => {
    // Toggle the visibility of the "New" button for the notification with the specified id
    setHiddenNewButtons((prevHiddenNewButtons) => {
      if (prevHiddenNewButtons.includes(id)) {
        return prevHiddenNewButtons.filter((hiddenId) => hiddenId !== id);
      } else {
        return [...prevHiddenNewButtons, id];
      }
    });
  };

  // Calculate the count of notifications
  const notificationCount = replies.length;

  return (
    <div className="replies-container">
      <section>
        <h1
          className="py-5 text-xl font-bold opacity-90"
          style={{ marginLeft: 40, fontSize: 24, color: "#1E0443" }}
        >
          Notifications
          <span className="notification-circle">{notificationCount}</span>
          <NotificationsIcon className="notification-icon" style={{width:40, height:40, color:"#1E0443"}}/>
        </h1>
      </section>
      {replies.map((reply) => (
        <div className="reply" key={reply.id}>
          <ClearIcon
            className="delete-icon"
            onClick={() => handleDelete(reply.id)}
          />
          <button
            className={`new-button ${
              hiddenNewButtons.includes(reply.id) ? "hidden" : ""
            }`}
            onClick={() => handleToggleHiddenNewButton(reply.id)}
          >
            New
          </button>
          <p className="reply-content">{reply.content}</p>
          <p className="reply-date">
            {new Date(reply.timestamp).toLocaleDateString()}
          </p>
          <p className="reply-time">
            {new Date(reply.timestamp).toLocaleTimeString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Notification;
