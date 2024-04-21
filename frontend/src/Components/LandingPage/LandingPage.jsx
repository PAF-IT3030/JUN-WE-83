import React from "react";
import landingImage from "../../Images/landingImage.jpg";
import landingbanner from "../../Images/landingbanner.png";
import FitLink from "../../Images/FitLink.png";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

export const LandingPage = () => {
  return (
    <div className="flex" style={{ display: "flex", height: "100vh" }}>
      <section
        style={{
          backgroundColor: "#1E0443",
          height: "100%",
          width: "50%",
          display: "flex",
        }}>
        <img
          src={landingbanner}
          style={{ height: "100vh", width: "40%", flex: "1" }}
        />
        <img
          src={landingImage}
          style={{ height: "100vh", width: "60%", flex: "1" }}
        />
      </section>

      <section
        style={{ backgroundColor: "#1E0443", height: "100%", width: "50%" }}>
        <h1
          style={{
            color: "white",
            fontSize: "52px",
            textAlign: "center",
            marginTop: "2%",
            fontWeight: 600,
          }}>
          Happening Now
        </h1>
        <h2
          style={{
            color: "white",
            fontSize: "38px",
            textAlign: "center",
            marginTop: "1%",
            fontWeight: 300,
          }}>
          Join FitLink Today
        </h2>
        <img
          src={FitLink}
          style={{
            width: "200px",
            height: "100px",
            marginLeft: "38%",
            marginTop: "1%",
          }}
        />
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "18%",
          }}>
          <Button
            style={{
              backgroundColor: "rgba(217, 217, 217, 0.35)",
              width: "50%",
              height: "35%",
              borderRadius: "15px",
              color: "white",
              fontSize: "18px",
            }}>
            <GoogleIcon
              style={{ marginRight: "40px", width: 30, height: 30 }}
            />
            Sign in with Google
          </Button>
        </section>

        <h style={{ color: "white", fontSize: "22px", marginLeft: "48%" }}>
          OR
        </h>

        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "18%",
          }}>
          <Button
            style={{
              backgroundColor: "#9367D1",
              width: "50%",
              height: "35%",
              borderRadius: "15px",
              color: "white",
              fontSize: "18px",
              fontWeight: 600,
            }}
            onClick={() => {
              window.location.href =
                "http://localhost:3000/registerauthentication";
            }}>
            Create Account
          </Button>
        </section>
        <h3 style={{ color: "white", marginLeft: "26%" }}>
          By signing up, you agree to the Terms of Services and Privacy Policy,
          <br /> including Cookies Use.
        </h3>
        <h1
          style={{
            color: "white",
            marginTop: "2%",
            fontSize: "26px",
            fontWeight: 600,
            textAlign: "center",
          }}>
          Already Have Account
        </h1>
        <Button
          style={{
            backgroundColor: "rgba(147, 103, 209, 0.01)", // Setting opacity of the background color to 15%
            width: "50%",
            height: "7%",
            borderRadius: "15px",
            color: "white",
            fontSize: "20px",
            fontWeight: 300,
            border: "1px solid white", // Setting border style to solid white
            marginLeft: "25%",
            marginTop: "2%",
          }}
          onClick={() => {
            window.location.href = "http://localhost:3000/authentication";
          }}>
          SIGNIN
        </Button>
      </section>
    </div>
  );
};
