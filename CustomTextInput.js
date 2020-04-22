import React, { createRef } from "react";

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    this.textInput.current.focus(); // here you're calling the HTMLElement.focus()
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input
          type="button"
          value="focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInputt = createRef();
  }

  componentDidMount() {
    console.log(this.textInputt.current);
    this.textInputt.current.focusTextInput(); // now you have referenceto the CustomTextInput,
    //and since it's a class component it has instance
    //so you can invoke its method from here, that's you're doing here
  }

  render() {
    return <CustomTextInput ref={this.textInputt} />;
  }
}

export default AutoFocusTextInput;

// this is how a parent get access(ref) to it child's DOM nodes
// but this is only for class component, you have to use forwarRef if
// you want to achieve the same for functional componenet.
// *It doesn't mean that you can't use useRef or ref in function component,
// rather it means that you can't use ref to achieve this getting ref
// of child's components *
// see some use cases of ref in functional component: LayoutEffects.js, Ref.js
