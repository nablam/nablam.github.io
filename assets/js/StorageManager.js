// //we really need a key here
// //***************************************************** */
// var storageEntries = Object.keys(localStorage).length;

// var localsec_A_foundStatus = "notfound";

// if (storageEntries == 0) {
//   //make the first entry for localsec_A
//   localStorage.setItem("localsec_A", "");
// } else {
//   for (var x = 0; x < storageEntries; x++) {
//     var keyname = Object.keys(localStorage)[x];
//     if (keyname == "localsec_A") {
//       localsec_A_foundStatus = "ok";
//     }
//   }
//   if (localsec_A_foundStatus == "notfound") {
//     localStorage.setItem("localsec_A", "");
//   }
// }

// //***************************************************** */

// function CleanLocal() {
//   let storage = {};
//   Object.keys(localStorage).forEach((key) => {
//     storage[key] = localStorage.getItem(key);
//   });

//   var letstoreEntries = storage.length;
//   var storageEntries = Object.keys(localStorage).length; // localStorage.keys.length;

//   var chosenEntries = storageEntries;

//   for (var x = 0; x < chosenEntries; x++) {
//     var keyname = Object.keys(localStorage)[x];

//     localStorage.removeItem(keyname);
//   }
// }
// function Make_localStorage_Key_loc() {
//   // localStorage.setItem("loc0", "we");
// }

// function sample_localStorage_Ftcher() {
//   let storage = {};
//   Object.keys(localStorage).forEach((key) => {
//     storage[key] = localStorage.getItem(key);
//   });

//   var letstoreEntries = storage.length;
//   var storageEntries = Object.keys(localStorage).length; // localStorage.keys.length;

//   var chosenEntries = storageEntries;
//   var Output = "";
//   for (var x = 0; x < chosenEntries; x++) {
//     var keyname = Object.keys(localStorage)[x];

//     Output +=
//       "<ul>" +
//       "lockey_" +
//       x +
//       " " +
//       keyname +
//       " val= " +
//       localStorage.getItem(Object.keys(localStorage)[x]) +
//       "</ul> ";
//   }
//   let Debugbox = document.getElementById("uldebug_local");
//   Debugbox.innerHTML = Output;
// }
// //------------------------------------------------

// // function Make_sessionStorage_SafeKey_loc() {
// //   if (sessionStorage.getItem("sess_0") === null) {
// //   } else {
// //     sessionStorage.setItem("sess_0", "bka");
// //   }
// // }

// function CleanSession() {
//   let storage = {};
//   Object.keys(sessionStorage).forEach((key) => {
//     storage[key] = sessionStorage.getItem(key);
//   });

//   var letstoreEntries = storage.length;
//   var storageEntries = Object.keys(sessionStorage).length; // sessionStorage.keys.length;

//   var chosenEntries = storageEntries;

//   for (var x = 0; x < chosenEntries; x++) {
//     var keyname = Object.keys(sessionStorage)[x];

//     sessionStorage.removeItem(keyname);
//   }
// }

// function Make_sessionStorage_Key_loc() {
//   sessionStorage.setItem("sess_0", " ");
// }

// function sample_sessionStorage_Ftcher() {
//   let storage = {};
//   Object.keys(sessionStorage).forEach((key) => {
//     storage[key] = sessionStorage.getItem(key);
//   });

//   var letstoreEntries = storage.length;
//   var storageEntries = Object.keys(sessionStorage).length; // sessionStorage.keys.length;

//   var chosenEntries = storageEntries;
//   var Output = "";
//   for (var x = 0; x < chosenEntries; x++) {
//     Output +=
//       "<ul>" +
//       "lockey_" +
//       x +
//       " " +
//       Object.keys(sessionStorage)[x] +
//       " val= " +
//       sessionStorage.getItem(Object.keys(sessionStorage)[x]) +
//       "</ul> ";
//   }
//   let Debugbox = document.getElementById("uldebug_session");
//   Debugbox.innerHTML = Output;
// }

// //CleanLocal();
// //Make_localStorage_Key_loc();
// //sample_localStorage_Ftcher();

// //CleanSession();
// //Make_sessionStorage_Key_loc();
// //sample_sessionStorage_Ftcher();
