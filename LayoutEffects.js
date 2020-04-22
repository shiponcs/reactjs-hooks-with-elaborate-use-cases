import React, { useState, useLayoutEffect, useReducer, useRef } from "react";

const LayoutEffectComponent = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const el = useRef();

  useLayoutEffect(() => {
    console.log(el.current.clientHeight);
    console.log(el.current.clientWidth);
    setWidth(el.current.clientWidth);
    setHeight(el.current.clientHeight);
  });

  return (
    <div>
      <h1>useLayout example</h1>
      <h3>Textarea width: {width}</h3>
      <h3>Textarea height: {height}</h3>
      <textarea
        onClick={() => {
          setWidth(0);
        }}
        ref={el}
      ></textarea>
    </div>
  );
};

export default LayoutEffectComponent;
