import React from "react";
import Navbar from "../components/Navbar";
import MainHeading from "../components/MainHeading";
import Button from "../components/Button";

function LandingPage() {
  return (
    <div className="container">
      <Navbar />
      <MainHeading title="Welcom to" />
      <Button text="Let's get quizzing!" />
    </div>
  );
}

export default LandingPage;
