import React, { useState } from "react";
import "../css/App.css";

const Colors = () => {
  const [color, setColor] = useState("blue");
  const colors = ["red", "blue", "orange", "brown", "magenta", "pink"];

  //   const handlerChangeColor = (arrayColor) => {
  //     setColor(arrayColor);
  //   };

  const colorBlock = () => {
    return colors.map((arrayColor, colorIndex) => {
      return (
        <div
          onClick={() => setColor(arrayColor)}
          className="color-block"
          style={{ backgroundColor: arrayColor }}
          key={`color_${colorIndex}`}
        />
      );
    });
  };

  return (
    <div className="container-colors" style={{ backgroundColor: color }}>
      {colorBlock()}
    </div>
  );
};

export default Colors;
