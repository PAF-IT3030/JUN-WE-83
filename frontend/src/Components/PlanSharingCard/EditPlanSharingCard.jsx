import React from 'react'

function EditPlanSharingCard() {


    
  return (
    <div className="PlanSharing">
      <section className="z-50 flex items-center sticky top-0 bg-opacity-95">
        
          
          
       
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
              
            
            />

            <input
              style={{ width: "50%" }}
              type="text"
              placeholder="Exercise"
              name="exercise"
              
            />
          </div>

          <div style={{ display: "flex" }}>
            <input
              style={{ width: "50%", marginRight: "30px" }}
              type="text"
              placeholder="No of Sets"
              name="sets"
              
            />

            <input
              style={{ width: "50%" }}
              type="text"
              placeholder="No of Repetition"
              name="repetitions"
              
            />
           
          </div>

          <textarea
            type="text"
            placeholder="Workout Plans"
            name="workoutPlans"
            
          />

          <textarea type="text" placeholder="Goals" name="goals" />
            
             

          <button type="submit">SHARE PLAN</button>
        </form>
      </div>
    </div>
  );
}

export default EditPlanSharingCard