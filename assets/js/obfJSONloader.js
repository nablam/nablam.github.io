const FilePath = "OBFjson.json"; // tempjson.json
//const FilePath =  "https://raw.githubusercontent.com/nablam/infoapi/main/teminfoapi_s.txt";
var theDecryptedJsonObject_02;
// function reqListener() {
//   theDecryptedJsonObject_02 = JSON.parse(this.responseText);

//   let mainTexts = theDecryptedJsonObject_02.TextContent.textContent;
//   let len = theDecryptedJsonObject_02.TextContent.textContent.length;

//   const testdate = document.getElementById("testdate");
//   //testdate.textContent = mainTexts[0].date;
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", FilePath);
// oReq.send();

var xmlhttp = new XMLHttpRequest();
//var url = "myTutorials.txt";

xmlhttp.onload = function () {
  alert("hi");
  if (this.readyState == 4 && this.status == 200) {
    theDecryptedJsonObject_02 = JSON.parse(this.responseText);
    //var myArr = JSON.parse(this.responseText);
    myFunction();
  }
};
xmlhttp.open("GET", FilePath, true);
xmlhttp.send();

function myFunction() {
  var out = "ee";
  var i;
  let mainTexts = theDecryptedJsonObject_02.TextContent.textContent;
  let len = theDecryptedJsonObject_02.TextContent.textContent.length;

  out = len;
  //   for (i = 0; i < arr.length; i++) {
  //     out += '<a href="' + arr[i].url + '">' + arr[i].display + "</a><br>";
  //   }

  document.getElementById("testdate").innerHTML = out;
}
