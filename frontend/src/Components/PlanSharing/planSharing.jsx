import React from 'react'
import "./planSharing.css"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";

function PlanSharing() {

  const handleBack = () => navigate(-1);
  const navigate = useNavigate();

  return (
    <div className="PlanSharing">
      <section className={`z-50 flex items-center sticky top-0 bg-opacity-95`}>
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
        <form className="form-sec">
        <div style={{display:"flex"}}>
        <input style = {{width:"50%", marginRight:"30px"}} type="date" placeholder="Date" />
        <input style = {{width:"50%"}} type="text" placeholder="Exercise" />
        </div>

        <div style={{display:"flex"}}>
        <input style = {{width:"50%", marginRight:"30px"}} type="text" placeholder="No of Sets" />
        <input style = {{width:"50%"}} type="text" placeholder="No of Repetition" />
        </div>

          
          <textarea type="text" placeholder="Goals" />
          <button type="submit">SHARE PLAN</button>
        </form>
      </div>
    </div>
  )
}

export default PlanSharing