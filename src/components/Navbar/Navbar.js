import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <img src="nav-icon.png" alt="nav-ico" className="nav-logo" />
      <div className="nav-buttons">
        <button className="nav-button">About</button>
        <button className="nav-button">The History</button>
        <button className="nav-button">Advocacy Work</button>
        <button className="nav-button">In Your State</button>
      </div>
    </div>
  );
}

export default Navbar;
