import React from "react";
import "./BackgroundScreen.css";

function BackgroundScreen(props) {
  return (
    <div
      className="background-screen"
      style={{ backgroundImage: `url(${props.url})` }}
    ></div>
  );
}

export default BackgroundScreen;
