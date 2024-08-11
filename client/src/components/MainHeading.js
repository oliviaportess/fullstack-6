import React from "react";
import "./MainHeading.css";

function MainHeading(props) {
  return <h1 className={`main-heading ${props.className}`}>{props.title}</h1>;
}

export default MainHeading;
