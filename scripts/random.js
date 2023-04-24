// Fetch data
let fetchData = await fetch("./db/db.json");
let data = await fetchData.json();

//initialize
generateCharacterSentence();
generateOddity();

// Random Character
function generateCharacterSentence() {
  let descriptor = data.characterdescriptorlist[Math.floor(Math.random() * data.characterdescriptorlist.length)];
  let type = data.charactertypelist[Math.floor(Math.random() * data.charactertypelist.length)];;
  let focus = data.characterfocuslist[Math.floor(Math.random() * data.characterfocuslist.length)];;
  let sentence = "I am " + descriptor + " " + type + " who " + focus + ".";
  document.getElementById("generated-character-sentence").innerHTML = sentence;
}
// Random Oddity
function generateOddity() {
  let quality = data.oddityqualitylist[Math.floor(Math.random() * data.oddityqualitylist.length)];
  let property = data.odditypropertylist[Math.floor(Math.random() * data.odditypropertylist.length)];;
  let form = data.oddityformlist[Math.floor(Math.random() * data.oddityformlist.length)];;
  let oddity = quality + " " + property + " " + form;
  document.getElementById("random-oddity").innerHTML = oddity;
}

// Listen
document.getElementById("generate-new-character-sentence").addEventListener("click", function (event) {
  generateCharacterSentences();
});

document.getElementById("generate-new-random-oddity").addEventListener("click", function (event) {
  generateOddity();
});

