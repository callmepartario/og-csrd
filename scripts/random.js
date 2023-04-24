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
  let descriptor = data.characterdescriptor[Math.floor(Math.random() * data.characterdescriptor.length)];
  document.getElementById("character-random-descriptor").innerHTML = descriptor;
}

function randomCharacterType() {
  let type = data.charactertype[Math.floor(Math.random() * data.charactertype.length)];
  document.getElementById("character-random-type").innerHTML = type;
}

function randomCharacterFocus() {
  let focus = data.characterfocus[Math.floor(Math.random() * data.characterfocus.length)];
  document.getElementById("character-random-focus").innerHTML = focus;
}

// Random Oddity

function randomOddity() {
  let quality = data.oddityquality[Math.floor(Math.random() * data.oddityquality.length)];
  let property = data.oddityproperty[Math.floor(Math.random() * data.oddityproperty.length)];;
  let form = data.oddityform[Math.floor(Math.random() * data.oddityform.length)];;
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
  randomCharacterFocus();
});

document.getElementById("new-random-character-sentence").addEventListener("click", function (event) {
  randomCharacterDescriptor();
  randomCharacterType();
  randomCharacterFocus();  
});
