import React, { useState } from "react";
import "./WorkoutStatus.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function WorkoutStatus() {
  const handleBack = () => navigate(-1);
  const navigate = useNavigate();

  const [workoutName, setworkoutName] = useState("");
  const [workoutDate, setworkoutDate] = useState("");
  const [workoutMatrix, setworkoutMatrix] = useState("");
  const [workoutDescription, setworkoutDescription] = useState("");

  const createWorkout = async (e) => {
    e.preventDefault();

    try {
      // Check if any field is empty
      if (
        !workoutName ||
        !workoutDate ||
        !workoutMatrix ||
        !workoutDescription
      ) {
        // Show SweetAlert for required fields
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "All fields are required",
        });
        return;
      }

      //match only numbers
      const numbersRegex = /^[0-9]+$/;

      // Check if matrix contains only numbers
      if (!numbersRegex.test(workoutMatrix)) {
        // Show SweetAlert for invalid input
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Matrix should contain only numbers",
        });
        return;
      }

      const response = await axios.post(
        "http://localhost:8087/api/v1/workout/save",
        {
          workoutName,
          workoutDate,
          workoutMatrix,
          workoutDescription,
        }
      );

      console.log(response.data);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Workout created successfully",
      });

      setworkoutName("");
      setworkoutDate("");
      setworkoutMatrix("");
      setworkoutDescription("");
      navigate("/");
    } catch (error) {
      console.log("error creating workout", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error creating workout",
      });
    }
  };

  return (
    <div className="WorkoutStatus">
      <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1
          className="py-5 text-xl font-bold opacity-90"
          style={{ marginLeft: 40, fontSize: 24, color: "#1E0443" }}
        >
          Create Workout Status
        </h1>
      </section>
      <div className="formSection">
        <form className="form-sec">
          <input
            type="text"
            placeholder="Exercise"
            required
            value={workoutName}
            onChange={(e) => {
              setworkoutName(e.target.value);
            }}
          />
          <input
            type="date"
            placeholder="Date"
            required
            value={workoutDate}
            onChange={(e) => {
              setworkoutDate(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Matrix"
            required
            value={workoutMatrix}
            onChange={(e) => {
              setworkoutMatrix(e.target.value);
            }}
          />
          <textarea
            type="text"
            placeholder="Description"
            required
            value={workoutDescription}
            onChange={(e) => {
              setworkoutDescription(e.target.value);
            }}
          />
          <button type="button" onClick={createWorkout}>
            CREATE CURRENT STATUS
          </button>
        </form>
      </div>
    </div>
  );
}

export default WorkoutStatus;
