import React from "react";

import "./NeonLink.css";

const NeonLink = (props) => {

    return (
            <a className="neonLink" href={props.link}>{props.linkName}</a>
      );
};

export default NeonLink;
