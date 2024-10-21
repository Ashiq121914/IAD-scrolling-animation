// import React, { useState, useEffect } from "react";
// import "./index.css";
// import Box from "./components/Box/Box";
// import Box2 from "./components/Box2/Box2";
// import Box3 from "./components/Box3/Box3";
// import Box4 from "./components/Box4/Box4";
// import Box6 from "./components/Box6/Box6";
// import Box5 from "./components/Box5/Box5";
// import Box7 from "./components/Box7/Box7";
// import Box8 from "./components/Box8/Box8";
// import Box9 from "./components/Box9/Box9";
// import Box10 from "./components/Box10/Box10";
// import Gap from "./components/Gap/Gap.jsx";
// import imageSrc from "../src/assets/testImage.jpg";
// import imageSrc2 from "../src/assets/testImage.jpg";
// import imageSrc3 from "../src/assets/testImage.jpg";
// import Box11 from "./components/Box11/Box11.jsx";
// import Box12 from "./components/Box12/Box12.jsx";
// import Box13 from "./components/Box13/Box13.jsx";
// import Box14 from "./components/Box14/Box14.jsx";
// import Box15 from "./components/Box15/Box15.jsx";
// import Box16 from "./components/Box16/Box16.jsx";
// import Box17 from "./components/Box17/Box17.jsx";
// import Box18 from "./components/Box18/Box18.jsx";
// import Box19 from "./components/Box19/Box19.jsx";
// import Box20 from "./components/Box20/Box20.jsx";
// import Box21 from "./components/Box21/Box21.jsx";
// import Box22 from "./components/Box22/Box22.jsx";
// import Box23 from "./components/Box23/Box23.jsx";
// import Box24 from "./components/Box24/Box24.jsx";
// import Box25 from "./components/Box25/Box25.jsx";

// const App = () => {
//   const [currentBox, setCurrentBox] = useState(1); // Start with Box 1

//   const handleScroll = (event) => {
//     const delta = Math.sign(event.deltaY * 2);
//     setCurrentBox((prev) => {
//       if (delta > 0) {
//         // Scrolling down
//         return prev < 25 ? prev + 1 : prev; // Move to next box if not already at the last one
//       } else {
//         // Scrolling up
//         return prev > 1 ? prev - 1 : prev; // Move to previous box if not already at the first one
//       }
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("wheel", handleScroll, { passive: true });
//     return () => {
//       window.removeEventListener("wheel", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="container">
//       <div className="grid">
//         <Box imageSrc={imageSrc} isImageVisible={currentBox === 1} />
//         <Box2 imageSrc={imageSrc2} isImageVisible={currentBox === 2} />
//         <Box3 imageSrc={imageSrc3} isImageVisible={currentBox === 3} />
//         <Box4 imageSrc={imageSrc3} isImageVisible={currentBox === 6} />
//         <Box5 imageSrc={imageSrc3} isImageVisible={currentBox === 5} />
//         <Box6 imageSrc={imageSrc3} isImageVisible={currentBox === 4} />
//         <Box7 imageSrc={imageSrc3} isImageVisible={currentBox === 7} />
//         <Gap />
//         <Gap />

//         <Box8 imageSrc={imageSrc3} isImageVisible={currentBox === 8} />
//         <Box9 imageSrc={imageSrc3} isImageVisible={currentBox === 9} />
//         <Box10 imageSrc={imageSrc3} isImageVisible={currentBox === 10} />
//         <Box11 imageSrc={imageSrc3} isImageVisible={currentBox === 11} />
//         <Box12 imageSrc={imageSrc3} isImageVisible={currentBox === 12} />

//         <Box13 imageSrc={imageSrc3} isImageVisible={currentBox === 13} />
//         <Box14 imageSrc={imageSrc3} isImageVisible={currentBox === 14} />
//         <Box15 imageSrc={imageSrc3} isImageVisible={currentBox === 15} />
//         <Box16 imageSrc={imageSrc3} isImageVisible={currentBox === 16} />
//         <Box17 imageSrc={imageSrc3} isImageVisible={currentBox === 17} />
//         <Box18 imageSrc={imageSrc3} isImageVisible={currentBox === 18} />
//         <Box19 imageSrc={imageSrc3} isImageVisible={currentBox === 19} />
//         <Box20 imageSrc={imageSrc3} isImageVisible={currentBox === 20} />
//         <Box21 imageSrc={imageSrc3} isImageVisible={currentBox === 21} />
//         <Box22 imageSrc={imageSrc3} isImageVisible={currentBox === 22} />
//         <Box23 imageSrc={imageSrc3} isImageVisible={currentBox === 23} />
//         <Box24 imageSrc={imageSrc3} isImageVisible={currentBox === 24} />
//         <Box25 imageSrc={imageSrc3} isImageVisible={currentBox === 25} />
//       </div>
//     </div>
//   );
// };

// export default App;

