import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import WhatWeDo from "./WhatWeDo";
import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";
function Homepage() {
  return (
    <div>
      <Navbar />
      <Landing />
    </div>
  );
}

export default Homepage;
