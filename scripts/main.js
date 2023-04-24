// Fetch data
let fetchData = await fetch("./db/db.json");
let data = await fetchData.json();

generateOddity();

// Functions
function generateOddity() {
  let quality = data.qualities[Math.floor(Math.random() * data.qualities.length)];
  let property = data.properties[Math.floor(Math.random() * data.properties.length)];;
  let form = data.forms[Math.floor(Math.random() * data.forms.length)];;
  let oddity = quality + " " + property + " " + form;

  // Send oddity to HTML
  document.getElementById("oddity").innerHTML = oddity;
}

document.getElementById('generate-oddity-button').addEventListener('click', function (event) {
  generateOddity();
});