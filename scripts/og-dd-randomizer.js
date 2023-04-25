// Fetch data
let fetchData = await fetch("./db/og-dd.json");
let data = await fetchData.json();

//initialize

randomOddityQuality();
randomOddityProperty();
randomOddityForm();

// Random Character Descriptor, Type and Focus

function randomOddityQuality() {
  let descriptor = data.characterdescriptor[Math.floor(Math.random() * data.characterdescriptor.length)];
  document.getElementById("oddity-random-quality").innerHTML = descriptor;
}

function randomOddityProperty() {
  let type = data.charactertype[Math.floor(Math.random() * data.charactertype.length)];
  document.getElementById("oddity-random-property").innerHTML = type;
}

function randomOddityForm() {
  let focus = data.characterfocus[Math.floor(Math.random() * data.characterfocus.length)];
  document.getElementById("oddity-random-form").innerHTML = focus;
}

// Listen

document.getElementById("new-random-oddity-quality").addEventListener("click", function (event) {
  randomCharacterDescriptor();
});

document.getElementById("new-random-oddity-property").addEventListener("click", function (event) {
  randomCharacterType();
});

document.getElementById("new-random-oddity-form").addEventListener("click", function (event) {
  randomCharacterFocus();
});

document.getElementById("new-random-oddity-sentence").addEventListener("click", function (event) {
  randomCharacterDescriptor();
  randomCharacterType();
  randomCharacterFocus();  
});
