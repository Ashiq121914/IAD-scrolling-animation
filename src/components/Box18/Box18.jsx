import React from "react";
import "../../index.css";
import "./Box18.css";
import AnimatedImage from "../AnimatedImage/AnimatedImage";

const Box18 = ({ imageSrc, onImageVisible, isImageVisible }) => {
  let slideDirection =
    isImageVisible == 7 ? (slideDirection = "right") : "left";
  return (
    <div className="box18" id="box18">
      <svg
        viewBox="0 0 800 500"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath>
            <path
              d="M0 0 L500 0 L500 500 L0 500 Z"
              fill="none"
              stroke="white"
              stroke-width="5"
            />
          </clipPath>
        </defs>

        <polygon
          id="strokeBox"
          points="0 0, 500 0, 500 500, 0 500"
          vectorEffect="non-scaling-stroke"
          fill="none"
          stroke="white"
          strokeWidth="4"
        ></polygon>

        <g>
          {isImageVisible ? (
            <AnimatedImage
              imageSrc={imageSrc}
              onAnimationComplete={onImageVisible}
              isVisible={isImageVisible}
              slideDirection={slideDirection}
              height="500"
              width="500"
            />
          ) : null}
        </g>
      </svg>
      {/* Tooltip */}
      <div className="tooltip">
        <p>dummy text!</p>
      </div>
    </div>
  );
};

export default Box18;
