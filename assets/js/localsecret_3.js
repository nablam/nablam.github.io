var Output_debugText = ""; // "secondpart part of  ";
// var ThirdPart_of_localsec_A = "";
let Debugbox = document.getElementById("debug_title");

var thetitle_secretChunck =
  document
    .getElementsByClassName("major")[0]
    .textContent.toString()
    .toLocaleLowerCase()
    .replace(/\s/g, "") + "_";

var acumKey = "";

const myArray = localStorage.getItem("localsec_A").split("_");
if (myArray.length > 3) {
  localStorage.setItem("localsec_A", acumKey);
}

acumKey = localStorage.getItem("localsec_A");

acumKey += thetitle_secretChunck;
localStorage.setItem("localsec_A", acumKey);

//Output_debugText = acumKey;
//Debugbox.innerHTML = Output_debugText; //Output_debugText;
