// Fetch data
let fetchData = await fetch("./db/db.json");
let data = await fetchData.json();

generateOddity();

// Functions
function generateOddity() {
  let oddityquality = data.oddityqualities[Math.floor(Math.random() * data.oddityqualities.length)];
  let oddityproperty = data.oddityproperties[Math.floor(Math.random() * data.oddityproperties.length)];;
  let oddityform = data.oddityforms[Math.floor(Math.random() * data.oddityforms.length)];;
  let oddity = oddityquality + " " + oddityproperty + " " + oddityform;

  // Send oddity to HTML
  document.getElementById("random-oddity").innerHTML = oddity;
}

document.getElementById('random-oddity-button').addEventListener('click', function (event) {
  generateOddity();
});