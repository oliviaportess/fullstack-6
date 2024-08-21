import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./BackgroundScreen.css";
import soojinImage from "../images/soojin.png";
import gridImage from "../images/grid.png";

function BackgroundScreen(props) {
  // const dispatch = useDispatch();
  const category = useSelector((state) => state.quizForm.category);

  const [imageUrl, setImageUrl] = useState(props.url);

  useEffect(() => {
    switch (category) {
      case "9": // General Knowledge
        setImageUrl(soojinImage);
        break;
      case "17": // Science & Nature
        setImageUrl("");
        break;
      case "25": // Art
        setImageUrl("");
        break;
      default:
        setImageUrl(gridImage);
    }
  }, [category]);

  return (
    <div
      className="background-screen"
      style={{ backgroundImage: `url(${imageUrl})` }}
      data-testid="background-screen"
    ></div>
  );
}

export default BackgroundScreen;
