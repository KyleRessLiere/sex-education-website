import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="navbar">
      <Link href="/">
        <img src="nav-icon.png" alt="nav-ico" className="nav-logo" />
      </Link>
      <div className="nav-buttons">
        <Link href="/about">
          <button className="nav-button">About</button>
        </Link>
        <Link href="/history">
          <button className="nav-button">The History</button>
        </Link>
        <Link href="/map">
          <button className="nav-button">In Your State</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
