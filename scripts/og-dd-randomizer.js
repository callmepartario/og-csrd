// Fetch data
let fetchData = await fetch("./db/og-dd.json");
let data = await fetchData.json();

//initialize

randomOddityQuality();
randomOddityProperty();
randomOddityForm();

// Random Character Descriptor, Type and Focus

function randomOddityQuality() {
  let descriptor = data.oddityquality[Math.floor(Math.random() * data.oddityquality.length)];
  document.getElementById("oddity-random-quality").innerHTML = descriptor;
}

function randomOddityProperty() {
  let type = data.oddityproperty[Math.floor(Math.random() * data.oddityproperty.length)];
  document.getElementById("oddity-random-property").innerHTML = type;
}

function randomOddityForm() {
  let focus = data.oddityform[Math.floor(Math.random() * data.oddityform.length)];
  document.getElementById("oddity-random-form").innerHTML = focus;
}

// Listen

document.getElementById("new-random-oddity-quality").addEventListener("click", function (event) {
  randomOddityQuality();
});

document.getElementById("new-random-oddity-property").addEventListener("click", function (event) {
  randomOddityProperty();
});

document.getElementById("new-random-oddity-form").addEventListener("click", function (event) {
  randomOddityForm();
});

document.getElementById("new-random-oddity").addEventListener("click", function (event) {
  randomOddityQuality();
  randomOddityProperty();
  randomOddityForm();  
});
