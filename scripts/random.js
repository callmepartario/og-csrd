// Fetch data
let fetchData = await fetch("./db/db.json");
let data = await fetchData.json();

generateCharacterSentence();
generateOddity();

// Random Character
function generateCharacterSentence() {
  let characterdescriptor = data.characterdescriptorlist[Math.floor(Math.random() * data.characterdescriptorlist.length)];
  let charactertype = data.charactertypelist[Math.floor(Math.random() * data.charactertypelist.length)];;
  let characterfocus = data.characterfocuslist[Math.floor(Math.random() * data.characterfocuslist.length)];;
  let charactersentence = "I am " + characterdescriptor + " " + charactertype + " who " + characterfocus + ".";
  document.getElementById("generated-character-sentence").innerHTML = charactersentence;
}
// Random Oddity
function generateOddity() {
  let oddityquality = data.oddityqualitylist[Math.floor(Math.random() * data.oddityqualitylist.length)];
  let oddityproperty = data.odditypropertylist[Math.floor(Math.random() * data.odditypropertylist.length)];;
  let oddityform = data.oddityformlist[Math.floor(Math.random() * data.oddityformlist.length)];;
  let oddity = oddityquality + " " + oddityproperty + " " + oddityform;
  document.getElementById("random-oddity").innerHTML = oddity;
}

// Listen
document.getElementById("generate-new-character-sentence").addEventListener("click", function (event) {
  generateCharacterSentence();
});

document.getElementById("generate-new-random-oddity").addEventListener("click", function (event) {
  generateOddity();
});