import React from "react";

import "./NeonLink.css";

const NeonLink = (props) => {
  return (
    <a href={props.link} className={`neon-link ${props.className}`}>
      {props.iconClass && (
        <i className={`${props.iconClass} icon-margin fa-lg`}></i>
      )}
      {props.linkName}
    </a>
  );
};

export default NeonLink;
