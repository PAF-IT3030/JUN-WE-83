import React from "react";
import WorkoutStatusCard from "../WorkoutStatusCard/WorkoutStatusCard";


const HomeSection = () => {
  
  return (
    <div className="space-y-5">
      <section>
        <h1
          className="py-5 text-xl font-bold opacity-90"
          style={{ marginLeft: 40, fontSize: 24, color: "#1E0443" }}>
          Home
        </h1>
        <WorkoutStatusCard/>
      </section>

     
    </div>
  );
};

export default HomeSection;
