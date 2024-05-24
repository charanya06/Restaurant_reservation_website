//import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
      <section className="heroSection" id="heroSection">
        <Navbar />
        <div className="container1">
          <div className="content1">
            <h1 className="coffee">
              A Cup of <br/>Inspiration 
              to <br/>Make Your Day
            </h1>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;
