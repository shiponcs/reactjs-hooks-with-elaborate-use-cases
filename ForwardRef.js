import React, { useRef, useEffect, useState, useImperativeHandle } from "react";
import ErrorBoundary from "./ErrorBoundaries";

const TextInput = React.forwardRef((props, rf) => {
  // we are not creating any ref here, cz we are using the send by the parent component
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

/*
what we are doing here is just giving parent component an access to its 
child's dom node.
If you don't want to directly give an access to node element, rather you
intend to give an access through exposing a function, that will apply
somthing on the dom node, then you need to use imperativeHandeling, see: ImperativeHandeling.js
*/
