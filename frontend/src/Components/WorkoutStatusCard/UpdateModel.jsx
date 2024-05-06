import React, { useState, useEffect } from "react";
import "./UpdateModel.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateModel() {
  const handleBack = () => navigate(-1);
  const navigate = useNavigate();

  const { id } = useParams();
  const [workoutName, setworkoutName] = useState("");
  const [workoutDate, setworkoutDate] = useState("");
  const [workoutMatrix, setworkoutMatrix] = useState("");
  const [workoutDescription, setworkoutDescription] = useState("");

  useEffect(() => {
    async function fetchdata() {
      try {
        const result = await axios.get(
          `http://localhost:8087/api/v1/workout/workout/${id}`
        );
        const workoutdata = result.data;
        setworkoutName(workoutdata.workoutName);
        setworkoutDate(workoutdata.workoutDate);
        setworkoutMatrix(workoutdata.workoutMatrix);
        setworkoutDescription(workoutdata.workoutDescription);

        console.log(workoutdata);
      } catch (error) {
        console.log("error fetching", error);
      }
    }
    fetchdata();
  }, [id]);

  const updatedata = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.put(`http://localhost:8087/api/v1/workout/edit/${id}`, {
        workoutName,
        workoutDate,
        workoutMatrix,
        workoutDescription,
      });

      if (
        result.data &&
        result.data.message === "Workout details updated successfully"
      ) {
        alert("Updated Success");
        navigate("/");
      } else {
        console.log("Unexpected API response:", result.data);
      }
    } catch (error) {
      console.error("Error updating workout:", error);
    }
  };

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
          <input
            type="text"
            placeholder="Exercise"
            required
            value={workoutName}
            onChange={(e) => setworkoutName(e.target.value)}
          />
          <input
            type="date"
            placeholder="Date"
            required
            value={workoutDate}
            onChange={(e) => setworkoutDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="Matrix"
            required
            value={workoutMatrix}
            onChange={(e) => setworkoutMatrix(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Description"
            required
            value={workoutDescription}
            onChange={(e) => setworkoutDescription(e.target.value)}
          />
          <button type="button">UPDATE CURRENT STATUS</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateModel;
