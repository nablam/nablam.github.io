//check if the key localsec_A exisst , make one if not
var storageEntries = Object.keys(localStorage).length;

var localsec_A_foundStatus = "notfound";

if (storageEntries == 0) {
  //make the first entry for localsec_A
  localStorage.setItem("localsec_A", "");
} else {
  for (var x = 0; x < storageEntries; x++) {
    var keyname = Object.keys(localStorage)[x];
    if (keyname == "localsec_A") {
      localsec_A_foundStatus = "ok";
    }
  }
  if (localsec_A_foundStatus == "notfound") {
    localStorage.setItem("localsec_A", "");
  }
}
