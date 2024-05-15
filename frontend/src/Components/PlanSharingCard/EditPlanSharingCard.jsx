import React, { useState, useEffect } from "react";
import axios from "axios";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function EditPlanSharingCard() {
  const handleBack = () => navigate(-1);
  const navigate = useNavigate();

  const { id } = useParams();
  const [date, setDate] = useState("");
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [repetitions, setRepetitions] = useState("");
  const [workoutPlans, setWorkoutPlans] = useState("");
  const [goals, setGoals] = useState("");

  useEffect(() => {
    async function fetchdata() {
      try {
        const result = await axios.get(
          `http://localhost:8087/api/v1/WorkoutPlan/workoutPlan/${id}`
        );
        const workoutplandata = result.data;
        setDate(workoutplandata.date);
        setExercise(workoutplandata.exercise);
        setSets(workoutplandata.sets);
        setRepetitions(workoutplandata.repetitions);
        setWorkoutPlans(workoutplandata.workoutPlans);
        setGoals(workoutplandata.goals);

        console.log(workoutplandata);
      } catch (error) {
        console.log("error fetching", error);
      }
    }
    fetchdata();
  }, [id]);

  const updatePlansharing = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !date ||
      !exercise ||
      !sets ||
      !repetitions ||
      !workoutPlans ||
      !goals
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "All fields are required",
      });
      return;
    }

    // Validate workoutMatrix is numeric
    if (isNaN(repetitions)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "repetitions should be a number",
      });
      return;
    }
    // Validate workoutMatrix is numeric
    if (isNaN(sets)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "sets should be a number",
      });
      return;
    }

    // Show confirmation message before updating
    const confirmResult = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update the workout details?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    });

    if (confirmResult.isConfirmed) {
      try {
        const result = await axios.put(
          `http://localhost:8087/api/v1/WorkoutPlan/edit/${id}`,
          {
            date: date,
            exercise: exercise,
            sets: sets,
            repetitions: repetitions,
            workoutPlans: workoutPlans,
            goals: goals,
          }
        );

        // Check if the update was successful
        if (result.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "planshare details updated successfully",
          });
          navigate("/");
        } else {
          // Handle the case where the update failed
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to update planshare details",
          });
        }
      } catch (error) {
        // Handle any errors that occur during the update process
        console.error("Error updating plan sharing:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "An error occurred while updating paln sharing details",
        });
      }
    }
  };

  return (
    <div className="PlanSharing">
      <section className="sticky top-0 z-50 flex items-center bg-opacity-95">
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1
          className="py-5 text-xl font-bold opacity-90"
          style={{ marginLeft: 40, fontSize: 24, color: "#1E0443" }}
        >
          Update Plan Sharing
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

          <textarea
            type="text"
            placeholder="Goals"
            name="goals"
            value={goals}
            onChange={(e) => {
              setGoals(e.target.value);
            }}
          />

          <button type="submit" onClick={updatePlansharing}>
            UPDATE SHARE PLAN
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditPlanSharingCard;