// version 2
import React, { useState, useEffect } from "react";
import "./index.css";
import Box from "./components/Box/Box";
import Box2 from "./components/Box2/Box2";
import Box3 from "./components/Box3/Box3";
import Box4 from "./components/Box4/Box4";
import Box6 from "./components/Box6/Box6";
import Box5 from "./components/Box5/Box5";
import Box7 from "./components/Box7/Box7";
import Box8 from "./components/Box8/Box8";
import Box9 from "./components/Box9/Box9";
import Box10 from "./components/Box10/Box10";
import Gap from "./components/Gap/Gap.jsx";
import imageSrc from "../src/assets/testImage.jpg";
import imageSrc2 from "../src/assets/testImage.jpg";
import imageSrc3 from "../src/assets/testImage.jpg";
import Box11 from "./components/Box11/Box11.jsx";
import Box12 from "./components/Box12/Box12.jsx";
import Box13 from "./components/Box13/Box13.jsx";
import Box14 from "./components/Box14/Box14.jsx";
import Box15 from "./components/Box15/Box15.jsx";
import Box16 from "./components/Box16/Box16.jsx";
import Box17 from "./components/Box17/Box17.jsx";
import Box18 from "./components/Box18/Box18.jsx";
import Box19 from "./components/Box19/Box19.jsx";
import Box20 from "./components/Box20/Box20.jsx";
import Box21 from "./components/Box21/Box21.jsx";
import Box22 from "./components/Box22/Box22.jsx";
import Box23 from "./components/Box23/Box23.jsx";
import Box24 from "./components/Box24/Box24.jsx";
import Box25 from "./components/Box25/Box25.jsx";

const App = () => {
  const [currentBox, setCurrentBox] = useState(1); // Start with Box 1
  const [scrollPos, setScrollPos] = useState(0); // Track scroll distance
  const scrollThreshold = 200; // Scroll distance threshold to trigger a component change

  const handleScroll = (event) => {
    // Prevent the default scroll behavior
    event.preventDefault();

    setScrollPos((prevPos = 0) => {
      const newPos = prevPos + event.deltaY;

      // Scroll down to the next box
      if (newPos >= scrollThreshold) {
        setCurrentBox((prev) => (prev < 25 ? prev + 1 : prev));
        return 0; // Reset scroll position after moving to the next box
      }
      // Scroll up to the previous box
      else if (newPos <= -scrollThreshold) {
        setCurrentBox((prev) => (prev > 1 ? prev - 1 : prev));
        return 0; // Reset scroll position after moving to the previous box
      }

      return newPos; // Keep the current scroll position
    });
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="grid">
        <Box imageSrc={imageSrc} isImageVisible={currentBox === 1} />
        <Box2 imageSrc={imageSrc2} isImageVisible={currentBox === 2} />
        <Box3 imageSrc={imageSrc3} isImageVisible={currentBox === 3} />
        <Box4 imageSrc={imageSrc3} isImageVisible={currentBox === 6} />
        <Box5 imageSrc={imageSrc3} isImageVisible={currentBox === 5} />
        <Box6 imageSrc={imageSrc3} isImageVisible={currentBox === 4} />
        <Box7 imageSrc={imageSrc3} isImageVisible={currentBox === 7} />
        <Gap />
        <Gap />
        <Box8 imageSrc={imageSrc3} isImageVisible={currentBox === 8} />
        <Box9 imageSrc={imageSrc3} isImageVisible={currentBox === 9} />
        <Box10 imageSrc={imageSrc3} isImageVisible={currentBox === 10} />
        <Box11 imageSrc={imageSrc3} isImageVisible={currentBox === 11} />
        <Box12 imageSrc={imageSrc3} isImageVisible={currentBox === 12} />
        <Box13 imageSrc={imageSrc3} isImageVisible={currentBox === 13} />
        <Box14 imageSrc={imageSrc3} isImageVisible={currentBox === 14} />
        <Box15 imageSrc={imageSrc3} isImageVisible={currentBox === 15} />
        <Box16 imageSrc={imageSrc3} isImageVisible={currentBox === 16} />
        <Box17 imageSrc={imageSrc3} isImageVisible={currentBox === 17} />
        <Box18 imageSrc={imageSrc3} isImageVisible={currentBox === 18} />
        <Box19 imageSrc={imageSrc3} isImageVisible={currentBox === 19} />
        <Box20 imageSrc={imageSrc3} isImageVisible={currentBox === 20} />
        <Box21 imageSrc={imageSrc3} isImageVisible={currentBox === 21} />
        <Box22 imageSrc={imageSrc3} isImageVisible={currentBox === 22} />
        <Box23 imageSrc={imageSrc3} isImageVisible={currentBox === 23} />
        <Box24 imageSrc={imageSrc3} isImageVisible={currentBox === 24} />
        <Box25 imageSrc={imageSrc3} isImageVisible={currentBox === 25} />
      </div>
    </div>
  );
};

export default App;
