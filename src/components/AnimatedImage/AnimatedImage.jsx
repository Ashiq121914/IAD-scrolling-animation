import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./AnimatedImage.css";

const AnimatedImage = ({
  imageSrc,
  isVisible,
  slideDirection,
  height,
  width,
  style,
}) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    let initialX = 0;
    let initialY = 0;
    let finalX = 0;
    let finalY = 0;

    // Set initial and final positions based on slide direction
    switch (slideDirection) {
      case "top":
        initialY = "-100%"; // Start from above
        finalY = "0%"; // Slide to its final position
        break;
      case "bottom":
        initialY = "100%"; // Start from below
        finalY = "0%"; // Slide to its final position
        break;
      case "left":
        initialX = "-100%"; // Start from the left
        finalX = "0%"; // Slide to its final position
        break;
      case "right":
        initialX = "100%"; // Start from the right
        finalX = "0%"; // Slide to its final position
        break;
      case "top-left":
        initialX = "-100%"; // Start from the left
        initialY = "-100%"; // Start from above
        finalX = "0%"; // Slide to its final position
        finalY = "0%";
        break;
      case "top-right":
        initialX = "100%"; // Start from the right
        initialY = "-100%"; // Start from above
        finalX = "0%"; // Slide to its final position
        finalY = "0%";
        break;
      case "bottom-left":
        initialX = "-100%"; // Start from the left
        initialY = "100%"; // Start from below
        finalX = "0%"; // Slide to its final position
        finalY = "0%";
        break;
      case "bottom-right":
        initialX = "100%"; // Start from the right
        initialY = "100%"; // Start from below
        finalX = "0%"; // Slide to its final position
        finalY = "0%";
        break;
      default:
        initialY = "-100%"; // Default to sliding from above
        finalY = "0%"; // Slide to its final position
        break;
    }

    if (isVisible) {
      // Animate the image sliding in
      gsap.fromTo(
        img,
        { x: initialX, y: initialY, opacity: 0 }, // Start position
        {
          x: finalX, // Slide to final position
          y: finalY,
          opacity: 1,
          duration: 0.8,
        }
      );
      img.style.opacity = "1";
    } else {
      // Animate the image sliding out
      gsap.to(img, {
        x: slideDirection.includes("left")
          ? "-100%"
          : slideDirection.includes("right")
          ? "100%"
          : "0%",
        y: slideDirection.includes("top")
          ? "-100%"
          : slideDirection.includes("bottom")
          ? "100%"
          : "0%",
        opacity: 0.5,
        duration: 1,
      });
    }
    img.style.opacity = "1";
  }, [isVisible, slideDirection]);

  return (
    <svg
      style={style}
      width={width}
      height={height}
      preserveAspectRatio="xMidYMid slice"
    >
      <image
        className="animatedImage"
        height={height}
        width={width}
        ref={imgRef}
        href={imageSrc}
      />
    </svg>
  );
};

export default AnimatedImage;
