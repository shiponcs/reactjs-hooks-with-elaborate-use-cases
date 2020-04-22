import React, { useRef, useEffect, useState, useImperativeHandle } from "react";
import ErrorBoundary from "./ErrorBoundaries";

const TextInput = React.forwardRef((props, rf) => {
  const elRef = useRef();

  // console.log("00000000000", rf);
  return (
    <div>
      <h3>
        forwardRef: how to get access to child component's node element in
        functional component
      </h3>
      <input type="text" ref={rf} />
    </div>
  );
});

const FocusTextComponent = () => {
  const domElP = useRef();
  const [count, setCount] = useState(1);
  useEffect(() => {
    domElP.current.focus();
    console.log(domElP.current);
  });

  return (
    <div>
      <TextInput ref={domElP} />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

const FocusTextComponentWithErrorBoundary = () => {
  return (
    <ErrorBoundary>
      <FocusTextComponent />
    </ErrorBoundary>
  );
};

export default FocusTextComponentWithErrorBoundary;
