import React from "react";
import "./AddPost.css";
import temImg from "../../../src/Images/wcard.png";

function AddPost() {
  return (
    <div className="AddPost">
      <div className="topi">
        <h2>Create Post</h2>
      </div>
      <form>
        <div className="form-section">
          <div className="in-sec">
            <input
              type="text"
              placeholder="Post Description"
              id="description"
              required
            />
          </div>
          <div className="img-upld">
            <div className="file-sec">
              <input type="file" required id="images" accept="image/*" />
            </div>
            <div className="upld-btn">
              <button type="button">Upload</button>
            </div>
          </div>

          <div className="img-view">
            <div className="img-p">
              <img src={temImg} alt="" />
            </div>
            <div className="dlt-btn">
              <button type="button">delete</button>
            </div>
          </div>

          <div className="upd-btnn">
            <button>Share Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddPost;
