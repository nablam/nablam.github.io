var Output_debugText = "first part of  ";
var Firstpart_of_localsec_A = "";
let Debugbox = document.getElementById("debug_title");

var thetitle = document.querySelector("header").textContent;
let ArrOfLi = document.querySelectorAll("header");
ArrOfLi.forEach((cur) => {
  thetitle = cur.firstChild.data.replace(/\s/g, "");
  thetitle += "_";
});

Firstpart_of_localsec_A = thetitle.toLocaleLowerCase();

var thestored_secretSofar = ""; //

let storage = {};
Object.keys(localStorage).forEach((key) => {
  storage[key] = localStorage.getItem(key);
});

var storageEntries = Object.keys(localStorage).length;

var chosenEntries = storageEntries;

if (chosenEntries > 0) {
  // "found some local keys";

  for (var x = 0; x < chosenEntries; x++) {
    var keyname = Object.keys(localStorage)[x];
    if (keyname == "localsec_A") {
      //"found localsecA";
      if (localStorage.getItem(keyname) == Firstpart_of_localsec_A) {
        //" and it is just tthe title  ";
      }
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
  Output_debugText = "no locals ";
  localStorage.setItem("localsec_A", Firstpart_of_localsec_A);
}

Debugbox.innerHTML = Output_debugText;
