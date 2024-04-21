import React from "react";
import "./WorkoutStatus.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";

function WorkoutStatus() {

  const handleBack = () => navigate(-1);
  const navigate = useNavigate();

  return (
    <div className="WorkoutStatus">
      <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
      <KeyboardBackspaceIcon
        className="cursor-pointer"
        onClick={handleBack}
      />
      <h1
        className="py-5 text-xl font-bold opacity-90"
        style={{ marginLeft: 40, fontSize: 24, color: "#1E0443" }}>
        Create Eorkout Status
      </h1>
    </section>
      <div className="formSection">
        <form className="form-sec">
          <input type="text" placeholder="Exercise" />
          <input type="date" placeholder="Date" />
          <input type="text" placeholder="Matrix" />
          <textarea type="text" placeholder="Description" />
          <button type="submit">CREATE CURRENT STATUS</button>
        </form>
      </div>
    </div>
  );
}

export default WorkoutStatus;
