const FilePath_local = "OBFtxt.txt"; // tempjson.json

const FilePath_privat =
  "https://raw.githubusercontent.com/nablam/infoapi/main/privatizedJsonFormat.text";
const FilePath_text =
  "https://raw.githubusercontent.com/nablam/infoapi/main/teminfoapi_s.txt";

const FilePath = FilePath_privat;
var theEndryptedSTR;
var decrypted;
var theDecryptedJsonObject;
const allowedJsonObjects = [];
var pass = "LLZ"; //is not lolz lolz
var theHtmlUlstr = "";
var StoredPass = "uuddlrlrBA"; // sessionStorage.getItem("code");

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
  ReplaceImages();
  //doDecrypt_Json(responseText);
  //doDecrypt(responseText);
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

  for (var y = 0; y < len; y++) {
    if (theDecryptedJsonObject.TextContent.textContent[y].ctype == "0") {
      allowedJsonObjects.push(
        theDecryptedJsonObject.TextContent.textContent[y]
      );
    }
  }
  let len_ALLOWED = allowedJsonObjects.length;

  // for (var i = len - 1; i >= 0; i--) {
  //   buildLIS(i);
  // }

  for (var i = len_ALLOWED - 1; i >= 0; i--) {
    theHtmlUlstr += buildArticlev2(i);
  }

  // document.getElementById("test").innerHTML = "theHtmlUlstr";
}

function buildArticlev2(blockNumber) {
  var argTile = GetBlock_title(blockNumber);
  var argshorttext = GetBlock_shorttext(blockNumber);
  var arglable = GetBlock_lable(blockNumber);
  var argyear = GetBlock_date_year(blockNumber);

  var randImageIndex = Math.floor(Math.random() * 2); //0 to 9
  var vTitleNoSpaces = argTile.replace(/\s/g, "");
  var title_underscored = argTile.replace(/\s/g, "_");

  var articletext = "";

  var vArticleID = arglable; //    '+vArticleID+'
  var vImageID = "img" + arglable; //    '+vImageID+'

  var v_imgpath =
    title_underscored +
    "/" +
    title_underscored +
    "_dalle_" +
    randImageIndex +
    "_"; //    '+v_imgpath+'   --->  Programming_In_Basic/Programming_In_Basic_dalle_0_

  var vPagePath = "SelectedPages/ProjectPages/Page_" + vTitleNoSpaces; //    '+vPagePath+'

  var arra = [
    '<article id="' + vArticleID + '"> <span class="image">',
    '<img id="' + vImageID + '" ',
    'src="/images/imagesFromDalle/' + v_imgpath + '.png" ',
    'alt=""/></span><header class="major"><h3>',
    '<a href="/' + vPagePath + '.html" class="link">',
    argTile + "</a></h3><p>",
    argshorttext + "</p><br /><h4>",
    argyear + "</h4></header></article>",
  ];

  for (var s = 0; s < arra.length; s++) {
    articletext += arra[s];
  }

  return articletext;
}
function ReplaceImages() {
  var tempath =
    "/images/imagesFromDalle/Lost_School_Year/Lost_School_Year_dalle_1_.png";
    var imgs = document.getElementsByTagName("img");
    
    document.getElementById("test").innerHTML = imgs.length+" images";

  for (var i = 0, l = imgs.length; i < l; i++) {
    //  var temsrc = imgs[i].src;
    imgs[i].src = tempath;
  }

     document.getElementById("test").innerHTML +=
       " all replaced withg " + tempath;;

}

function GetBlock_id(argIndex) {
  return allowedJsonObjects[argIndex].id;
}
function GetBlock_category(argIndex) {
  return allowedJsonObjects[argIndex].category;
}

function GetBlock_ctype(argIndex) {
  return allowedJsonObjects[argIndex].ctype;
}

function GetBlock_date(argIndex) {
  return allowedJsonObjects[argIndex].date;
}
function GetBlock_date_year(argIndex) {
  return allowedJsonObjects[argIndex].date.substring(0, 4);
}
function GetBlock_date_month(argIndex) {
  return allowedJsonObjects[argIndex].date.slice(-2);
}

function GetBlock_title(argIndex) {
  //   var ret = allowedJsonObjects[argIndex].title.replace(
  //     "And Lead Developer",
  //     ""
  //   );
  var ret = allowedJsonObjects[argIndex].title;

  return ret;
}

function GetBlock_imagelink(argIndex) {
  return allowedJsonObjects[argIndex].image;
}

function GetBlock_shorttext(argIndex) {
  return allowedJsonObjects[argIndex].maintext_short;
}
function GetBlock_LONGtext(argIndex) {
  return allowedJsonObjects[argIndex].maintext_Long;
}
function GetBlock_linkTopage(argIndex) {
  return allowedJsonObjects[argIndex].linkToPage;
}

function GetBlock_lable(argIndex) {
  return allowedJsonObjects[argIndex].page_lable;
}
