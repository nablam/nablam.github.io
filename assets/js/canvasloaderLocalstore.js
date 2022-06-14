//we really need a key here
//***************************************************** */
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

//***************************************************** */

var secret = localStorage.getItem("localsec_A");

var canvas = document.querySelector("#unity-canvas");
var config = {
  dataUrl: "Build/pubdir.data",
  frameworkUrl: "Build/pubdir.framework.js",
  codeUrl: "Build/pubdir.wasm",
  streamingAssetsUrl: "StreamingAssets",
  companyName: "NabDev",
  productName: "supercopter",
  productVersion: "0.2",
  matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
  // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
};

if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
  // Mobile device style: fill the whole browser client area with the game canvas:
  var meta = document.createElement("meta");
  meta.name = "viewport";
  meta.content =
    "width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, shrink-to-fit=yes";
  document.getElementsByTagName("head")[0].appendChild(meta);
}

createUnityInstance(canvas, config).then((unityInstance) => {
  MyUnityGame = unityInstance;
  MyUnityGame.SendMessage("MasterOBJ", "SetSecret", secret);
});
