// Fetch data
let fetchData = await fetch("./db/og-dd.json");
let data = await fetchData.json();

//initialize

randomOddityQuality();
randomOddityProperty();
randomOddityForm();

randomOddityQuality();
randomOddityProperty();
randomOddityForm();

randomLocationQuality1();
randomLocationQuality2();
randomLocationType();
randomLocationContents();
randomLocationEncounter();
randomObliqueStrategy();

randomInformationGeneral();
randomInformationSpecific();

randomNPCStory();

randomNPCDisposition1();
randomNPCDisposition2();
randomNPCType1();
randomNPCType2();
randomNPCPhobia();

// Random Oddity

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

function randomLocationQuality1() {
  let descriptor = data.locationquality1[Math.floor(Math.random() * data.locationquality1.length)];
  document.getElementById("location-random-quality1").innerHTML = descriptor;
}

function randomLocationQuality2() {
  let descriptor = data.locationquality2[Math.floor(Math.random() * data.locationquality2.length)];
  document.getElementById("location-random-quality2").innerHTML = descriptor;
}

function randomLocationType() {
  let descriptor = data.locationtype[Math.floor(Math.random() * data.locationtype.length)];
  document.getElementById("location-random-type").innerHTML = descriptor;
}

function randomLocationContents() {
  let descriptor = data.locationcontents[Math.floor(Math.random() * data.locationcontents.length)];
  document.getElementById("location-random-contents").innerHTML = descriptor;
}

function randomLocationEncounter() {
  let descriptor = data.locationencounter[Math.floor(Math.random() * data.locationencounter.length)];
  document.getElementById("location-random-encounter").innerHTML = descriptor;
}

function randomObliqueStrategy() {
  let descriptor = data.obliquestrategies[Math.floor(Math.random() * data.obliquestrategies.length)];
  document.getElementById("oblique-strategy").innerHTML = descriptor;
}

function randomInformationGeneral() {
  let descriptor = data.informationgeneral[Math.floor(Math.random() * data.informationgeneral.length)];
  document.getElementById("information-random-general").innerHTML = descriptor;
}

function randomInformationSpecific() {
  let descriptor = data.informationspecific[Math.floor(Math.random() * data.informationspecific.length)];
  document.getElementById("information-random-specific").innerHTML = descriptor;
}

function randomNPCStory() {
  let descriptor = data.npcstory[Math.floor(Math.random() * data.npcstory.length)];
  document.getElementById("npc-random-story").innerHTML = descriptor;
}
function randomNPCDisposition1() {
  let descriptor = data.npcdisposition1[Math.floor(Math.random() * data.npcdisposition1.length)];
  document.getElementById("npc-random-disposition1").innerHTML = descriptor;
}

function randomNPCDisposition2() {
  let descriptor = data.npcdisposition2[Math.floor(Math.random() * data.npcdisposition2.length)];
  document.getElementById("npc-random-disposition2").innerHTML = descriptor;
}

function randomNPCType1() {
  let descriptor = data.npctype1[Math.floor(Math.random() * data.npctype1.length)];
  document.getElementById("npc-random-type1").innerHTML = descriptor;
}

function randomNPCType2() {
  let descriptor = data.npctype2[Math.floor(Math.random() * data.npctype2.length)];
  document.getElementById("npc-random-type2").innerHTML = descriptor;
}

function randomNPCPhobia() {
  let descriptor = data.npcphobia[Math.floor(Math.random() * data.npcphobia.length)];
  document.getElementById("npc-random-phobia").innerHTML = descriptor;
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

document.getElementById("new-random-location-quality1").addEventListener("click", function (event) {
  randomLocationQuality1();
});

document.getElementById("new-random-location-quality2").addEventListener("click", function (event) {
  randomLocationQuality2();
});

document.getElementById("new-random-location-type").addEventListener("click", function (event) {
  randomLocationType();
});

document.getElementById("new-random-location-contents").addEventListener("click", function (event) {
  randomLocationContents();
});

document.getElementById("new-random-location-encounter").addEventListener("click", function (event) {
  randomLocationEncounter();
});

document.getElementById("new-random-oblique-strategy").addEventListener("click", function (event) {
  randomObliqueStrategy();
});

document.getElementById("new-random-information").addEventListener("click", function (event) {
  randomInformationGeneral();
  randomInformationSpecific();
});

document.getElementById("new-random-information-general").addEventListener("click", function (event) {
  randomInformationGeneral();
});

document.getElementById("new-random-information-specific").addEventListener("click", function (event) {
  randomInformationSpecific();
});


document.getElementById("new-random-location").addEventListener("click", function (event) {
  randomLocationQuality1();
  randomLocationQuality2();
  randomLocationType();
  randomLocationContents();
  randomLocationEncounter();
  randomObliqueStrategy();
});

document.getElementById("new-random-npc-story").addEventListener("click", function (event) {
  randomNPCStory();
});

document.getElementById("new-random-npc-disposition1").addEventListener("click", function (event) {
  randomNPCDisposition1();
});

document.getElementById("new-random-npc-disposition2").addEventListener("click", function (event) {
  randomNPCDisposition2();
});

document.getElementById("new-random-npc-type1").addEventListener("click", function (event) {
  randomNPCType1();
});

document.getElementById("new-random-npc-type2").addEventListener("click", function (event) {
  randomNPCType2();
});

document.getElementById("new-random-npc-phobia").addEventListener("click", function (event) {
  randomNPCPhobia();
});

document.getElementById("new-random-npc").addEventListener("click", function (event) {
  randomNPCDisposition1();
  randomNPCDisposition2();
  randomNPCType1();
  randomNPCType2();
  randomNPCPhobia();
});

