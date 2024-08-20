import React from "react";
import "./BackgroundScreen.css";

function BackgroundScreen(props) {
  return (
    <div
      className="background-screen"
      style={{ backgroundImage: `url(${props.url})` }}
      data-testid="background-screen"
    ></div>
  );
}

export default BackgroundScreen;
