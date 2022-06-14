var Output_debugText = ""; // "secondpart part of  ";
var ThirdPart_of_localsec_A = "";
let Debugbox = document.getElementById("debug_title");

var thetitle = document.querySelector("header").textContent;

let ArrOfLi = document.querySelectorAll("header");
ArrOfLi.forEach((cur) => {
  thetitle = cur.firstChild.data.replace(/\s/g, "");
  thetitle += "_";
});

ThirdPart_of_localsec_A = thetitle.toLocaleLowerCase();

var thestored_secretSofar = ""; //

let storage = {};
Object.keys(localStorage).forEach((key) => {
  storage[key] = localStorage.getItem(key);
});

if (Object.keys(localStorage).length > 0) {
  // "found some local keys";

  for (var x = 0; x < Object.keys(localStorage).length; x++) {
    var keyname = Object.keys(localStorage)[x];
    if (keyname == "localsec_A") {
      thestored_secretSofar = localStorage.getItem(keyname);
      thestored_secretSofar += ThirdPart_of_localsec_A;
    }
    //     Output +=
    //       "<ul>" +
    //       "lockey_" +
    //       x +
    //       " " +
    //       keyname +
    //       " val= " +
    //       localStorage.getItem(Object.keys(localStorage)[x]) +
    //
  }
} else {
  //"no locals ";
  // localStorage.setItem("localsec_A", Firstpart_of_localsec_A);
}
localStorage.setItem("localsec_A", thestored_secretSofar);
Output_debugText = thestored_secretSofar;
Debugbox.innerHTML = Output_debugText;
