import React from "react";
import ReactDom from "react-dom";

const App = () => {
  return <div className="app-container"> hello world </div>;
};

ReactDom.render(<App />, document.getElementById("root"));
