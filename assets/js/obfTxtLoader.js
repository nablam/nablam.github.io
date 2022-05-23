const FilePath = "OBFtxt.txt"; // tempjson.json
//const FilePath =  "https://raw.githubusercontent.com/nablam/infoapi/main/teminfoapi_s.txt";
var theDecryptedJsonObject_02;

var xmlhttp = new XMLHttpRequest();

xmlhttp.onload = function () {
  alert("hi");
  if (this.readyState == 4 && this.status == 200) {
    theDecryptedJsonObject_02 = this.responseText.toString();

    myFunction();
  }
};
xmlhttp.open("GET", FilePath, true);
xmlhttp.send();

function myFunction() {
  var out = "ee";

  out = theDecryptedJsonObject_02;
  //   for (i = 0; i < arr.length; i++) {
  //     out += '<a href="' + arr[i].url + '">' + arr[i].display + "</a><br>";
  //   }

  document.getElementById("testdate").innerHTML = out;
}
