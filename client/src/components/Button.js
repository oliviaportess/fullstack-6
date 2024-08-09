import React from "react";
import "./Button.css";

function Button(props) {
    return (
       <button className="button-link">
          <span className="blinking">{">"}</span> {props.text}
      </button>
    );
};

export default Button;
