import React, { useState } from "react";

const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);

const PreReducer = () => {
  const [{ r, g, b }, updatergb] = useState({ r: 0, g: 0, b: 0 });
  console.log(r, g, b);
  return (
    <div>
      <h1 style={{ color: `rgb(${r}, ${g}, ${b})` }}> useState </h1>
      <span>r </span>
      <button onClick={() => updatergb({ r: limitRGB(r + 50), g, b })}>
        +
      </button>{" "}
      <button onClick={() => updatergb({ r: limitRGB(r - 50), g, b })}>
        -
      </button>
      <br />
      <span>g </span>
      <button onClick={() => updatergb({ r, g: limitRGB(g + 50), b })}>
        +
      </button>{" "}
      <button onClick={() => updatergb({ r, g: limitRGB(g - 50), b })}>
        -
      </button>
      <br />
      <span>b </span>
      <button onClick={() => updatergb({ r, g, b: limitRGB(b + 50) })}>
        +
      </button>{" "}
      <button onClick={() => updatergb({ r, g, b: limitRGB(b - 50) })}>
        -
      </button>
    </div>
  );
};

export default PreReducer;

// we can achieve the same using Reducer, see ./Reducer
