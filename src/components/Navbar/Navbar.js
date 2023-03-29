import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar">
      <img src="nav-icon.png" alt="nav-ico" className="nav-logo" />
      <div className="nav-buttons">
        <button className="nav-button">About</button>
        <Link href="/history">
          <button className="nav-button">The History</button>
        </Link>
        <button className="nav-button">Advocacy Work</button>
        <button className="nav-button">In Your State</button>
      </div>
    </div>
  );
}

export default Navbar;
