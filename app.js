import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const title = <h1 className="title">Hello World</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

//React Component
const HeadingComponent = () => (
  <h1 className="heading">
    Hello World React Component returning single line JSX
  </h1>
);

//Rendering React Element
//root.render(title);

//Rendering React Component
//root.render(<HeadingComponent />);

//convert React ELement to React Component
const reactelementtoReactcomponent = (
  <div className="container">
    <h1>I am react element</h1>
  </div>
);
//root.render(reactelementtoReactcomponent);
//react component

const ReactElementComponent = () => {
  return (
    <div className="container">
      <h1>I am React Element Component</h1>
    </div>
  );
};

//root.render(<ReactElementComponent />)

//react elements
const reactElement = <h1>Hey I am react element</h1>;
//or
const reactElement2 = <h1> Hey I am react element2 </h1>;
//or
const reactElement3 = <h1>Hey I am react element3 </h1>;
//root.render(reactElement3)

//react component
const ReactComponent = () => <h1>Hello I am a React Component</h1>;
//or
const ReactComponent2 = () => {
  return (
    <div>
      <ReactComponent />
      <h1>Hello I am a React Component 2</h1>
    </div>
  );
};

root.render(<ReactComponent2 />);
