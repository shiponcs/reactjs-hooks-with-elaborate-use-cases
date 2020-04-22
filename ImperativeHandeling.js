// imperative handeling is used if forward ref
// most of the code structure of this file similar to ForwardRef.js

import React, { useRef, useEffect, useState, useImperativeHandle } from "react";
import ErrorBoundary from "./ErrorBoundaries";

const TextInput = React.forwardRef((props, rf) => {
  const elRef = useRef();
  // we will not use the ref send by parent component directly
  // rather will use it only to expose the function by imperativeHandeling
  // hence we need our own ref here
  useImperativeHandle(rf, () => ({
    focustTextInput: () => {
      elRef.current.focus();
    },
  }));

  // console.log("00000000000", rf);
  return (
    <div>
      <h3>
        forwardRef + useImperativeHandle: how to get access to child component's
        node element in functional component
      </h3>
      <input type="text" ref={elRef} />
    </div>
  );
});

const FocusTextComponent = () => {
  const domElP = useRef();
  const [count, setCount] = useState(1);
  useEffect(() => {
    domElP.current.focustTextInput();
    console.log(domElP.current);
  });

  return (
    <div>
      <TextInput ref={domElP} />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

const FocusTextComponentWithErrorBoundary1 = () => {
  return (
    <ErrorBoundary>
      <FocusTextComponent />
    </ErrorBoundary>
  );
};

export default FocusTextComponentWithErrorBoundary1;

/*
here we are exposing a function to from chil component to the parent
component so that it can it inside parent components body.
as functinal component doesn't have instances we had to expose 
function using this hook. 
*/
