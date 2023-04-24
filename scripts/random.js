// Fetch data
let fetchData = await fetch("./db/db.json");
let data = await fetchData.json();

generateOddity();

// Random Character
function generateCharacterSentence() {
  let characterdescriptor = data.characterdescriptors[Math.floor(Math.random() * data.characterdescriptors.length)];
  let charactertype = data.charactertypes[Math.floor(Math.random() * data.charactertypes.length)];;
  let characterfocus = data.characterfoci[Math.floor(Math.random() * data.characterfoci.length)];;
  let randomcharactersentence = characterdescriptor + " " + charactertype + " who " + characterfocus;
  document.getElementById("random-character-sentence").innerHTML = randomcharactersentence;
}
// Random Oddity
function generateOddity() {
  let oddityquality = data.oddityqualities[Math.floor(Math.random() * data.oddityqualities.length)];
  let oddityproperty = data.oddityproperties[Math.floor(Math.random() * data.oddityproperties.length)];;
  let oddityform = data.oddityforms[Math.floor(Math.random() * data.oddityforms.length)];;
  let randomoddity = oddityquality + " " + oddityproperty + " " + oddityform;
  document.getElementById("random-oddity").innerHTML = randomoddity;
}

document.getElementById("random-character-sentence-button").addEventListener("click", function (event) {
  generateCharacterSentence();
});

document.getElementById("random-oddity-button").addEventListener("click", function (event) {
  generateOddity();
});