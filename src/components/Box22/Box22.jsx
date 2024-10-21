import React from "react";
import AnimatedImage from "../AnimatedImage/AnimatedImage";
import "../../index.css";
import "./Box22.css";

const Box22 = ({ imageSrc, onImageVisible, isImageVisible }) => {
  return (
    <div className="box22">
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id="clip-shape">
            <path d="M500 500C223.858 500 0 276.142 0 0h312.5c0 103.553 83.947 187.5 187.5 187.5V500z" />
          </clipPath>
        </defs>

        <path
          d="M500 500C223.858 500 0 276.142 0 0h312.5c0 103.553 83.947 187.5 187.5 187.5V500z"
          fill="none"
          stroke="#ddd2d2"
          strokeWidth="4"
        />

        <g clipPath="url(#clip-shape)">
          {isImageVisible ? (
            <AnimatedImage
              imageSrc={imageSrc}
              onAnimationComplete={onImageVisible}
              isVisible={isImageVisible}
              width="500"
              height="500"
              slideDirection="bottom-right" // Pass direction (dynamic)
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

export default Box22;
