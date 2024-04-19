import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import FitLinkCard from "../HomeSection/FitLinkCard";
import { Divider } from "@mui/material";

const FitLinkDetails = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <React.Fragment>
      <section className={`z-50 flex items-center sticky top-0 bg-opacity-95 `}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1
          className="py-5 text-xl font-bold opacity-90"
          style={{ marginLeft: 40, fontSize: 24, color: "#1E0443" }}>
          FitLinks
        </h1>
      </section>

      <section className="mt-10">
        <FitLinkCard />
        <Divider sx={{margin:"2rem 0rem"}}/>
      </section>

      <section>
      {[1,1,1].map((item)=><FitLinkCard/>)}
      </section>
    </React.Fragment>
  );
};

export default FitLinkDetails;
