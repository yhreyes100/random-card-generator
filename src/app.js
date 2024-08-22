/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("card").innerHTML =
    " <img src='./src/assets/img/rigo-baby.jpg'/><h1>Welcome</h1>";
};
var w;
document.getElementById("start").addEventListener("click", function() {
  if (typeof Worker !== "undefined") {
    if (typeof w == "undefined") {
      w = new Worker("./src/worker.js");
    }
    w.onmessage = function(event) {
      var res = event.data;
      document.getElementById("card").innerHTML = res;
    };
  } else {
    document.getElementById("card").innerHTML = "Sorry! No Web Worker support.";
  }
  console.log("Hello Rigo from the console!");
});
document.getElementById("stop").addEventListener("click", function() {
  if (w != undefined) {
    w.terminate();
    w = undefined;
    document.getElementById("card").innerHTML =
      " <img src='./src/assets/img/rigo-baby.jpg'/><h1>Good bye</h1>";
  }
});
