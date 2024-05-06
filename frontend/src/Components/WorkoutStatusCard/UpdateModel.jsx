import React,{useState,useEffect} from "react";
import "./UpdateModel.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";

function UpdateModel() {
  const handleBack = () => navigate(-1);
  const navigate = useNavigate();
  const { id } = useParams();
  const [workoutName, setworkoutName] = useState("");
  const [workoutDate, setworkoutDate] = useState("");
  const [workoutMatrix, setworkoutMatrix] = useState("");
  const [workoutDescription, setworkoutDescription] = useState("");

  return (
    <div className="UpdateModel">
      <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1
          className="py-5 text-xl font-bold opacity-90"
          style={{ marginLeft: 40, fontSize: 24, color: "#1E0443" }}
        >
          Update Workout Status
        </h1>
      </section>
      <div className="formSection">
        <form className="form-sec">
          <input type="text" placeholder="Exercise" required />
          <input type="date" placeholder="Date" required />
          <input type="text" placeholder="Matrix" required />
          <textarea type="text" placeholder="Description" required />
          <button type="button">UPDATE CURRENT STATUS</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateModel;
