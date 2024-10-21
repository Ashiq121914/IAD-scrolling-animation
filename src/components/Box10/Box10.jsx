import React from "react";
import "./Box10.css";
import "../../index.css";
import AnimatedImage from "../AnimatedImage/AnimatedImage";

const Box10 = ({ imageSrc, onImageVisible, isImageVisible }) => {
  let slideDirection =
    isImageVisible == 10 ? (slideDirection = "top-left") : "bottom-right";
  return (
    <div className="box10">
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="box3-title"
      >
        <defs>
          <clipPath id="clip-shape3">
            <path d="M500 500C223.858 500 0 276.142 0 0h312.5c0 103.553 83.947 187.5 187.5 187.5V500z" />
          </clipPath>
        </defs>

        <path
          d="M500 500C223.858 500 0 276.142 0 0h312.5c0 103.553 83.947 187.5 187.5 187.5V500z"
          fill="none"
          stroke="#ddd2d2"
          strokeWidth="4"
        />
        <g clipPath="url(#clip-shape3)">
          {isImageVisible && (
            <AnimatedImage
              imageSrc={imageSrc}
              onAnimationComplete={onImageVisible}
              isVisible={isImageVisible}
              width="500"
              height="500"
              slideDirection={slideDirection}
            />
          )}
        </g>
      </svg>
      {/* Tooltip */}
      <div className="tooltip">
        <p>dummy text!</p>
      </div>
    </div>
  );
};

export default Box10;
