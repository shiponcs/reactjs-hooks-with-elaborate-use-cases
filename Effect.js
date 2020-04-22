import React, { useState, useEffect } from "react";

const Effect = () => {
  const [time, updateTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => updateTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });

  return <h1>current time: {time.toLocaleTimeString()}</h1>;
};

export default Effect;

//  useEffect doesn't run immediately meaning it doesn't run in very first
// render, in frist render it schedules and run after meaning it runs afert first
//  rendering.
// it returns a function which is a cleanup function
