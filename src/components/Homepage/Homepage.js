import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import WhatWeDo from "./WhatWeDo";
import Navbar from "../Navbar/Navbar";

function Homepage() {
  return (
    <div>
      <Navbar />
      <WhatWeDo />
    </div>
  );
}

export default Homepage;
