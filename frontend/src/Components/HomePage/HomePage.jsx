import { Grid } from "@mui/material";
import React from "react";
import Navigation from "../Navigation/Navigation";
import HomeSection from "../HomeSection/HomeSection";
import RightPart from "../RightPart/RightPart";
import { Route, Routes } from "react-router-dom";
import Sharemealplan from "../MealPlan/Sharemealplan";


const HomePage = () => {
  return (
    <Grid
      container
      xs={12}
      className="px-5 lg:px-20 justify-between"
      style={{ backgroundColor: "#1E0443" }}>
      <Grid item xs={0} lg={2.5} className=" hidden lg:block w-full relative">
        <Navigation />
      </Grid>

      <Grid
        item
        xs={12}
        lg={6}
        className="px-5 lg:px-9 hidden lg:block w-full relative"
        style={{ backgroundColor: "#ffffff" }}>
        <Routes>
          <Route path="/" element={<HomeSection />}></Route>
          <Route path="/MealPlan" element={<Sharemealplan/>}></Route>
  
        
        </Routes>
      </Grid>

      <Grid item xs={0} lg={3} className="hidden lg:block w-full relative">
        <div style={{ position: "fixed", width: "100%", zIndex: "100" }}>
          <RightPart />
        </div>
      </Grid>
    </Grid>
  );
};

export default HomePage;
