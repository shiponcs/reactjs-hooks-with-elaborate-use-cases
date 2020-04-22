import React, { useState, useMemo } from "react";

const fibonacci = (n) => (n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));

const MemoComponent = () => {
  const [num, updateNum] = useState(1);
  const [isPeru, setIsPeru] = useState(true);
  const fib = useMemo(() => fibonacci(num), [num]);

  return (
    <div>
      <h1
        onClick={() => setIsPeru(!isPeru)}
        style={{ color: isPeru ? "peru" : "black" }}
      >
        useMemo Example
      </h1>
      <h3>
        {num}th fibonacci number is {fib}
      </h3>
      <button onClick={() => updateNum(num + 1)}>+</button>
    </div>
  );
};

export default MemoComponent;
