import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Effect from "./Effect";
import ContextCompont from "./Context";
import RefComponent from "./Ref";
import PreReducer from "./PreReducer";
import ReducerComponent from "./Reducer";
import MemoComponent from "./Memo";
import CallBackComponent from "./Callback";
import LayoutEffectComponent from "./LayoutEffects";
import AutoFocusTextInput from "./CustomTextInput";
import FocusTextComponentWithErrorBoundary from "./ForwardRef";
import FocusTextComponentWithErrorBoundary1 from "./ImperativeHandeling";

const App = () => {
  return (
    <div>
      <Effect />
      <hr />
      <ContextCompont />
      <hr />
      <RefComponent />
      <hr />
      <PreReducer />
      <hr />
      <ReducerComponent />
      <hr />
      <MemoComponent />
      <hr />
      <CallBackComponent />
      <hr />
      <LayoutEffectComponent />
      <hr />
      <AutoFocusTextInput />
      <hr />
      <FocusTextComponentWithErrorBoundary />
      <hr />
      <FocusTextComponentWithErrorBoundary1 />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector(".root"));
