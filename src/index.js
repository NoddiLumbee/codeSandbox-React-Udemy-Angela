import React from "react";
import ReactDOM from "react-dom";
const img = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My favorite foods
    </h1>
    <div>
      <img
        className="food-img"
        src="https://cheapandcheerfulcooking.com/wp-content/uploads/2021/01/chinese-fried-noodles-basic-recipe-1.jpg"
        alt="noodle"
      ></img>
      <img src={img + "?grayscale"} alt="random"></img>
    </div>
  </div>,
  document.getElementById("root")
);
