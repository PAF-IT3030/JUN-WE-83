import { Grid } from "@mui/material";
import React from "react";
import Navigation from "../Navigation/Navigation";
import HomeSection from "../HomeSection/HomeSection";
import RightPart from "../RightPart/RightPart";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";
import FitLinkDetails from "../FitLinkDetails/FitLinkDetails";
import WorkoutStatus from "../WorkoutStatus/WorkoutStatus";

const HomePage = () => {
  return (
    <Grid
      container
      xs={12}
      className="justify-between px-5 lg:px-20"
      style={{ backgroundColor: "#1E0443" }}>
      <Grid item xs={0} lg={2.5} className="relative hidden w-full lg:block">
        <Navigation />
      </Grid>

      <Grid
        item
        xs={12}
        lg={6}
        className="relative hidden w-full px-5 lg:px-9 lg:block"
        style={{ backgroundColor: "#ffffff" }}>
        <Routes>
          <Route path="/" element={<HomeSection />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
          <Route path="/fitlink/:id" element={<FitLinkDetails />}></Route>
          <Route path="/workoutstatus" element={<WorkoutStatus />}></Route>
        </Routes>
      </Grid>

      <Grid item xs={0} lg={3} className="relative hidden w-full lg:block">
        <div style={{ position: "fixed", width: "100%", zIndex: "100" }}>
          <RightPart />
        </div>
      </Grid>
    </Grid>
  );
};

export default HomePage;
