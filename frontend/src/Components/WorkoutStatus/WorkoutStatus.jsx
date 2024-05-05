import React,{useState} from "react";
import "./WorkoutStatus.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function WorkoutStatus() {

  const handleBack = () => navigate(-1);
  const navigate = useNavigate();

  const [workoutName, setworkoutName] = useState("");
  const [workoutDate, setworkoutDate] = useState("");
  const [workoutMatrix, setworkoutMatrix] = useState("");
  const [workoutDescription, setworkoutDescription] = useState("");

  const createWorkout=async(e)=>{
    e.preventDefault();

    try {
      const response=await axios.post("http://localhost:8087/api/v1/workout/save",{
        workoutName,
        workoutDate,
        workoutMatrix,
        workoutDescription
      });

      console.log(response.data);
      alert("workout created success");

      setworkoutName("");
      setworkoutDate("");
      setworkoutMatrix("");
      setworkoutDescription("");
      
    } catch (error) {
      console.log("error creating workout",error);
    }
  }

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
        Create Workout Status
      </h1>
    </section>
      <div className="formSection">
        <form className="form-sec">
          <input type="text" placeholder="Exercise" required 
          value={workoutName} 
          onChange={(e)=>{setworkoutName(e.target.value)}}
          />
          <input type="date" placeholder="Date" required
          value={workoutDate}
          onChange={(e)=>{setworkoutDate(e.target.value)}}
          />
          <input type="text" placeholder="Matrix" required
          value={workoutMatrix}
          onChange={(e)=>{setworkoutMatrix(e.target.value)}}
          />
          <textarea type="text" placeholder="Description" required
          value={workoutDescription}
          onChange={(e)=>{setworkoutDescription(e.target.value)}}
          />
          <button type="submit" onClick={createWorkout}>CREATE CURRENT STATUS</button>
        </form>
      </div>
    </div>
  );
}

export default WorkoutStatus;
