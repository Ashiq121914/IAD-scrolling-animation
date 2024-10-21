import React from "react";
import "../../index.css";
import "./Box13.css";
import AnimatedImage from "../AnimatedImage/AnimatedImage";

const Box13 = ({ imageSrc, onImageVisible, isImageVisible }) => {
  let slideDirection =
    isImageVisible == 13 ? (slideDirection = "right") : "left";
  return (
    <div className="box13" id="box13">
      <svg
        viewBox="0 0 800 500"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath>
            <path
              d="M0 0 L800 0 L800 500 L0 500 Z"
              fill="none"
              stroke="white"
              stroke-width="5"
            />
          </clipPath>
        </defs>

        <polygon
          id="strokeBox"
          points="0 0, 800 0, 800 500, 0 500"
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
              height="800"
              width="800"
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

export default Box13;
