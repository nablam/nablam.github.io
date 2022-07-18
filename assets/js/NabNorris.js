function CleanLocal_ALL() {
  let storage = {};
  Object.keys(localStorage).forEach((key) => {
    storage[key] = localStorage.getItem(key);
  });

  var letstoreEntries = storage.length;
  var storageEntries = Object.keys(localStorage).length; // localStorage.keys.length;

  var chosenEntries = storageEntries;

  for (var x = 0; x < chosenEntries; x++) {
    var keyname = Object.keys(localStorage)[x];

    localStorage.removeItem(keyname);
  }
}

const urlCategories = "https://api.chucknorris.io/jokes/categories";
const chuckCategories = [
  "dev",
  "career",
  "science",
  "dev",
  "travel",
  "history",
  "dev",
  "animal", //max 7, so use 8 as input to rand func
  "food",
  "money",
  "movie",
  "music",
  "political",
  "fashion",
  "sport",
  "religion",
  "celebrity",
  "explicit",
];
var joke = "me";
let utterance;
// const urlByCategory =
//   "https://api.chucknorris.io/jokes/random?category=" +
//   chuckCategories[Math.floor(Math.random() * 8)];
const urlByCategory = "https://api.chucknorris.io/jokes/random?category=dev";

$("#get-data").on("click", (e) => {

  CleanLocal_ALL();
  e.preventDefault();

  $.getJSON(urlByCategory, function (data) {
    //   var text = `Date: ${data.date}<br>
    //                     Time: ${data.time}<br>
    //                     Unix time: ${data.milliseconds_since_epoch}`;

    //var joke = data.value.replace(/Chuck Norris/g, "Nabil");
    //"wowMySpace actually isn't your space, it's Chuck   cc's (he just lets you use it).";
    var original = data.value + "                                           ";
    // "Nabil does not need to type-cast. The Chuck-Norris Compiler (CNC) sees through things. All way";
    //    ;

    joke = original
      .replace(/porn/g, "ideas")
      .replace(/CNC/g, "NCC")
      .replace(/Chuck-Norris/g, "Nab-il")
      .replace(/Chuck Norris/g, "Nabil")
      .replace(/ChuckNorris/g, "Nabil")
      .replace(/CHUCKNORRIS/g, "NABIL")
      .replace(/NORRIS/g, "Nabil")
      .replace(/CHUCK/g, "Nabil")
      .replace(/#chuck and #norris/g, "#Nabil")
      .replace(/Norris/g, "Nabil")
      .replace(/Chuck/g, "Nabil");
    $(".mypanel").html(joke);
    speechSynthesis.cancel();
    utterance = new SpeechSynthesisUtterance(joke);
    speechSynthesis.speak(utterance);
  });
});
