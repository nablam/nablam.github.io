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

function docReady(fn) {
  // see if DOM is already available
  if (
    document.readyState === "complete" ||
    document.readyState === "interactive"
  ) {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}
docReady(function () {
  // DOM is loaded and ready for manipulation here
  loadXMLDoc(FilePath, function (responseText) {
    doDecrypt_Json(responseText);
  });
});

function doDecrypt_Json(sometext) {
  pass = StoredPass;
  var decrypted = CryptoJS.AES.decrypt(sometext, pass).toString(
    CryptoJS.enc.Utf8
  );

  theDecryptedJsonObject = JSON.parse(decrypted);

  let len = theDecryptedJsonObject.TextContent.textContent.length;

  for (var y = 0; y < len; y++) {
    if (theDecryptedJsonObject.TextContent.textContent[y].ctype == "0") {
      allowedJsonObjects.push(
        theDecryptedJsonObject.TextContent.textContent[y]
      );
    }
  }
  let len_ALLOWED = allowedJsonObjects.length;

  // Build allowed blocks
  for (var i = len_ALLOWED - 1; i >= 0; i--) {
    // theHtmlUlstr += buildArticlev2(i);
    makeArticleNAive(i);
  }

  document.getElementById("debug0").innerHTML = "debugging from artinjector";
  //reloadarticles();
}

function makeArticleNAive(blockNumber) {
  var argTile = GetBlock_title(blockNumber);
  var argshorttext = GetBlock_shorttext(blockNumber);
  var arglable = GetBlock_lable(blockNumber);
  var argyear = GetBlock_date_year(blockNumber);

  var randImageIndex = Math.floor(Math.random() * 9); //0 to 9
  var vTitleNoSpaces = argTile.replace(/\s/g, "");
  var title_underscored = argTile.replace(/\s/g, "_");

  var v_imgpath =
    "/images/imagesFromDalle/" +
    title_underscored +
    "/" +
    title_underscored +
    "_dalle_" +
    randImageIndex +
    "_.png"; //    '+v_imgpath+'   --->  Programming_In_Basic/Programming_In_Basic_dalle_0_

  var vPagePath =
    "/SelectedPages/ProjectPages/Page_" + vTitleNoSpaces + ".html"; //    '+vPagePath+'

  //***************************************************************** */
  var argLableForArtID = arglable;
  var argImagId = "img" + argLableForArtID;
  var argSpanImageSrc = v_imgpath; //  "/images/imagesFromDalle/Super_Copter/Super_Copter_dalle_3_.png";
  var argSpanImageAlt = vTitleNoSpaces + "_" + randImageIndex;
  var argHeaderlink = vPagePath; //"/SelectedPages/ProjectPages/Page_SuperCopter.html";
  var argHeadertile = argTile; //"just title";
  var argPtext = argshorttext.substring(0, 100); //"Some text here not too long for testing plz...";
  var argH4year = argyear; //"9022 09";

  let sectionTiles = document.querySelector(".tiles");

  //make Artcle
  let anArticle = document.createElement("article");
  //make id attrib
  const ArcticleID_Att = document.createAttribute("id");
  //set id attrib value
  ArcticleID_Att.value = argLableForArtID;
  // assign attrib
  anArticle.setAttributeNode(ArcticleID_Att);

  // make span
  let articleSpan = document.createElement("span");
  // make class arrtib
  //const spanClassAttrib = document.createAttribute("class");
  //set value
  //spanClassAttrib.value = "image";
  //assign class to span
  //articleSpan.setAttributeNode(spanClassAttrib);
  articleSpan.className = "image";
  anArticle.style.backgroundImage = "url(" + argSpanImageSrc + ")";

  //make img
  let imgtag = document.createElement("img");

  //make id attrib
  const imgtageID_Att = document.createAttribute("id");
  //set idvalu
  imgtageID_Att.value = argImagId;
  //assign id
  imgtag.setAttributeNode(imgtageID_Att);
  //make src attrib
  const imgtageSRC_Att = document.createAttribute("src");
  //set src valu
  imgtageSRC_Att.value = argSpanImageSrc;
  //assign src
  imgtag.setAttributeNode(imgtageSRC_Att);
  // make alt attrib
  const imgtageALT_Att = document.createAttribute("alt");
  //set alt value
  imgtageALT_Att.value = argSpanImageAlt;
  //assign alt
  imgtag.setAttributeNode(imgtageALT_Att);

  let headerTag = document.createElement("header");
  headerTag.className = "major";

  let h3tag = document.createElement("h3");
  let atag = document.createElement("a");

  atag.className = "link";
  const atagref = document.createAttribute("href");
  atagref.value = argHeaderlink;
  atag.setAttributeNode(atagref);
  atag.textContent = argHeadertile;

  let p = document.createElement("p");
  p.textContent = argPtext;

  let h4tag = document.createElement("h4");
  h4tag.textContent = argH4year;

  h3tag.appendChild(atag);

  headerTag.appendChild(h3tag);
  headerTag.appendChild(p);
  headerTag.appendChild(h4tag);

  articleSpan.appendChild(imgtag);
  anArticle.appendChild(articleSpan);
  anArticle.appendChild(headerTag);
  sectionTiles.appendChild(anArticle);
}

function buildArticlev2(blockNumber) {
  var argTile = GetBlock_title(blockNumber);
  var argshorttext = GetBlock_shorttext(blockNumber);
  var arglable = GetBlock_lable(blockNumber);
  var argyear = GetBlock_date_year(blockNumber);

  var randImageIndex = Math.floor(Math.random() * 9); //0 to 9
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
