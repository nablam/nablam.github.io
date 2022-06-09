var canvas = document.querySelector("#unity-canvas");
var config = {
  dataUrl: "Build/testhookMinimalStandard.data",
  frameworkUrl: "Build/testhookMinimalStandard.framework.js",
  codeUrl: "Build/testhookMinimalStandard.wasm",
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
  MyUnityGame.SendMessage("MasterOBJ", "RunUpdateTestText", "first maa");
});
