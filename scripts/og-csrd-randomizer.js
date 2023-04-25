// Fetch data
let fetchData = await fetch("./db/og-csrd.json");
let data = await fetchData.json();

//initialize

randomCharacterDescriptor();
randomCharacterType();
randomCharacterFocus();
randomCharacterFlavor();
randomCharacterArc();

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

function randomCharacterFlavor() {
  if ( Math.random() * 5 < 2 ) { 
    var flavor = data.characterflavor[Math.floor(Math.random() * data.characterflavor.length)]
  } else {
    var flavor = "";
  }
  document.getElementById("character-random-flavor").innerHTML = flavor;
}

function randomCharacterArc() {
  let arc = data.characterarc[Math.floor(Math.random() * data.characterarc.length)];
  document.getElementById("character-random-arc").innerHTML = arc;
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

document.getElementById("new-random-character-arc").addEventListener("click", function (event) {
  randomCharacterArc();
});

document.getElementById("new-random-character-flavor").addEventListener("click", function (event) {
  randomCharacterFlavor();
});

document.getElementById("new-random-character-sentence").addEventListener("click", function (event) {
  randomCharacterDescriptor();
  randomCharacterType();
  randomCharacterFocus(); 
  randomCharacterFlavor();
  randomCharacterArc();
});
