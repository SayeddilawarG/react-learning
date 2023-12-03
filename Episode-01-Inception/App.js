// const heading = React.createElement("h1", {id:"heading"}, "Yeah buddy Light weight");
// //Now create root element in which you want to add this h1 tag
// // I want to create Root of this react
// const root = ReactDOM.createRoot(document.getElementById("root"));
// //now root element is created and now render the h1 tag in root
// root.render(heading);

// <div id="parent">
//      <div id="child">
//      <h1>Welcome to React</h1>
//      </div>
// </div>

const parent = React.createElement("div",{id:"child"},[React.createElement("h1",{},"Hello I am h1 tag"),React.createElement("p",{},"Hello I am p tag")]);
const root = ReactDOM.createRoot(document.getElementById("parent"));
root.render(parent);
