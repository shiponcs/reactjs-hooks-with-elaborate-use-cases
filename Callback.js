import React, { useState, useEffect, memo, useCallback } from "react";

const ExpensiveComputationComponent = memo(({ compute, count }) => {
  return (
    <div>
      <h1>Compute: {compute(count)}</h1>
      <h4>Last re-render {new Date().toLocaleTimeString()}</h4>
    </div>
  );
});

const CallBackComponent = () => {
  const [time, updateTime] = useState(new Date());
  const [count, updateCount] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => updateTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });
  const fibonacci = (n) => (n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));

  return (
    <div>
      <h1>Callback Example time: {time.toLocaleTimeString()}</h1>
      <button onClick={() => updateCount(count + 1)}>
        current count {count}
      </button>
      <ExpensiveComputationComponent
        compute={useCallback(fibonacci, [])}
        count={count}
      />
    </div>
  );
};

export default CallBackComponent;

// React docs says: "useCallback(fn, deps) is equivalent to useMemo(() => fn, deps)"
// https://reactjs.org/docs/hooks-reference.html#usecallback
