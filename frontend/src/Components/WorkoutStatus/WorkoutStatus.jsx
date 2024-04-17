import React from "react";
import "./WorkoutStatus.css";

function WorkoutStatus() {
  return (
    <div className="WorkoutStatus">
      <div className="head">
        <h2>Create Workout Status</h2>
      </div>
      <div className="formSection">
        <form className="form-sec">
          <input type="text" placeholder="Exercise" />
          <input type="date" placeholder="Date" />
          <input type="text" placeholder="Matrix" />
          <textarea type="text" placeholder="Description" />
          <button type="submit">Create Current Status</button>
        </form>
      </div>
    </div>
  );
}

export default WorkoutStatus;
