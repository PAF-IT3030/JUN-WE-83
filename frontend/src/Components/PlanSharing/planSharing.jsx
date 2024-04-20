import React, { useState } from 'react';
import "./planSharing.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";

function PlanSharing() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: "",
    exercise: "",
    sets: "",
    repetitions: "",
    workoutPlans: "",
    goals: ""
  });
  const [errors, setErrors] = useState({});

  const handleBack = () => navigate(-1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // No errors, submit the form or perform further actions
      console.log("Form submitted:", formData);
    } else {
      // There are errors, set them in the state
      setErrors(errors);
    }
  };

  const validateForm = (data) => {
    let errors = {};

    // Date validation (required)
    if (!data.date) {
      errors.date = "Required";
    }

    // Exercise validation (required)
    if (!data.exercise) {
      errors.exercise = "Required";
    }

    // Sets validation (required)
    if (!data.sets) {
      errors.sets = "Required";
    } else if (isNaN(data.sets)) {
      errors.sets = "Sets must be a number";
    }

    // Repetitions validation (required)
    if (!data.repetitions) {
      errors.repetitions = "Required";
    } else if (isNaN(data.repetitions)) {
      errors.repetitions = "Repetitions must be a number";
    }

    // Workout plans validation (required)
    if (!data.workoutPlans) {
      errors.workoutPlans = "Workout plans are required";
    }

    // Goals validation (required)
    if (!data.goals) {
      errors.goals = "Goals are required";
    }

    return errors;
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
          style={{ marginLeft: 40, fontSize: 24, color: "#1E0443" }}>
          Plan Sharing
        </h1>
      </section>
      <div className="formSection">
        <form className="form-sec" onSubmit={handleSubmit}>
          <div style={{ display: "flex" }}>
            <input
              style={{ width: "50%", marginRight: "30px" }}
              type="date"
              placeholder="Date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            {errors.date && <span className="error">{errors.date}</span>}
            <input
              style={{ width: "50%" }}
              type="text"
              placeholder="Exercise"
              name="exercise"
              value={formData.exercise}
              onChange={handleChange}
            />
            {errors.exercise && <span className="error">{errors.exercise}</span>}
          </div>

          <div style={{ display: "flex" }}>
            <input
              style={{ width: "50%", marginRight: "30px" }}
              type="text"
              placeholder="No of Sets"
              name="sets"
              value={formData.sets}
              onChange={handleChange}
            />
            {errors.sets && <span className="error">{errors.sets}</span>}
            <input
              style={{ width: "50%" }}
              type="text"
              placeholder="No of Repetition"
              name="repetitions"
              value={formData.repetitions}
              onChange={handleChange}
            />
            {errors.repetitions && <span className="error">{errors.repetitions}</span>}
          </div>

          <textarea
            type="text"
            placeholder="Workout Plans"
            name="workoutPlans"
            value={formData.workoutPlans}
            onChange={handleChange}
          />
          {errors.workoutPlans && <span className="error">{errors.workoutPlans}</span>}
          <textarea
            type="text"
            placeholder="Goals"
            name="goals"
            value={formData.goals}
            onChange={handleChange}
          />
          {errors.goals && <span className="error">{errors.goals}</span>}
          <button type="submit">SHARE PLAN</button>
        </form>
      </div>
    </div>
  )
}

export default PlanSharing;