
import "./CircularScore.css";
import React from "react";
import {CircularProgressbarWithChildren} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularScore = (props) => {
  const { score, grade } = props;

  return (
    <div className="circular-score-container m-auto">
      <CircularProgressbarWithChildren
        value={score}
        text={score} 
        circleRatio={0.7}
        styles={{
          trail: {
            strokeLinecap: "round",
            transform: "rotate(-126deg)",
            transformOrigin: "center center",
            stroke: "#e9d8a6",
          },
          path: {
            strokeLinecap: "round",
            transform: "rotate(-126deg)",
            transformOrigin: "center center",
            stroke: "#60d394",
          },
          text: {
            fill: "#000",
            fontSize: "28px",
          },
        }}
        strokeWidth={10}
      >
        <div
          className="circular-progress-title"
          style={{ fontSize: 16, marginTop: -5 }}
        >
          <div> <h2>%</h2> </div>
          {/* <div> GRADE </div> */}
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default CircularScore;
