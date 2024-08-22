import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./BackgroundScreen.css";

import gridImage from "../images/grid.png";
import generalImage from "../images/general_knowledge.png";
import entertainmentImage from "../images/entertainment.png";
import scienceImage from "../images/science.png";
import artImage from "../images/art.png";
import animalImage from "../images/animal.png";

function BackgroundScreen(props) {
  const category = useSelector((state) => state.quizForm.category);

  const [imageUrl, setImageUrl] = useState(props.url);

  useEffect(() => {
    switch (category) {
      case "9": // General Knowledge
        setImageUrl(generalImage);
        break;
      case "10": // Entertainment categories
      case "11":
      case "12":
      case "13":
      case "14":
      case "15":
      case "16":
      case "29":
      case "31":
      case "32":
        setImageUrl(entertainmentImage);
        break;
      case "17": // Science categories
      case "18":
      case "19":
      case "30":
        setImageUrl(scienceImage);
        break;
      case "25": // Art
        setImageUrl(artImage);
        break;
      case "27": // Animals
        setImageUrl(animalImage);
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
