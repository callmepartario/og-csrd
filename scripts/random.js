// Fetch data
let fetchData = await fetch("./db/db.json");
let data = await fetchData.json();

generateOddity();

// Random Character
function generateCharacterSentence() {
  let characterdescriptor = data.characterdescriptorlist[Math.floor(Math.random() * data.characterdescriptorlist.length)];
  let charactertype = data.charactertypelist[Math.floor(Math.random() * data.charactertypelist.length)];;
  let characterfocus = data.characterfouslist[Math.floor(Math.random() * data.characterfouslist.length)];;
  let randomcharactersentence = "I am a(n) <em>" + characterdescriptor + " " + charactertype + "</em> who <em>" + characterfocus + "</em>.";
  document.getElementById("random-character-sentence").innerHTML = randomcharactersentence;
}
// Random Oddity
function generateOddity() {
  let oddityquality = data.oddityqualitylist[Math.floor(Math.random() * data.oddityqualitylist.length)];
  let oddityproperty = data.odditypropertylist[Math.floor(Math.random() * data.odditypropertylist.length)];;
  let oddityform = data.oddityformlist[Math.floor(Math.random() * data.oddityformlist.length)];;
  let randomoddity = oddityquality + " " + oddityproperty + " " + oddityform;
  document.getElementById("random-oddity").innerHTML = randomoddity;
}

document.getElementById("random-character-sentence-button").addEventListener("click", function (event) {
  generateCharacterSentence();
});

document.getElementById("random-oddity-button").addEventListener("click", function (event) {
  generateOddity();
});