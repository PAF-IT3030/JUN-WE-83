import React from "react";
import { Card, Grid } from "@mui/material";
import landingImage from "../../Images/landingImage.jpg";
import landingbanner from "../../Images/landingbanner.png";
import Login from "./Login";

const Authentication = () => {
  return (
    <div>
      <Grid container>
        <Grid
          style={{
            height: "100%",
            width: "50%",
            display: "flex",
          }}
          item>
          <img
            src={landingbanner}
            style={{ height: "100vh", width: "40%", flex: "1" }}
          />
          <img
            src={landingImage}
            style={{ height: "100vh", width: "60%", flex: "1" }}
          />
        </Grid>
        <Grid item xs={6}>
          <div
            className="px-20 flex flex-col justify-center h-full"
            style={{ backgroundColor: "#1E0443" }}>
            <Card
              className="card p-10"
              style={{
                backgroundColor: "rgba(217, 217, 217, 0.35)",
                height: "70%",
                borderRadius:"10px"
              }}>
              <div className="flex flex-col items-center mb-5 space-y-1">
                <h1
                  className="logo text-center"
                  style={{ color: "white", fontSize: "38px", fontWeight: 600 }}>
                  FitLink - SignIn
                </h1>
                <p
                  className="text-center text-xl w-[70&]"
                  style={{ color: "white" }}>
                  Connecting Lives, Sharing Posts: <br />
                  Your Fitness Social World, Your Way
                </p>
              </div>
              <Login />
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Authentication;
