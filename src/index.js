import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  return (
    <div>
      <p>Hello I am a Webpack-React Hot-Pot!</p>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

module.hot.accept();