const FilePath_local = "OBFtxt.txt"; // tempjson.json

const FilePath_privat =
  "https://raw.githubusercontent.com/nablam/infoapi/main/privatizedJsonFormat.text";
const FilePath_text =
  "https://raw.githubusercontent.com/nablam/infoapi/main/teminfoapi_s.txt";

const FilePath = FilePath_privat;
var theEndryptedSTR;
var decrypted;
var theDecryptedJsonObject;
var pass = ""; //is not lolz lolz
var theHtmlUlstr = "";
var StoredPass = sessionStorage.getItem("code");

let xhr = new XMLHttpRequest();
xhr.responseType = "text";
function loadXMLDoc(myurl, cb) {
  // Fallback to Microsoft.XMLHTTP if XMLHttpRequest does not exist.
  var xhr = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHTTP");

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      if (typeof cb === "function") cb(xhr.responseText);
    }
  };

  xhr.open("GET", myurl, true);

  xhr.send();
}

loadXMLDoc(FilePath, function (responseText) {
  doDecrypt_Json(responseText);
});

function doDecrypt(sometext) {
  pass = StoredPass;
  decrypted1 = CryptoJS.AES.decrypt(sometext, pass).toString(CryptoJS.enc.Utf8);
  document.getElementById("LINJECT").innerHTML = decrypted1;
}

function doDecrypt_Json(sometext) {
  pass = StoredPass;
  var decrypted = CryptoJS.AES.decrypt(sometext, pass).toString(
    CryptoJS.enc.Utf8
  );

  theDecryptedJsonObject = JSON.parse(decrypted);
  //let mainTexts = theDecryptedJsonObject.TextContent.textContent;
  let len = theDecryptedJsonObject.TextContent.textContent.length;

  for (var i = len - 1; i >= 0; i--) {
    buildLIS(i);
  }

  document.getElementById("LINJECT").innerHTML = theHtmlUlstr;
}

function buildLIS(blockNumber) {
  var id = blockNumber + 1;
  var year = GetBlock_date_year(blockNumber); // + " " + GetBlock_date_month(blockNumber);
  var text = GetBlock_shorttext(blockNumber);
  var title = GetBlock_title(blockNumber);
  var NilsDirection = "Nils_direction-r";
  if (blockNumber % 2 == 0) {
    NilsDirection = "Nils_direction-r";
  } else {
    NilsDirection = "Nils_direction-l";
  }

  theHtmlUlstr +=
    ' <li> <div class="' +
    NilsDirection +
    '"> <div class="Nils_flag-wrapper"> <span class="Nils_flag">' +
    title +
    '</span> <span class="Nils_time-wrapper" ><span class="Nils_time">' +
    year +
    '</span></span> </div> <div class="Nils_desc">' +
    text +
    "</div> </div> </li>";
}

function GetBlock_id(argIndex) {
  return theDecryptedJsonObject.TextContent.textContent[argIndex].id;
}
function GetBlock_category(argIndex) {
  return theDecryptedJsonObject.TextContent.textContent[argIndex].category;
}

function GetBlock_ctype(argIndex) {
  return theDecryptedJsonObject.TextContent.textContent[argIndex].ctype;
}

function GetBlock_date(argIndex) {
  return theDecryptedJsonObject.TextContent.textContent[argIndex].date;
}
function GetBlock_date_year(argIndex) {
  return theDecryptedJsonObject.TextContent.textContent[
    argIndex
  ].date.substring(0, 4);
}
function GetBlock_date_month(argIndex) {
  return theDecryptedJsonObject.TextContent.textContent[argIndex].date.slice(
    -2
  );
}

function GetBlock_title(argIndex) {
  var ret = theDecryptedJsonObject.TextContent.textContent[
    argIndex
  ].title.replace("And Lead Developer", "");
  return ret;
}

function GetBlock_imagelink(argIndex) {
  return theDecryptedJsonObject.TextContent.textContent[argIndex].image;
}

function GetBlock_shorttext(argIndex) {
  return theDecryptedJsonObject.TextContent.textContent[argIndex]
    .maintext_short;
}
function GetBlock_LONGtext(argIndex) {
  return theDecryptedJsonObject.TextContent.textContent[argIndex].maintext_Long;
}
function GetBlock_linkTopage(argIndex) {
  return theDecryptedJsonObject.TextContent.textContent[argIndex].linkToPage;
}

function GetBlock_lable(argIndex) {
  return theDecryptedJsonObject.TextContent.textContent[argIndex].page_lable;
}
