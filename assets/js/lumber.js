var xmlhttp = new XMLHttpRequest();

var url = "https://ipinfo.io?token=40ebf03bedd5c0";

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var myJson = JSON.parse(this.responseText);
    myFunction(myJson);
  }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(myJson) {
  //Do whathever you want with the data
  console.log(myJson);
}
