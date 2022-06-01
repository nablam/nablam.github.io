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

loadXMLDoc(FilePath, function (responseText) {
  doDecrypt_Json(responseText);

  //ReplaceImages();
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

  for (var y = 0; y < len - 58; y++) {
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

  var nabsite = "Hi, I am nabil's site";
  var digitalarchive = "I'm a sort of digital archive.";

  var PAGE = [
    '<header id="header" class="alt"><a href="',
    "/indexV2.html",
    '" class="logo"><strong>',
    "Nabdev",
    "</strong> <span>",
    "archives",
    '</span></a><nav><a href="#menu">Menu</a></nav></header><nav id="menu"><ul class="links"><li><a href="',
    "/indexV2.html",
    '">',
    "Home",
    '</a></li></ul></nav><section id="banner" class="major"><div class="inner"><header class="major"><h1>',
    nabsite,
    '</h1></header><div class="content"><section><h5>',
    'Nabil is not a "web developer", but he built me using html-css-js',
    '<br /></h5><h5 id="intro">',
    digitalarchive,
    '<br /></h5></section></div></div></section><div id="main"><section id="one" class="tiles">',

    theHtmlUlstr,

    '</section><section id="two"><div class="inner"><header class="major"></header><p></p><p></p><ul class="actions"><li><a href="" id="get-data" class="button">about nabil</a></li></ul><ul><p class="mypanel"></p></ul></div></section></div>',

    '<footer id="footer"><div class="inner"><ul class="icons"><li><a href="',
    "https://www.youtube.com/user/usergroupX",
    '" class="icon brands alt fa-youtube"><span class="label">Youtube</span></a></li><li><a href="',
    "https://www.linkedin.com/in/nablam/",
    '" class="icon brands alt fa-linkedin-in" ><span class="label">LinkedIn</span></a></li><li><a href="',
    "https://github.com/nablam",
    '" class="icon brands alt fa-github" ><span class="label">GitHub</span></a></li></ul><ul class="copyright"><li>&copy; NabDev</li><li>2022</li></ul></div></footer>',
  ];

  var theOUTPUT = "";
  for (var m = 0; m < PAGE.length; m++) {
    theOUTPUT += PAGE[m];
  }

  document.getElementById("test").innerHTML = theOUTPUT;
  console.log(theOUTPUT);
  //reloadarticles();
}

function reloadarticles() {
  var all_elements = document.getElementsByTagName("article");
  document.getElementById("test").innerHTML = all_elements.length;
  for (var c = 0; c < all_elements.length; c++) {
    var tempcontent = all_elements[c].innerHTML;
    all_elements[c].innerHTML = tempcontent;
  }

  let links = document.getElementsByTagName("link");
  let href0 = links[0].getAttribute("href");
  links[0].setAttribute("href", "");

  document.getElementById("test").innerHTML +=
    " links" + links.length + " " + href0 + " <br>";

  var csspath = "/assets/css/main.css";
  links[0].setAttribute("href", csspath);

  //   for (let i = 0; i < links.length; i++) {
  //     if (links[i].getAttribute("rel") == "stylesheet") {
  //       let href = links[i].getAttribute("href").split("?")[0];
  //       let newHref = href + "?version=" + new Date().getMilliseconds();
  //      // console.log(newHref);
  //       links[i].setAttribute("href", newHref);
  //     }
  //   }
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

// function ReplaceImages() {
//     var tempath =
//     "/images/imagesFromDalle/Super_Copter/Super_Copter_dalle_1_.png";

//     document.getElementById("article").innerHTML="lol";

// //   var imgs = document.getElementsByTagName("img");
// //   for (var i = 0, l = imgs.length; i < l; i++) {
// //     var temsrc = imgs[i].src;
// //     imgs[i].src = tempath;
// //   }

// }

// function MakeNewSpanTAG(vArticleID, vImageID, v_imgpath) {

//      var span0=  '<span class="image"><img id="';
//     // imglbl_62
//     var span2= '" src="';
//   //  /images/imagesFromDalle/Super_Copter/Super_Copter_dalle_1_.png
//     var span4='" alt="mimi"/></span>';

// }

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
