import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const RightPart = () => {
  return (
    <div className="py-20 sticky top">
      <div className="relative flex items-center space-x-10">
        <input
          type="text"
          className="py-3 rounded-full text-gray-500 w-full pl-12"
          style={{ marginLeft: "60px", width:"360px" }}
          placeholder="Search here"
        />
        <div className="absolute top-0 left-0 pl-3 pt-3">
          <SearchIcon
            className="text-gray-500"
            style={{ marginLeft: "30px" }}
          />
        </div>
      </div>

      <section className="my-10">
        <h1
          className="text-xl font-semibold"
          style={{ marginLeft: "60px", color: "white", fontSize: 26 }}>
          Get Verified
        </h1>
        <h1
          className="font-xl my-2"
          style={{ marginLeft: "60px", color: "white", fontSize: 22 }}>
          Subscribe to unlock new Features
        </h1>
      </section>

      <section className="mt-10 space-y-5">
        <h1
          className="font-bold text-xl py-1"
          style={{ color: "white", marginLeft: "60px" }}>
          What's happening
        </h1>

        <div>
          <p
            className="text-sm"
            style={{ color: "white", marginLeft: "60px", fontSize: "18px" }}>
            FitLink Relax Steps . LIVE
          </p>
          <p
            className="font-bold"
            style={{ color: "white", marginLeft: "60px", fontSize: "20px" }}>
            Women vs Men
          </p>
          <div className="w-full mt-10">
            <div>
                <p style={{ color: "white", marginLeft: "60px", fontSize: "20px" }}>Wellness . Trending</p>
                <p className="font-bold" style={{ color: "white", marginLeft: "60px", fontSize: "18px" }}>#TheMarvels</p>
                <p style={{ color: "white", marginLeft: "60px", fontSize: "18px" }}>34.3k Links</p>
            </div>
            <div className="w-full mt-10">
                <p style={{ color: "white", marginLeft: "60px", fontSize: "20px" }}>Fitness . Trending</p>
                <p className="font-bold" style={{ color: "white", marginLeft: "60px", fontSize: "18px" }}>#TheDarken</p>
                <p style={{ color: "white", marginLeft: "60px", fontSize: "18px" }}>39.3k Links</p>
            </div>
            <div className="w-full mt-10">
                <p style={{ color: "white", marginLeft: "60px", fontSize: "20px" }}>Wellness . Trending</p>
                <p className="font-bold" style={{ color: "white", marginLeft: "60px", fontSize: "18px" }}>#TheMarvels</p>
                <p style={{ color: "white", marginLeft: "60px", fontSize: "18px" }}>37.9k Links</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RightPart;
