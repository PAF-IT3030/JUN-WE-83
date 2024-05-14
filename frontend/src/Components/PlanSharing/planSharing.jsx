import React, { useState } from "react";
import "./planSharing.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";



function PlanSharing() {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  const [date, setDate] = useState("");
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [repetitions, setRepetitions] = useState("");
  const [workoutPlans, setWorkoutPlans] = useState("");
  const [goals, setGoals] = useState("");


  const createWorkoutPlan = async (e) => {
    e.preventDefault();

    try {

      // Check if any field is empty
      if (
        !date ||
        !exercise ||
        !sets ||
        !repetitions ||
        !workoutPlans ||
        !goals
      ) {
        // Show SweetAlert for required fields
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "All fields are required",
        });

        return;
      }

      // Validate sets and repetitions are numbers
    if (isNaN(sets) || isNaN(repetitions)) {
      // Show SweetAlert for invalid input
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Sets and Repetitions must be numbers",
      });
      return;
    }

      const response = await axios.post(
        "http://localhost:8087/api/v1/WorkoutPlan/save",
        {
          date,
          exercise,
          sets,
          repetitions,
          workoutPlans,
          goals
        }
      );

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Workout created successfully",
      });


      setDate("");
      setExercise("");
      setSets("");
      setRepetitions("");
      setRepetitions("");
      setGoals("");
      navigate("/");




    } catch (error) {
      console.log("error creating workout plan", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred while creating the workout plan",
      });
    }
  };



  return (
    <div className="PlanSharing">
      <section className="z-50 flex items-center sticky top-0 bg-opacity-95">
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1
          className="py-5 text-xl font-bold opacity-90"
          style={{ marginLeft: 40, fontSize: 24, color: "#1E0443" }}
        >
          Plan Sharing
        </h1>
      </section>
      <div className="formSection">
        <form className="form-sec">
          <div style={{ display: "flex" }}>
            <input
              style={{ width: "50%", marginRight: "30px" }}
              type="date"
              placeholder="Date"
              name="date"
              value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            />

            <input
              style={{ width: "50%" }}
              type="text"
              placeholder="Exercise"
              name="exercise"
              value={exercise}
            onChange={(e) => {
              setExercise(e.target.value);
            }}
            />
          </div>

          <div style={{ display: "flex" }}>
            <input
              style={{ width: "50%", marginRight: "30px" }}
              type="text"
              placeholder="No of Sets"
              name="sets"
              value={sets}
            onChange={(e) => {
              setSets(e.target.value);
            }}
            />

            <input
              style={{ width: "50%" }}
              type="text"
              placeholder="No of Repetition"
              name="repetitions"
              value={repetitions}
            onChange={(e) => {
              setRepetitions(e.target.value);
            }}
            />
           
          </div>

          <textarea
            type="text"
            placeholder="Workout Plans"
            name="workoutPlans"
            value={workoutPlans}
            onChange={(e) => {
              setWorkoutPlans(e.target.value);
            }}
          />

          <textarea type="text" placeholder="Goals" name="goals" value={goals}
            onChange={(e) => {
              setGoals(e.target.value);
            }}/>

          <button type="submit" onClick={createWorkoutPlan}>SHARE PLAN</button>
        </form>
      </div>
    </div>
  );
}

export default PlanSharing;
