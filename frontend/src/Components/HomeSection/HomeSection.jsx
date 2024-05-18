import React from "react";
import WorkoutStatusCard from "../WorkoutStatusCard/WorkoutStatusCard";
import PlanSharingCard from "../PlanSharingCard/PlanSharingCard";
import FitLinkCard from "./FitLinkCard";
import Mealplancard from "../MealPlanCard/Mealplancard";

const HomeSection = () => {
  return (
    <div className="space-y-5">
      <section>
        <h1
          className="py-5 text-xl font-bold opacity-90"
          style={{ marginLeft: 40, fontSize: 24, color: "#1E0443" }}
        >
          Home
        </h1>
      </section>

      <section>
        {[1].map((item, index) => (
          <FitLinkCard key={index} />
        ))}

        {[1].map((item, index) => (
          <WorkoutStatusCard key={index} />
        ))}

        {[1].map((item, index) => (
          <PlanSharingCard key={index} />
        ))}
        
        {[1].map((item, index) => (
          <Mealplancard key={index} />
        ))}
      </section>
    </div>
  );
};

export default HomeSection;
