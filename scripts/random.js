// Fetch data
let fetchData = await fetch("./db/db.json");
let data = await fetchData.json();

//initialize
randomCharacterDescriptor();
randomCharacterType();
randomCharacterFocus();
randomOddity();

// Random Character Descriptor, Type and Focus
function randomCharacterDescriptor() {
  let descriptor = data.characterdescriptorlist[Math.floor(Math.random() * data.characterdescriptorlist.length)];
  document.getElementById("character-random-descriptor").innerHTML = descriptor;
}
function randomCharacterType() {
  let type = data.characterdescriptorlist[Math.floor(Math.random() * data.characterdescriptorlist.length)];
  document.getElementById("character-random-type").innerHTML = type;
}
function randomCharacterFocus() {
  let focus = data.characterdescriptorlist[Math.floor(Math.random() * data.characterdescriptorlist.length)];
  document.getElementById("character-random-focus").innerHTML = focus;
}

// Random Oddity
function randomOddity() {
  let quality = data.oddityqualitylist[Math.floor(Math.random() * data.oddityqualitylist.length)];
  let property = data.odditypropertylist[Math.floor(Math.random() * data.odditypropertylist.length)];;
  let form = data.oddityformlist[Math.floor(Math.random() * data.oddityformlist.length)];;
  let oddity = quality + " " + property + " " + form;
  document.getElementById("new-random-oddity").innerHTML = oddity;
}

// Listen
document.getElementById("new-random-character-descriptor").addEventListener("click", function (event) {
  randomCharacterDescriptor();
});
document.getElementById("new-random-character-type").addEventListener("click", function (event) {
  randomCharacterType();
});
document.getElementById("new-random-character-focus").addEventListener("click", function (event) {
  randomCharacterType();
});
document.getElementById("new-random-character-sentence").addEventListener("click", function (event) {
  randomCharacterDescriptor();
  randomCharacterType();
  randomCharacterFocus();  
});

document.getElementById("generate-new-random-oddity").addEventListener("click", function (event) {
  randomOddity();
});

