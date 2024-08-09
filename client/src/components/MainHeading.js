import React from "react";
import "./MainHeading.css";

function MainHeading(props) {
  return <h1 className="heading-gradient">{props.title}</h1>;
}

export default MainHeading;
