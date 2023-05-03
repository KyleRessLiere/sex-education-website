import React from "react";
import Navbar from "../components/Navbar/Navbar";
function about() {
  return (
    <div>
      <Navbar />
      <img src="mission.png" alt="nav-ico" className="about-img" />
      <img src="whatIs.png" alt="nav-ico" className="about-img" />
      <img src="cse.png" alt="nav-ico" className="about-img" />
      <img src="content.png" alt="nav-ico" className="about-img" />
      <img src="conclusion.png" alt="nav-ico" className="about-img" />

      <img src="about.png" alt="nav-ico" className="about-img" />
    </div>
  );
}

export default about;
