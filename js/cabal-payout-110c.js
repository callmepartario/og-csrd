// User set variables
let voyageNumber = '';
let faction = '';
let factionFleet = '';
let factionIcon = '';
let factionIconReport = '';
let factionVault = '';
let factionVaultAccount = '';
let shipType = 0;
let shipTypeEmoji = '';
let shipName = '';
let shipNameValue = '';

let jobType = '';
let jobRate = 0;

let goldStart = 0;
let goldStartValue = 0;
let goldEnd = 0;
let goldEndValue = 0;
let doubloonStart = 0;
let doubloonStartValue = 0;
let doubloonEnd = 0;
let doubloonEndValue = 0;

let bonusStraightShip = 0;
let bonusStraightShipAmount = 0;
let bonusFullHouse = 0;
let bonusFullHouseAmount = 0;
let bonusRoyalFlush = 0;
let bonusRoyalFlushAmount = 0;
let bonusUnitedDeck = 0;
let bonusUnitedDeckAmount = 0;
let bonusPaiGow = 0;
let bonusPaiGowAmount = 0;
let bonusBlackjackAmount = 0;
let bonusCrapsTableAmount = 0;

let bonusEligible = false;

let bonusDiceCount = 0;
let bonusDiceValue = 0;
let bonusDiceAmount = 0;

let voyageSummary = '';
let voyageSummaryValue = '';

let totalGold = 0;
let totalDoubloonCount = 0;
let totalDoubloonGold = 0;
let totalPlunder = 0;
let totalJobPay = 0;
let totalBonus = 0;
let totalFactionVault = 0;

let crewName1 = '';
let crewName1Value = '';
let crewRank1 = 0;
let crewRank1Value = 0;
let crewPercent1 = 0;
let crewPercent1Value = 0;

let crewName2 = '';
let crewName2Value = '';
let crewRank2 = 0;
let crewRank2Value = 0;
let crewPercent2 = 0;
let crewPercent2Value = 0;

let crewName3 = '';
let crewName3Value = '';
let crewRank3 = 0;
let crewRank3Value = 0;
let crewPercent3 = 0;
let crewPercent3Value = 0;

let crewName4 = '';
let crewName4Value = '';
let crewRank4 = 0;
let crewRank4Value = 0;
let crewPercent4 = 0;
let crewPercent4Value = 0;

let crewName5 = '';
let crewName5Value = '';
let crewRank5 = 0;
let crewRank5Value = 0;
let crewPercent5 = 0;
let crewPercent5Value = 0;

let crewName6 = '';
let crewName6Value = '';
let crewRank6 = 0;
let crewRank6Value = 0;
let crewPercent6 = 0;
let crewPercent6Value = 0;

let crewName7 = '';
let crewName7Value = '';
let crewRank7 = 0;
let crewRank7Value = 0;
let crewPercent7 = 0;
let crewPercent7Value = 0;

let crewName8 = '';
let crewName8Value = '';
let crewRank8 = 0;
let crewRank8Value = 0;
let crewPercent8 = 0;
let crewPercent8Value = 0;

let crewName9 = '';
let crewName9Value = '';
let crewRank9 = 0;
let crewRank9Value = 0;
let crewPercent9 = 0;
let crewPercent9Value = 0;

let crewName10 = '';
let crewName10Value = '';
let crewRank10 = 0;
let crewRank10Value = 0;
let crewPercent10 = 0;
let crewPercent10Value = 0;

let crewSupplement = 0;
let crewParticipation = 0;
let crewStowawayPresent = false;
let crewFactionless = false;
let crewRankLevel = 0;

let activityRows = 0;

const nActivities = 25;
const activities = Array(nActivities);
const activityValues = Array(nActivities);
const activityQties = Array(nActivities);
const activityQtyValues = Array(nActivities);

let errorCount = 0;
let warningCount = 0;

let helpToggle = false;

// HTML interfacing
// select faction
document.getElementById('select-faction-ao').onclick = function() {selectFactionAO()};
document.getElementById('select-faction-ac').onclick = function() {selectFactionAC()};
document.getElementById('select-faction-kw').onclick = function() {selectFactionKW()};
document.getElementById('select-faction-ns').onclick = function() {selectFactionNS()};
document.getElementById('select-faction-mg').onclick = function() {selectFactionMG()};
document.getElementById('select-faction-lf').onclick = function() {selectFactionLF()};
// select ship type
document.getElementById('select-ship-sloop').onclick = function() {selectShipSloop()};
document.getElementById('select-ship-brigantine').onclick = function() {selectShipBrigantine()};
document.getElementById('select-ship-galleon').onclick = function() {selectShipGalleon()};
// select job type
document.getElementById('select-job-errand').onclick = function() {selectJobErrand()};
document.getElementById('select-job-heist').onclick = function() {selectJobHeist()};
// add or remove crew
document.getElementById('crew-add').onclick = function() {crewAdd()};
document.getElementById('crew-remove').onclick = function() {crewRemove()};
// add or remove activity
document.getElementById('activity-add').onclick = function() {activityAdd()};
document.getElementById('activity-remove').onclick = function() {activityRemove()};
// generate report
document.getElementById('generate-report').onclick = function() {generateReport()};
// show or hide approprite bonus options (based ship and job type)
document.getElementById("voyage").addEventListener("load", checkBonusEligibility());
// toggle help
document.getElementById("toggle-help").onclick = function() {toggleHelp()};

// Toggle help
function toggleHelp() {
    if (helpToggle == false) {
        document.getElementById('help-faction').classList.remove('d-none');
        document.getElementById('help-ship').classList.remove('d-none');
        document.getElementById('help-job').classList.remove('d-none');
        document.getElementById('help-crew').classList.remove('d-none');
        document.getElementById('help-bonus').classList.remove('d-none');
        document.getElementById('help-bonus-automatic').classList.remove('d-none');
        document.getElementById('help-activity').classList.remove('d-none');
        document.getElementById('help-plunder').classList.remove('d-none');
        document.getElementById('help-summary').classList.remove('d-none');
        document.getElementById('help-report').classList.remove('d-none');
        document.getElementById('help-total-plunder').classList.remove('d-none');
        document.getElementById('help-discord').classList.remove('d-none');
        helpToggle = true;
        document.getElementById("toggle-help").classList.remove('btn-muted');
        document.getElementById("toggle-help").classList.add('btn-selected');
    }
    else {
        document.getElementById('help-faction').classList.add('d-none');
        document.getElementById('help-ship').classList.add('d-none');
        document.getElementById('help-job').classList.add('d-none');
        document.getElementById('help-crew').classList.add('d-none');
        document.getElementById('help-bonus').classList.add('d-none');
        document.getElementById('help-bonus-automatic').classList.add('d-none');
        document.getElementById('help-activity').classList.add('d-none');
        document.getElementById('help-plunder').classList.add('d-none');
        document.getElementById('help-summary').classList.add('d-none');
        document.getElementById('help-report').classList.add('d-none');
        document.getElementById('help-discord').classList.add('d-none');
        helpToggle = false;
        document.getElementById("toggle-help").classList.remove('btn-selected');
        document.getElementById("toggle-help").classList.add('btn-muted');
    }
    checkBonusEligibility()
};

// Select Faction
function deselectFaction() {
    document.getElementById('total-vault').classList.remove('d-none');
    if (document.getElementById('select-faction-ao').classList.contains('btn-selected')) {
        document.getElementById('select-faction-ao').classList.remove('btn-selected');
        document.getElementById('select-faction-ao').classList.add('btn-muted');
    }
    if (document.getElementById('select-faction-ac').classList.contains('btn-selected')) {
        document.getElementById('select-faction-ac').classList.remove('btn-selected');
        document.getElementById('select-faction-ac').classList.add('btn-muted');
    }
    if (document.getElementById('select-faction-kw').classList.contains('btn-selected')) {
        document.getElementById('select-faction-kw').classList.remove('btn-selected');
        document.getElementById('select-faction-kw').classList.add('btn-muted');
    }
    if (document.getElementById('select-faction-ns').classList.contains('btn-selected')) {
        document.getElementById('select-faction-ns').classList.remove('btn-selected');
        document.getElementById('select-faction-ns').classList.add('btn-muted');
    }
    if (document.getElementById('select-faction-mg').classList.contains('btn-selected')) {
        document.getElementById('select-faction-mg').classList.remove('btn-selected');
        document.getElementById('select-faction-mg').classList.add('btn-muted');
    }
    if (document.getElementById('select-faction-lf').classList.contains('btn-selected')) {
        document.getElementById('select-faction-lf').classList.remove('btn-selected');
        document.getElementById('select-faction-lf').classList.add('btn-muted');
    }
}
function selectFactionAO() {
    deselectFaction();
    document.getElementById('select-faction-ao').classList.remove('btn-muted');
    document.getElementById('select-faction-ao').classList.add('btn-selected');
    faction = 'AO';
    factionFleet = 'The Ancient Armada';
    factionIcon = "<img src='images/faction-ao.webp' aria-hidden='true' alt='' class='icon'>";
    factionIconReport = ":AO:";
    factionVault = 'Ancients Vault';
    factionVaultAccount = '@ancientsvault';
};
function selectFactionAC() {
    deselectFaction();
    document.getElementById('select-faction-ac').classList.remove('btn-muted');
    document.getElementById('select-faction-ac').classList.add('btn-selected');
    faction = 'AC';
    factionFleet = "The Devil's Fleet";
    factionIcon = "<img src='images/faction-ac.webp' aria-hidden='true' alt='' class='icon'>";
    factionIconReport = ":ASH:";
    factionVault = 'Ashen Vault';
    factionVaultAccount = '@ashenvault';
};
function selectFactionKW() {
    deselectFaction();
    document.getElementById('select-faction-kw').classList.remove('btn-muted');
    document.getElementById('select-faction-kw').classList.add('btn-selected');
    faction = 'KW';
    factionFleet = 'The Convoy of the Wilds';
    factionIcon = "<img src='images/faction-kw.webp' aria-hidden='true' alt='' class='icon'>";
    factionIconReport = ":KW:";
    factionVault = 'Kinship Vault';
    factionVaultAccount = '@kinshipvault';
};
function selectFactionNS() {
    deselectFaction();
    document.getElementById('select-faction-ns').classList.remove('btn-muted');
    document.getElementById('select-faction-ns').classList.add('btn-selected');
    faction = 'NS';
    factionFleet = "The Norsemen's Storm Fleet";
    factionIcon = "<img src='images/faction-ns.webp' aria-hidden='true' alt='' class='icon'>";
    factionIconReport = ":Norseman:";
    factionVault = 'Norsemen Vault';
    factionVaultAccount = '@norsemenvault';
};
function selectFactionMG() {
    deselectFaction();
    document.getElementById('select-faction-mg').classList.remove('btn-muted');
    document.getElementById('select-faction-mg').classList.add('btn-selected');
    faction = 'MG';
    factionIcon = "<img src='images/faction-mg.webp' aria-hidden='true' alt='' class='icon'>";
    factionIconReport = ":marauders:";
    factionFleet = "The Marauder's Legion";
    factionVault = 'Marauders Vault';
    factionVaultAccount = '@maraudersvault';
};
function selectFactionLF() {
    deselectFaction();
    document.getElementById('select-faction-lf').classList.remove('btn-muted');
    document.getElementById('select-faction-lf').classList.add('btn-selected');
    faction = 'LF';
    factionIcon = "<img src='images/cabal.webp' aria-hidden='true' alt='' class='icon'>";
    factionIconReport = ":cabal:";
    factionFleet = "The Lord of the Fleets";
    factionVault = 'Lord of the Fleets Vault';
    factionVaultAccount = '@lordoffleetsvault';
};

// Select Ship Size
function deselectShip() {
    document.getElementById('help-job-sloop').classList.add('d-none');
    if (document.getElementById('select-ship-sloop').classList.contains('btn-selected')) {
        document.getElementById('select-ship-sloop').classList.remove('btn-selected');
        document.getElementById('select-ship-sloop').classList.add('btn-muted');
    }
    if (document.getElementById('select-ship-brigantine').classList.contains('btn-selected')) {
        document.getElementById('select-ship-brigantine').classList.remove('btn-selected');
        document.getElementById('select-ship-brigantine').classList.add('btn-muted');
    }
    if (document.getElementById('select-ship-galleon').classList.contains('btn-selected')) {
        document.getElementById('select-ship-galleon').classList.remove('btn-selected');
        document.getElementById('select-ship-galleon').classList.add('btn-muted');
    }
}
function selectShipSloop() {
    deselectShip();
    document.getElementById('select-ship-sloop').classList.remove('btn-muted');
    document.getElementById('select-ship-sloop').classList.add('btn-selected');
    shipType = 2;
    shipTypeEmoji = ':shipSloop1:';
    selectJobErrand();
    crewShow();
    checkBonusEligibility();
    document.getElementById('help-job-sloop').classList.remove('d-none');
};
function selectShipBrigantine() {
    deselectShip();
    document.getElementById('select-ship-brigantine').classList.remove('btn-muted');
    document.getElementById('select-ship-brigantine').classList.add('btn-selected');
    shipType = 3;
    shipTypeEmoji = ':shipBrigantine1:';
    crewShow();
    checkBonusEligibility();
};
function selectShipGalleon() {
    deselectShip();
    document.getElementById('select-ship-galleon').classList.remove('btn-muted');
    document.getElementById('select-ship-galleon').classList.add('btn-selected');
    shipType = 4;
    shipTypeEmoji = ':emoji_100:';
    crewShow();
    checkBonusEligibility();
};

// Select Job
function deselectJob() {
    document.getElementById('help-job-errand').classList.add('d-none');
    if (document.getElementById('select-job-errand').classList.contains('btn-selected')) {
        document.getElementById('select-job-errand').classList.remove('btn-selected');
        document.getElementById('select-job-errand').classList.add('btn-muted');
    }
    document.getElementById('help-job-heist').classList.add('d-none');
    if (document.getElementById('select-job-heist').classList.contains('btn-selected')) {
        document.getElementById('select-job-heist').classList.remove('btn-selected');
        document.getElementById('select-job-heist').classList.add('btn-muted');
    }
}
function selectJobErrand() {
    deselectJob();
    document.getElementById('select-job-errand').classList.remove('btn-muted');
    document.getElementById('select-job-errand').classList.add('btn-selected');
    jobType = 'Errand';
    jobRate = 0.05;
    document.getElementById('help-job-errand').classList.remove('d-none');
    checkBonusEligibility();
};
function selectJobHeist() {
    if (shipType > 2) {
        deselectJob();
        document.getElementById('select-job-heist').classList.remove('btn-muted');
        document.getElementById('select-job-heist').classList.add('btn-selected');
        jobType = 'Heist';
        jobRate = 0.08;
        document.getElementById('help-job-heist').classList.remove('d-none');
        checkBonusEligibility();
    }
};

// Add or remove crew rows
function crewAdd() {
    if (shipType >= 2) {
        crewSupplement++;
        crewShow();
    }
};
function crewRemove() {
    if (shipType >= 2) {
        crewSupplement--;
        crewShow();
    }
};
function crewShow() {
    // contstrain variables based on selections
    if (shipType + crewSupplement > 10) {
        crewSupplement = 10 - shipType;
    }
    if (crewSupplement < 0) {
        crewSupplement = 0;
    }
    // show or hide rows as appropriate
    if (shipType + crewSupplement >= 1) {
        document.getElementById('crew-1').classList.remove('d-none');
    }
    else {
        document.getElementById('crew-1').classList.add('d-none');
    }
    if (shipType + crewSupplement >= 2) {
        document.getElementById('crew-2').classList.remove('d-none');
    }
    else {
        document.getElementById('crew-2').classList.add('d-none');
    }
    if (shipType + crewSupplement >= 3) {
        document.getElementById('crew-3').classList.remove('d-none');
    }
    else {
        document.getElementById('crew-3').classList.add('d-none');
    }
    if (shipType + crewSupplement >= 4) {
        document.getElementById('crew-4').classList.remove('d-none');
    }
    else {
        document.getElementById('crew-4').classList.add('d-none');
    }
    if (shipType + crewSupplement >= 5) {
        document.getElementById('crew-5').classList.remove('d-none');
    }
    else {
        document.getElementById('crew-5').classList.add('d-none');
    }
    if (shipType + crewSupplement >= 6) {
        document.getElementById('crew-6').classList.remove('d-none');
    }
    else {
        document.getElementById('crew-6').classList.add('d-none');
    }
    if (shipType + crewSupplement >= 7) {
        document.getElementById('crew-7').classList.remove('d-none');
    }
    else {
        document.getElementById('crew-7').classList.add('d-none');
    }
    if (shipType + crewSupplement >= 8) {
        document.getElementById('crew-8').classList.remove('d-none');
    }
    else {
        document.getElementById('crew-8').classList.add('d-none');
    }
    if (shipType + crewSupplement >= 9) {
        document.getElementById('crew-9').classList.remove('d-none');
    }
    else {
        document.getElementById('crew-9').classList.add('d-none');
    }
    if (shipType + crewSupplement >= 10) {
        document.getElementById('crew-10').classList.remove('d-none');
    }
    else {
        document.getElementById('crew-10').classList.add('d-none');
    }
    if (crewSupplement > 0) {
        // participation visible
        document.getElementById('crew-1-participation').classList.remove('d-none');
        document.getElementById('crew-2-participation').classList.remove('d-none');
        document.getElementById('crew-3-participation').classList.remove('d-none');
        document.getElementById('crew-4-participation').classList.remove('d-none');
        document.getElementById('crew-5-participation').classList.remove('d-none');
        document.getElementById('crew-6-participation').classList.remove('d-none');
        document.getElementById('crew-7-participation').classList.remove('d-none');
        document.getElementById('crew-8-participation').classList.remove('d-none');
        document.getElementById('crew-9-participation').classList.remove('d-none');
        document.getElementById('crew-10-participation').classList.remove('d-none');
    }
    else {
        // participation invisible
        document.getElementById('crew-1-participation').classList.add('d-none');
        document.getElementById('crew-2-participation').classList.add('d-none');
        document.getElementById('crew-3-participation').classList.add('d-none');
        document.getElementById('crew-4-participation').classList.add('d-none');
        document.getElementById('crew-5-participation').classList.add('d-none');
        document.getElementById('crew-6-participation').classList.add('d-none');
        document.getElementById('crew-7-participation').classList.add('d-none');
        document.getElementById('crew-8-participation').classList.add('d-none');
        document.getElementById('crew-9-participation').classList.add('d-none');
        document.getElementById('crew-10-participation').classList.add('d-none');
    }
};

// Add or remove activity rows
function activityAdd() {
    activityRows++;
    if (activityRows > 25) {
        activityRows = 25;
    }
    document.getElementById('activity-'+ activityRows).classList.remove('d-none');
};
function activityRemove() {
    document.getElementById('activity-'+ activityRows).classList.add('d-none');
    activityRows--;
    if (activityRows < 0) {
        activityRows = 0;
    }
};
function checkActivityRow(x) {
    if (activityRows >= (x)) {
        document.getElementById('report-activity-' + x).classList.remove('d-none');
        document.getElementById('report-activity-' + x + '-qty').classList.remove('d-none');
    }
    else {
        document.getElementById('report-activity-' + x).classList.add('d-none');
        document.getElementById('report-activity-' + x + '-qty').classList.add('d-none');
    }
};
function checkActivityLog() {
  for(let i = 1 ; i <= nActivities ; i++) {
    checkActivityRow(i);
  }
  for(let i = 1 ; i <= nActivities ; i++) {
    activities[i] = document.getElementById(`activity-${i}-type`);
    activityQties[i] = document.getElementById(`activity-${i}-qty`);
    activityValues[i] = activities[i].value;
    activityQtyValues[i] = activityQties[i].valueAsNumber;
    document.getElementById(`report-activity-${i}-type`).innerHTML = activityValues[i];
    document.getElementById(`report-activity-${i}-qty`).innerHTML = activityQtyValues[i];
  }
}

// Check Bonus Eligibility
function checkBonusEligibility() {
    document.getElementById('bonus-list-straight-ship').classList.add('d-none');
    document.getElementById('bonus-list-full-house').classList.add('d-none');
    document.getElementById('bonus-list-royal-flush').classList.add('d-none');
    document.getElementById('bonus-list-united-deck').classList.add('d-none');
    document.getElementById('help-bonus-ship-size').classList.add('d-none');
    document.getElementById('help-bonus-ship-size-sloop').classList.add('d-none');
    document.getElementById('help-bonus-specialty-rank').classList.add('d-none');
    if (shipType <=2) {
        bonusEligible = false;
        if (helpToggle == true) {
            document.getElementById('help-bonus-ship-size').classList.remove('d-none');
            document.getElementById('help-bonus-ship-size-sloop').classList.remove('d-none');
        }
    }
    if (shipType >= 3) {
        document.getElementById('bonus-list-united-deck').classList.remove('d-none');
        bonusEligible = true;
        if (helpToggle == true) {
            document.getElementById('help-bonus-ship-size').classList.remove('d-none');
        }
    }
    if (shipType == 4) {
        document.getElementById('bonus-list-straight-ship').classList.remove('d-none');
        document.getElementById('bonus-list-full-house').classList.remove('d-none');
        document.getElementById('bonus-list-royal-flush').classList.remove('d-none');
        bonusEligible = true;
        document.getElementById('help-bonus-ship-size').classList.add('d-none');
        if (helpToggle == true) {
            document.getElementById('help-bonus-specialty-rank').classList.remove('d-none');
        }
    }
    // other: show or hide table
    if (bonusEligible == true) {
        document.getElementById('bonus-list-table').classList.remove('d-none');
    }
    else {
        document.getElementById('bonus-list-table').classList.add('d-none');
    }
};
// Determine Bonuses
function checkBonusReset() {
    bonusDiceAmount = 0;
    bonusPaiGowAmount = 0;
    bonusStraightShipAmount = 0;
    bonusFullHouseAmount = 0;
    bonusUnitedDeckAmount = 0;
    bonusRoyalFlushAmount = 0;
    bonusBlackjackAmount = 0;
    bonusCrapsTableAmount = 0;
    totalBonus = 0;
};
// check for Straight Ship
function checkBonusStraightShip() {
    bonusStraightShip = document.getElementById("bonus-straight-ship");
    if (bonusStraightShip.checked == true) {
        if (shipType == 4) {
            bonusStraightShipAmount = 1000;
            document.getElementById('total-bonus-straight-ship').classList.remove('d-none');
            document.getElementById('report-bonus-straight-ship').classList.remove('d-none');
        }
        else {
            bonusStraightShipAmount = 0;
            document.getElementById('total-bonus-straight-ship').classList.add('d-none');
            document.getElementById('report-bonus-straight-ship').classList.add('d-none');
        }
    }
};
// check for Full House
function checkBonusFullHouse() {
    bonusFullHouse = document.getElementById("bonus-full-house");
    if (bonusFullHouse.checked == true) {
        if (shipType == 4) {
            bonusFullHouseAmount = 2000;
            document.getElementById('total-bonus-full-house').classList.remove('d-none');
            document.getElementById('report-bonus-full-house').classList.remove('d-none');
        }
        else {
            bonusFullHouseAmount = 0;
            document.getElementById('total-bonus-full-house').classList.add('d-none');
            document.getElementById('report-bonus-full-house').classList.add('d-none');
        }
    }
};
// check for Royal Flush
function checkBonusRoyalFlush() {
    bonusRoyalFlush = document.getElementById("bonus-royal-flush");
    if (bonusRoyalFlush.checked == true && shipType == 4) {
        bonusRoyalFlushAmount = 2500;
        document.getElementById('total-bonus-royal-flush').classList.remove('d-none');
        document.getElementById('report-bonus-royal-flush').classList.remove('d-none');
    }
    else {
        bonusRoyalFlushAmount = 0;
        document.getElementById('total-bonus-royal-flush').classList.add('d-none');
        document.getElementById('report-bonus-royal-flush').classList.add('d-none');
    }
};
// check for United Deck
function checkBonusUnitedDeck() {
    bonusUnitedDeck = document.getElementById("bonus-united-deck");
    if (bonusUnitedDeck.checked == true) {
        if (shipType >= 3) {
            bonusUnitedDeckAmount = 2500;
            document.getElementById('total-bonus-united-deck').classList.remove('d-none');
            document.getElementById('report-bonus-united-deck').classList.remove('d-none');
        }
        else {
            bonusUnitedDeckAmount = 0;
            document.getElementById('total-bonus-united-deck').classList.add('d-none');
            document.getElementById('report-bonus-united-deck').classList.add('d-none');
        }
    }
};
function checkBonusLogic() {
    // Disable Straight Ship bonus if Royal Flush is in effect and warn
    if (bonusRoyalFlushAmount > 0 && bonusStraightShipAmount > 0) {
        bonusStraightShipAmount = 0;
        document.getElementById('total-bonus-straight-ship').classList.add('d-none');
        document.getElementById('report-bonus-straight-ship').classList.add('d-none');
        warningCount++;
        document.getElementById('warning-royal-flush').classList.remove('d-none');
    } 
    else {
        document.getElementById('warning-royal-flush').classList.add('d-none');
    }
    // Prevent impossible combinations of crew faction representation
    if ((bonusRoyalFlushAmount > 0 && bonusFullHouseAmount > 0) || (bonusFullHouseAmount > 0 && bonusUnitedDeckAmount > 0) || (bonusUnitedDeckAmount > 0 && bonusRoyalFlushAmount > 0)) {
        document.getElementById('error-bonus').classList.remove('d-none');
        errorCount++;
        // negate all bonuses
        bonusRoyalFlushAmount = 0;
        bonusFullHouseAmount = 0;
        bonusUnitedDeckAmount = 0;
        // hide all bonuses to ensure a proper reset 
        document.getElementById('total-bonus-full-house').classList.add('d-none');
        document.getElementById('report-bonus-full-house').classList.add('d-none');
        document.getElementById('total-bonus-royal-flush').classList.add('d-none');
        document.getElementById('report-bonus-royal-flush').classList.add('d-none');
        document.getElementById('total-bonus-united-deck').classList.add('d-none');
        document.getElementById('report-bonus-united-deck').classList.add('d-none');
    } 
    else {
        document.getElementById('error-bonus').classList.add('d-none');
    }
    // Bonuses requiring faction membership are prevented if the crew includes rank crate smuggler or lower
    if (crewFactionless == true && (bonusRoyalFlushAmount > 0 || bonusFullHouseAmount > 0 || bonusUnitedDeckAmount > 0)) {
        errorCount++;
        document.getElementById('error-bonus-rank').classList.remove('d-none');
    }
    else {
        document.getElementById('error-bonus-rank').classList.add('d-none');
    }
    // Warn for bonuses requiring faction membership
    if (bonusRoyalFlushAmount > 0 || bonusFullHouseAmount > 0 || bonusUnitedDeckAmount > 0) {
        if (bonusUnitedDeckAmount > 0) {
            document.getElementById('warning-bonus-faction-bonus').innerHTML = 'United Deck';
        }
        else if (bonusFullHouseAmount > 0) {
            document.getElementById('warning-bonus-faction-bonus').innerHTML = 'Full House';
        }
        else if (bonusRoyalFlushAmount > 0) {
            document.getElementById('warning-bonus-faction-bonus').innerHTML = 'Royal Flush';
        }
        warningCount++;
        document.getElementById('warning-bonus-faction').classList.remove('d-none');
    }
    else {
        document.getElementById('warning-bonus-faction').classList.add('d-none');
    }
    // Warn for bonuses requiring specialty ranks
    if (bonusStraightShipAmount > 0 || bonusRoyalFlushAmount > 0) {
        if (bonusStraightShipAmount > 0) {
            document.getElementById('warning-bonus-specialty-rank-bonus').innerHTML = 'Straight Ship';
        }
        else if (bonusRoyalFlushAmount > 0) {
            document.getElementById('warning-bonus-specialty-rank-bonus').innerHTML = 'Royal Flush';
        }
        warningCount++;
        document.getElementById('warning-bonus-specialty-rank').classList.remove('d-none');
    }
    else {
        document.getElementById('warning-bonus-specialty-rank').classList.add('d-none');
    }
}
// automatic bonuses based on crew rank
function checkBonusDice() {
    if (bonusDiceCount > 0) {
        if (jobType == 'Errand') { 
            bonusDiceValue = 1000;
        }
        else if (jobType == 'Heist') {
            bonusDiceValue = 500;
        }
        bonusDiceAmount = bonusDiceCount * bonusDiceValue;
        document.getElementById('total-bonus-dice-rate').innerHTML = printNumber(bonusDiceValue);
        document.getElementById('total-bonus-dice-count').innerHTML = bonusDiceCount;
        document.getElementById('total-bonus-dice-amount').innerHTML = printNumber(bonusDiceAmount);
        document.getElementById('total-bonus-dice').classList.remove('d-none');
        document.getElementById('report-bonus-dice-count').innerHTML = bonusDiceCount;
        document.getElementById('report-bonus-dice-amount').innerHTML = printNumber(bonusDiceAmount);
        document.getElementById('report-bonus-dice').classList.remove('d-none');
    }
    else {
        bonusDiceAmount = 0;
        document.getElementById('total-bonus-dice').classList.add('d-none');
        document.getElementById('report-bonus-dice').classList.add('d-none');
    }
};
function checkBonusPaiGow() {
    if (shipType >= 3 && crewRankLevel <= 7) {
        bonusPaiGowAmount = 3000;
        document.getElementById('total-bonus-pai-gow').classList.remove('d-none');
        document.getElementById('report-bonus-pai-gow').classList.remove('d-none');
    }
    else {
        bonusPaiGowAmount = 0;
        document.getElementById('total-bonus-pai-gow').classList.add('d-none');
        document.getElementById('report-bonus-pai-gow').classList.add('d-none');
    }
};
// automatic bonuses based on plunder total
function checkBonusBlackjack() {
    if (totalGold >= 170000) {
        if (totalGold <= 210000) {
            bonusBlackjackAmount = 3000;
            document.getElementById('total-bonus-blackjack').classList.remove('d-none');
            document.getElementById('report-bonus-blackjack').classList.remove('d-none');
        }
        else {
            bonusBlackjackAmount = 0;
            document.getElementById('total-bonus-blackjack').classList.add('d-none');
            document.getElementById('report-bonus-blackjack').classList.add('d-none');
        }
    }
};
function checkBonusCrapsTable() {
    if (totalGold >= 620000) {
        bonusCrapsTableAmount = 5000;
        document.getElementById('total-bonus-craps-table').classList.remove('d-none');
        document.getElementById('report-bonus-craps-table').classList.remove('d-none');
    }
    else {
        bonusCrapsTableAmount = 0;
        document.getElementById('total-bonus-craps-table').classList.add('d-none');
        document.getElementById('report-bonus-craps-table').classList.add('d-none');
    }
};
function checkBonusTotal() {
    totalBonus = bonusStraightShipAmount + bonusFullHouseAmount + bonusRoyalFlushAmount + bonusUnitedDeckAmount + bonusPaiGowAmount + bonusBlackjackAmount + bonusCrapsTableAmount + bonusDiceAmount;
}
// Determine Crew Cut
// check crew for minimum rank
function checkCrewRankVerbose(rank) {
    if (rank == 1) { return 'Stowaway';}
    if (rank == 2) { return 'Recruit';}
    if (rank == 3) { return 'Rum Runner';}
    if (rank == 4) { return 'Crate Smuggler';}
    if (rank == 5) { return 'Smuggler';}
    if (rank == 6) { return 'Flintlock Dealer';}
    if (rank == 7) { return 'Doubloon Shark';}
    if (rank == 8) { return 'Boatswain';}
    if (rank == 9) { return 'Powder Monkey';}
    if (rank == 10) { return 'Quartermaster';}
    if (rank == 11) { return 'First Mate';}
    if (rank == 12) { return 'Cabal Captain';}
    if (rank == 13) { return 'Cabal Boss';}
    if (rank == 14) { return 'Cabal Leader';}
};
function checkCrewRankAbbr(rank) {
    if (rank == 1) { return 'Stowaway, 1st/2nd voyage, $X earned in Y days';}
    if (rank == 2) { return 'R';}
    if (rank == 3) { return 'RR';}
    if (rank == 4) { return 'CS';}
    if (rank == 5) { return 'S';}
    if (rank == 6) { return 'FD';}
    if (rank == 7) { return 'DS';}
    if (rank == 8) { return 'BS';}
    if (rank == 9) { return 'PM';}
    if (rank == 10) { return 'QM';}
    if (rank == 11) { return '1M';}
    if (rank == 12) { return 'CC';}
    if (rank == 13) { return 'CB';}
    if (rank == 14) { return 'CL';}
};
// check crew for rate
function checkCrewRate(rank) {
    return (rank - 1) * 0.05;
};
function checkCrewRanks() {
    // reset, crew 1
    bonusDiceCount = 0;
    crewStowawayPresent = false;
    crewFactionless = false;
    crewRankLevel = crewRank1Value = parseInt(document.getElementById('crewmate-1-rank').value);
    // check remaining crew
    checkCrewRanks2();
    checkCrewRanks3();
    checkCrewRanks4();
    checkCrewRanks5();
    checkCrewRanks6();
    checkCrewRanks7();
    checkCrewRanks8();
    checkCrewRanks9();
    checkCrewRanks10();
};
function checkCrewRanks2() {
    // crew 2
    if (shipType + crewSupplement >= 2) {
        if (parseInt(document.getElementById('crewmate-2-rank').value) >= crewRankLevel) {
            crewRankLevel = parseInt(document.getElementById('crewmate-2-rank').value);
        }
        if (parseInt(document.getElementById('crewmate-2-rank').value) < 3) {
            bonusDiceCount++;
        }
        if (parseInt(document.getElementById('crewmate-2-rank').value) == 1) {
            crewStowawayPresent = true;
        }
        if (parseInt(document.getElementById('crewmate-2-rank').value) < 4) {
            crewFactionless = true;
        }
    }
};
function checkCrewRanks3() {
    // crew 3
    if (shipType + crewSupplement >= 3) {
        if (parseInt(document.getElementById('crewmate-3-rank').value) >= crewRankLevel) {
            crewRankLevel = parseInt(document.getElementById('crewmate-3-rank').value);
        }
        if (parseInt(document.getElementById('crewmate-3-rank').value) < 3) {
            bonusDiceCount++;
        }
        if (parseInt(document.getElementById('crewmate-3-rank').value) == 1) {
            crewStowawayPresent = true;
        }
        if (parseInt(document.getElementById('crewmate-3-rank').value) < 4) {
            crewFactionless = true;
        }
    }
};
function checkCrewRanks4() {
    // crew 4
    if (shipType + crewSupplement >= 4) {
        if (parseInt(document.getElementById('crewmate-4-rank').value) >= crewRankLevel) {
            crewRankLevel = parseInt(document.getElementById('crewmate-4-rank').value);
        }
        if (parseInt(document.getElementById('crewmate-4-rank').value) < 3) {
            bonusDiceCount++;
        }
        if (parseInt(document.getElementById('crewmate-4-rank').value) == 1) {
            crewStowawayPresent = true;
        }
        if (parseInt(document.getElementById('crewmate-4-rank').value) < 4) {
            crewFactionless = true;
        }
    }
};
function checkCrewRanks5() {
    // crew 5
    if (shipType + crewSupplement >= 5) {
        if (parseInt(document.getElementById('crewmate-5-rank').value) >= crewRankLevel) {
            crewRankLevel = parseInt(document.getElementById('crewmate-5-rank').value);
        }
        if (parseInt(document.getElementById('crewmate-5-rank').value) < 3) {
            bonusDiceCount++;
        }
        if (parseInt(document.getElementById('crewmate-5-rank').value) == 1) {
            crewStowawayPresent = true;
        }
        if (parseInt(document.getElementById('crewmate-5-rank').value) < 4) {
            crewFactionless = true;
        }
    }
};
function checkCrewRanks6() {
    // crew 6
    if (shipType + crewSupplement >= 6) {
        if (parseInt(document.getElementById('crewmate-6-rank').value) >= crewRankLevel) {
            crewRankLevel = parseInt(document.getElementById('crewmate-6-rank').value);
        }
        if (parseInt(document.getElementById('crewmate-6-rank').value) < 3) {
            bonusDiceCount++;
        }
        if (parseInt(document.getElementById('crewmate-6-rank').value) == 1) {
            crewStowawayPresent = true;
        }
        if (parseInt(document.getElementById('crewmate-6-rank').value) < 4) {
            crewFactionless = true;
        }
    }
};
function checkCrewRanks7() {
    // crew 7
    if (shipType + crewSupplement >= 7) {
        if (parseInt(document.getElementById('crewmate-7-rank').value) >= crewRankLevel) {
            crewRankLevel = parseInt(document.getElementById('crewmate-7-rank').value);
        }
        if (parseInt(document.getElementById('crewmate-7-rank').value) < 3) {
            bonusDiceCount++;
        }
        if (parseInt(document.getElementById('crewmate-7-rank').value) == 1) {
            crewStowawayPresent = true;
        }
        if (parseInt(document.getElementById('crewmate-7-rank').value) < 4) {
            crewFactionless = true;
        }
    }
};
function checkCrewRanks8() {
    // crew 8
    if (shipType + crewSupplement >= 8) {
        if (parseInt(document.getElementById('crewmate-8-rank').value) >= crewRankLevel) {
            crewRankLevel = parseInt(document.getElementById('crewmate-8-rank').value);
        }
        if (parseInt(document.getElementById('crewmate-8-rank').value) < 3) {
            bonusDiceCount++;
        }
        if (parseInt(document.getElementById('crewmate-8-rank').value) == 1) {
            crewStowawayPresent = true;
        }
        if (parseInt(document.getElementById('crewmate-8-rank').value) < 4) {
            crewFactionless = true;
        }
    }
};
function checkCrewRanks9() {
    // crew 9
    if (shipType + crewSupplement >= 9) {
        if (parseInt(document.getElementById('crewmate-9-rank').value) >= crewRankLevel) {
            crewRankLevel = parseInt(document.getElementById('crewmate-9-rank').value);
        }
        if (parseInt(document.getElementById('crewmate-9-rank').value) < 3) {
            bonusDiceCount++;
        }
        if (parseInt(document.getElementById('crewmate-9-rank').value) == 1) {
            crewStowawayPresent = true;
        }
        if (parseInt(document.getElementById('crewmate-9-rank').value) < 4) {
            crewFactionless = true;
        }
    }
};
function checkCrewRanks10() {
    // crew 10
    if (shipType + crewSupplement >= 10) {
        if (parseInt(document.getElementById('crewmate-10-rank').value) >= crewRankLevel) {
            crewRankLevel = parseInt(document.getElementById('crewmate-10-rank').value);
        }
        if (parseInt(document.getElementById('crewmate-10-rank').value) < 3) {
            bonusDiceCount++;
        }
        if (parseInt(document.getElementById('crewmate-10-rank').value) == 1) {
            crewStowawayPresent = true;
        }
        if (parseInt(document.getElementById('crewmate-10-rank').value) < 4) {
            crewFactionless = true;
        }
    }
};
function checkCrewCut() {
    // apply and note participation percentage for supplemented crews
    if (crewSupplement >= 1) {
        // crew 1
        if (shipType + crewSupplement >= 1) {
            crewPercent1 = document.getElementById('crew-1-percent');
            crewPercent1Value = crewPercent1.value;
            document.getElementById('total-crew-percent-1').innerHTML = '(' + crewPercent1Value + '%), ';
            document.getElementById('report-crew-percent-1').innerHTML = '(' + crewPercent1Value + '%), ';
        }
        else {
            crewPercent1Value = 0;
        }
        // crew 2
        if (shipType + crewSupplement >= 2) {
            crewPercent2 = document.getElementById('crew-2-percent');
            crewPercent2Value = crewPercent2.value;
            document.getElementById('total-crew-percent-2').innerHTML = '(' + crewPercent2Value + '%), ';
            document.getElementById('report-crew-percent-2').innerHTML = '(' + crewPercent2Value + '%), ';
        }
        else {
            crewPercent2Value = 0;
        }
        // crew 3
        if (shipType + crewSupplement >= 3) {
            crewPercent3 = document.getElementById('crew-3-percent');
            crewPercent3Value = crewPercent3.value;
            document.getElementById('total-crew-percent-3').innerHTML = '(' + crewPercent3Value + '%), ';
            document.getElementById('report-crew-percent-3').innerHTML = '(' + crewPercent3Value + '%), ';
        }
        else {
            crewPercent3Value = 0;
        }
        // crew 4}
        if (shipType + crewSupplement >= 4) {
            crewPercent4 = document.getElementById('crew-4-percent');
            crewPercent4Value = crewPercent4.value;
            document.getElementById('total-crew-percent-4').innerHTML = '(' + crewPercent4Value + '%), ';
            document.getElementById('report-crew-percent-4').innerHTML = '(' + crewPercent4Value + '%), ';
        }
        else {
            crewPercent4Value = 0;
        }
        // crew 5}
        if (shipType + crewSupplement >= 5) {
            crewPercent5 = document.getElementById('crew-5-percent');
            crewPercent5Value = crewPercent5.value;
            document.getElementById('total-crew-percent-5').innerHTML = '(' + crewPercent5Value + '%), ';
            document.getElementById('report-crew-percent-5').innerHTML = '(' + crewPercent5Value + '%), ';
        }
        else {
            crewPercent5Value = 0;
        }
        // crew 6}
        if (shipType + crewSupplement >= 6) {
            crewPercent6 = document.getElementById('crew-6-percent');
            crewPercent6Value = crewPercent6.value;
            document.getElementById('total-crew-percent-6').innerHTML = '(' + crewPercent6Value + '%), ';
            document.getElementById('report-crew-percent-6').innerHTML = '(' + crewPercent6Value + '%), ';
        }
        else {
            crewPercent6Value = 0;
        }
        // crew 7}
        if (shipType + crewSupplement >= 7) {
            crewPercent7 = document.getElementById('crew-7-percent');
            crewPercent7Value = crewPercent7.value;
            document.getElementById('total-crew-percent-7').innerHTML = '(' + crewPercent7Value + '%), ';
            document.getElementById('report-crew-percent-7').innerHTML = '(' + crewPercent7Value + '%), ';
        }
        else {
            crewPercent7Value = 0;
        }
        // crew 8}
        if (shipType + crewSupplement >= 8) {
            crewPercent8 = document.getElementById('crew-8-percent');
            crewPercent8Value = crewPercent8.value;
            document.getElementById('total-crew-percent-8').innerHTML = '(' + crewPercent8Value + '%), ';
            document.getElementById('report-crew-percent-8').innerHTML = '(' + crewPercent8Value + '%), ';
        }
        else {
            crewPercent8Value = 0;
        }
        // crew 9}
        if (shipType + crewSupplement >= 9) {
            crewPercent9 = document.getElementById('crew-9-percent');
            crewPercent9Value = crewPercent9.value;
            document.getElementById('total-crew-percent-9').innerHTML = '(' + crewPercent9Value + '%), ';
            document.getElementById('report-crew-percent-9').innerHTML = '(' + crewPercent9Value + '%), ';
        }
        else {
            crewPercent9Value = 0;
        }
        // crew 10}
        if (shipType + crewSupplement >= 10) {
            crewPercent10 = document.getElementById('crew-10-percent');
            crewPercent10Value = crewPercent10.value;
            document.getElementById('total-crew-percent-10').innerHTML = '(' + crewPercent10Value + '%), ';
            document.getElementById('report-crew-percent-10').innerHTML = '(' + crewPercent10Value + '%), ';
        }
        else {
            crewPercent10Value = 0;
        }
    }
    else {
        // discard and set participation to full for unsupplemented crew
        if (shipType >= 2 && crewSupplement == 0) {
            crewPercent1Value = 100;
            crewPercent2Value = 100;
        }
        else {
            crewPercent1Value = 0;
            crewPercent2Value = 0;
        }
        if (shipType >= 3 && crewSupplement == 0) {
            crewPercent3Value = 100;
        }
        else {
            crewPercent3Value = 0;
        }
        if (shipType == 4 && crewSupplement == 0) {
            crewPercent4Value = 100;
        }
        else {
            crewPercent4Value = 0;
        }
        crewPercent5Value = 0;
        crewPercent6Value = 0;
        crewPercent7Value = 0;
        crewPercent8Value = 0;
        crewPercent9Value = 0;
        crewPercent10Value = 0;
        // clear any reported percentages for unsupplemented cew
        document.getElementById('total-crew-percent-1').innerHTML = '';
        document.getElementById('report-crew-percent-1').innerHTML = '';
        document.getElementById('total-crew-percent-2').innerHTML = '';
        document.getElementById('report-crew-percent-2').innerHTML = '';
        document.getElementById('total-crew-percent-3').innerHTML = '';
        document.getElementById('report-crew-percent-3').innerHTML = '';
        document.getElementById('total-crew-percent-4').innerHTML = '';
        document.getElementById('report-crew-percent-4').innerHTML = '';
    }
};

function checkCrewPayout() {
    /* report and display each crewmember */
    //crew 1
    if (shipType + crewSupplement >= 1) {
        crewName1 = document.getElementById('crewmate-1-name');
        crewName1Value = crewName1.value;
        crewRank1 = document.getElementById('crewmate-1-rank');
        crewRank1Value = crewRank1.value;
        document.getElementById('total-crew-name-1').innerHTML = crewName1Value;
        document.getElementById('total-crew-rank-1').innerHTML = checkCrewRankVerbose(crewRank1Value);
        document.getElementById('total-crew-cut-1').innerHTML = Math.round(checkCrewRate(crewRank1Value) * 100);
        document.getElementById('total-crew-amount-1').innerHTML = printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank1Value) * crewPercent1Value / 100));
        document.getElementById('report-crew-name-1').innerHTML = crewName1Value;
        document.getElementById('report-crew-rank-1').innerHTML = checkCrewRankAbbr(crewRank1.value);
        if (crewRank1Value > 1) {
            document.getElementById('report-crew-1-amount').innerHTML = '$' + printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank1Value) * crewPercent1Value / 100));
            document.getElementById('report-crew-1-amount').classList.remove('d-none');
            document.getElementById('total-crew-1').classList.remove('d-none');
        }
        else {
            document.getElementById('report-crew-1-amount').classList.add('d-none');
            document.getElementById('total-crew-1').classList.add('d-none');
        }
        document.getElementById('report-crew-1').classList.remove('d-none');
    }
    else {
        document.getElementById('report-crew-1').classList.add('d-none');
    }
    //crew 2
    if (shipType + crewSupplement >= 2) {
        crewName2 = document.getElementById('crewmate-2-name');
        crewName2Value = crewName2.value;
        crewRank2 = document.getElementById('crewmate-2-rank');
        crewRank2Value = crewRank2.value;
        document.getElementById('total-crew-name-2').innerHTML = crewName2Value;
        document.getElementById('total-crew-rank-2').innerHTML = checkCrewRankVerbose(crewRank2Value);
        document.getElementById('total-crew-cut-2').innerHTML = Math.round(checkCrewRate(crewRank2Value) * 100);
        document.getElementById('total-crew-amount-2').innerHTML = printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank2Value) * crewPercent2Value / 100));
        document.getElementById('report-crew-name-2').innerHTML = crewName2Value;
        document.getElementById('report-crew-rank-2').innerHTML = checkCrewRankAbbr(crewRank2.value);
        if (crewRank2Value > 1) {
            document.getElementById('report-crew-2-amount').innerHTML = '$' + printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank2Value) * crewPercent2Value / 100));
            document.getElementById('report-crew-2-amount').classList.remove('d-none');
            document.getElementById('total-crew-2').classList.remove('d-none');
        }
        else {
            document.getElementById('report-crew-2-amount').classList.add('d-none');
            document.getElementById('total-crew-2').classList.add('d-none');
        }
        document.getElementById('report-crew-2').classList.remove('d-none');
    }
    else {
        document.getElementById('report-crew-2').classList.add('d-none');
    }
    //crew 3
    if (shipType + crewSupplement >= 3) {
        crewName3 = document.getElementById('crewmate-3-name');
        crewName3Value = crewName3.value;
        crewRank3 = document.getElementById('crewmate-3-rank');
        crewRank3Value = crewRank3.value;
        document.getElementById('total-crew-name-3').innerHTML = crewName3Value;
        document.getElementById('total-crew-rank-3').innerHTML = checkCrewRankVerbose(crewRank3Value);
        document.getElementById('total-crew-cut-3').innerHTML = Math.round(checkCrewRate(crewRank3Value) * 100);
        document.getElementById('total-crew-amount-3').innerHTML = printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank3Value) * crewPercent3Value / 100));
        document.getElementById('report-crew-name-3').innerHTML = crewName3Value;
        document.getElementById('report-crew-rank-3').innerHTML = checkCrewRankAbbr(crewRank3.value);
        if (crewRank3Value > 1) {
            document.getElementById('report-crew-3-amount').innerHTML = '$' + printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank3Value) * crewPercent3Value / 100));
            document.getElementById('report-crew-3-amount').classList.remove('d-none');
            document.getElementById('total-crew-3').classList.remove('d-none');
        }
        else {
            document.getElementById('report-crew-3-amount').classList.add('d-none');
            document.getElementById('total-crew-3').classList.add('d-none');
        }
        document.getElementById('report-crew-3').classList.remove('d-none');
    }
    else {
        document.getElementById('report-crew-3').classList.add('d-none');
    }
    //crew 4
    if (shipType + crewSupplement >= 4) {
        crewName4 = document.getElementById('crewmate-4-name');
        crewName4Value = crewName4.value;
        crewRank4 = document.getElementById('crewmate-4-rank');
        crewRank4Value = crewRank4.value;
        document.getElementById('total-crew-name-4').innerHTML = crewName4Value;
        document.getElementById('total-crew-rank-4').innerHTML = checkCrewRankVerbose(crewRank4Value);
        document.getElementById('total-crew-cut-4').innerHTML = Math.round(checkCrewRate(crewRank4Value) * 100);
        document.getElementById('total-crew-amount-4').innerHTML = printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank4Value) * crewPercent4Value / 100));
        document.getElementById('report-crew-name-4').innerHTML = crewName4Value;
        document.getElementById('report-crew-rank-4').innerHTML = checkCrewRankAbbr(crewRank4.value);
        if (crewRank4Value > 1) {
            document.getElementById('report-crew-4-amount').innerHTML = '$' + printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank4Value) * crewPercent4Value / 100));
            document.getElementById('report-crew-4-amount').classList.remove('d-none');
            document.getElementById('total-crew-4').classList.remove('d-none');
        }
        else {
            document.getElementById('report-crew-4-amount').classList.add('d-none');
            document.getElementById('total-crew-4').classList.add('d-none');
        }
        document.getElementById('report-crew-4').classList.remove('d-none');
    }
    else {
        document.getElementById('report-crew-4').classList.add('d-none');
    }
    //crew 5
    if (shipType + crewSupplement >= 5) {
        crewName5 = document.getElementById('crewmate-5-name');
        crewName5Value = crewName5.value;
        crewRank5 = document.getElementById('crewmate-5-rank');
        crewRank5Value = crewRank5.value;
        document.getElementById('total-crew-name-5').innerHTML = crewName5Value;
        document.getElementById('total-crew-rank-5').innerHTML = checkCrewRankVerbose(crewRank5Value);
        document.getElementById('total-crew-cut-5').innerHTML = Math.round(checkCrewRate(crewRank5Value) * 100);
        document.getElementById('total-crew-amount-5').innerHTML = printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank5Value) * crewPercent5Value / 100));
        document.getElementById('report-crew-name-5').innerHTML = crewName5Value;
        document.getElementById('report-crew-rank-5').innerHTML = checkCrewRankAbbr(crewRank5.value);
        if (crewRank5Value > 1) {
            document.getElementById('report-crew-5-amount').innerHTML = '$' + printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank5Value) * crewPercent5Value / 100));
            document.getElementById('report-crew-5-amount').classList.remove('d-none');
            document.getElementById('total-crew-5').classList.remove('d-none');
        }
        else {
            document.getElementById('report-crew-5-amount').classList.add('d-none');
            document.getElementById('total-crew-5').classList.add('d-none');
        }
        document.getElementById('report-crew-5').classList.remove('d-none');
    }
    else {
        document.getElementById('report-crew-5').classList.add('d-none');
    }
    //crew 6
    if (shipType + crewSupplement >= 6) {
        crewName6 = document.getElementById('crewmate-6-name');
        crewName6Value = crewName6.value;
        crewRank6 = document.getElementById('crewmate-6-rank');
        crewRank6Value = crewRank6.value;
        document.getElementById('total-crew-name-6').innerHTML = crewName6Value;
        document.getElementById('total-crew-rank-6').innerHTML = checkCrewRankVerbose(crewRank6Value);
        document.getElementById('total-crew-cut-6').innerHTML = Math.round(checkCrewRate(crewRank6Value) * 100);
        document.getElementById('total-crew-amount-6').innerHTML = printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank6Value) * crewPercent6Value / 100));
        document.getElementById('report-crew-name-6').innerHTML = crewName6Value;
        document.getElementById('report-crew-rank-6').innerHTML = checkCrewRankAbbr(crewRank6.value);
        if (crewRank6Value > 1) {
            document.getElementById('report-crew-6-amount').innerHTML = '$' + printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank6Value) * crewPercent6Value / 100));
            document.getElementById('report-crew-6-amount').classList.remove('d-none');
            document.getElementById('total-crew-6').classList.remove('d-none');
        }
        else {
            document.getElementById('report-crew-6-amount').classList.add('d-none');
            document.getElementById('total-crew-6').classList.add('d-none');
        }
        document.getElementById('report-crew-6').classList.remove('d-none');
    }
    else {
        document.getElementById('report-crew-6').classList.add('d-none');
    }
    //crew 7
    if (shipType + crewSupplement >= 7) {
        crewName7 = document.getElementById('crewmate-7-name');
        crewName7Value = crewName7.value;
        crewRank7 = document.getElementById('crewmate-7-rank');
        crewRank7Value = crewRank7.value;
        document.getElementById('total-crew-name-7').innerHTML = crewName7Value;
        document.getElementById('total-crew-rank-7').innerHTML = checkCrewRankVerbose(crewRank7Value);
        document.getElementById('total-crew-cut-7').innerHTML = Math.round(checkCrewRate(crewRank7Value) * 100);
        document.getElementById('total-crew-amount-7').innerHTML = printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank7Value) * crewPercent7Value / 100));
        document.getElementById('report-crew-name-7').innerHTML = crewName7Value;
        document.getElementById('report-crew-rank-7').innerHTML = checkCrewRankAbbr(crewRank7.value);
        if (crewRank7Value > 1) {
            document.getElementById('report-crew-7-amount').innerHTML = '$' + printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank7Value) * crewPercent7Value / 100));
            document.getElementById('report-crew-7-amount').classList.remove('d-none');
            document.getElementById('total-crew-7').classList.remove('d-none');
        }
        else {
            document.getElementById('report-crew-7-amount').classList.add('d-none');
            document.getElementById('total-crew-7').classList.add('d-none');
        }
        document.getElementById('report-crew-7').classList.remove('d-none');
    }
    else {
        document.getElementById('report-crew-7').classList.add('d-none');
    }
    //crew 8
    if (shipType + crewSupplement >= 8) {
        crewName8 = document.getElementById('crewmate-8-name');
        crewName8Value = crewName8.value;
        crewRank8 = document.getElementById('crewmate-8-rank');
        crewRank8Value = crewRank8.value;
        document.getElementById('total-crew-name-8').innerHTML = crewName8Value;
        document.getElementById('total-crew-rank-8').innerHTML = checkCrewRankVerbose(crewRank8Value);
        document.getElementById('total-crew-cut-8').innerHTML = Math.round(checkCrewRate(crewRank8Value) * 100);
        document.getElementById('total-crew-amount-8').innerHTML = printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank8Value) * crewPercent8Value / 100));
        document.getElementById('report-crew-name-8').innerHTML = crewName8Value;
        document.getElementById('report-crew-rank-8').innerHTML = checkCrewRankAbbr(crewRank8.value);
        if (crewRank8Value > 1) {
            document.getElementById('report-crew-8-amount').innerHTML = '$' + printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank8Value) * crewPercent8Value / 100));
            document.getElementById('report-crew-8-amount').classList.remove('d-none');
            document.getElementById('total-crew-8').classList.remove('d-none');
        }
        else {
            document.getElementById('report-crew-8-amount').classList.add('d-none');
            document.getElementById('total-crew-8').classList.add('d-none');
        }
        document.getElementById('report-crew-8').classList.remove('d-none');
    }
    else {
        document.getElementById('report-crew-8').classList.add('d-none');
    }
    //crew 9
    if (shipType + crewSupplement >= 9) {
        crewName9 = document.getElementById('crewmate-9-name');
        crewName9Value = crewName9.value;
        crewRank9 = document.getElementById('crewmate-9-rank');
        crewRank9Value = crewRank9.value;
        document.getElementById('total-crew-name-9').innerHTML = crewName9Value;
        document.getElementById('total-crew-rank-9').innerHTML = checkCrewRankVerbose(crewRank9Value);
        document.getElementById('total-crew-cut-9').innerHTML = Math.round(checkCrewRate(crewRank9Value) * 100);
        document.getElementById('total-crew-amount-9').innerHTML = printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank9Value) * crewPercent9Value / 100));
        document.getElementById('report-crew-name-9').innerHTML = crewName9Value;
        document.getElementById('report-crew-rank-9').innerHTML = checkCrewRankAbbr(crewRank9.value);
        if (crewRank9Value > 1) {
            document.getElementById('report-crew-9-amount').innerHTML = '$' + printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank9Value) * crewPercent9Value / 100));
            document.getElementById('report-crew-9-amount').classList.remove('d-none');
            document.getElementById('report-crew-9').classList.remove('d-none');
        }
        else {
            document.getElementById('report-crew-9-amount').classList.add('d-none');
            document.getElementById('total-crew-9').classList.add('d-none');
        }
        document.getElementById('total-crew-9').classList.remove('d-none');
    }
    else {
        document.getElementById('report-crew-9').classList.add('d-none');
    }
    //crew 10
    if (shipType + crewSupplement >= 10) {
        crewName10 = document.getElementById('crewmate-10-name');
        crewName10Value = crewName10.value;
        crewRank10 = document.getElementById('crewmate-10-rank');
        crewRank10Value = crewRank10.value;
        document.getElementById('total-crew-name-10').innerHTML = crewName10Value;
        document.getElementById('total-crew-rank-10').innerHTML = checkCrewRankVerbose(crewRank10Value);
        document.getElementById('total-crew-cut-10').innerHTML = Math.round(checkCrewRate(crewRank10Value) * 100);
        document.getElementById('total-crew-amount-10').innerHTML = printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank10Value) * crewPercent10Value / 100));
        document.getElementById('report-crew-name-10').innerHTML = crewName10Value;
        document.getElementById('report-crew-rank-10').innerHTML = checkCrewRankAbbr(crewRank10.value);
        if (crewRank10Value > 1) {
            document.getElementById('report-crew-10-amount').innerHTML = '$' + printNumber(Math.round(totalFactionVault * checkCrewRate(crewRank10Value) * crewPercent10Value / 100));
            document.getElementById('report-crew-10-amount').classList.remove('d-none');
            document.getElementById('total-crew-10').classList.remove('d-none');
        }
        else {
            document.getElementById('report-crew-10-amount').classList.add('d-none');
            document.getElementById('total-crew-10').classList.add('d-none');
        }
        document.getElementById('report-crew-10').classList.remove('d-none');
    }
    else {
        document.getElementById('report-crew-10').classList.add('d-none');
    }
    // print total plunder for stowayas
    document.getElementById('info-stowaway-total').innerHTML = '$' + printNumber(totalPlunder);
};

function checkCrew() {
    // Gather crew names and ranks
    //crew 1
    if (shipType + crewSupplement >= 1) {
        crewName1 = document.getElementById('crewmate-1-name');
        crewName1Value = crewName1.value;
        crewRank1 = document.getElementById('crewmate-1-rank');
        crewRank1Value = parseInt(crewRank1.value);
    }
    //crew 2
    if (shipType + crewSupplement >= 2) {
        crewName2 = document.getElementById('crewmate-2-name');
        crewName2Value = crewName2.value;
        crewRank2 = document.getElementById('crewmate-2-rank');
        crewRank2Value = parseInt(crewRank2);
    }
    //crew 3
    if (shipType + crewSupplement >= 3) {
        crewName3 = document.getElementById('crewmate-3-name');
        crewName3Value = crewName3.value;
        crewRank3 = document.getElementById('crewmate-3-rank');
        crewRank3Value = parseInt(crewRank3);
    }
    //crew 4
    if (shipType + crewSupplement >= 4) {
        crewName4 = document.getElementById('crewmate-4-name');
        crewName4Value = crewName4.value;
        crewRank4 = document.getElementById('crewmate-4-rank');
        crewRank4Value = parseInt(crewRank4);
    }
    //crew 5
    if (shipType + crewSupplement >= 5) {
        crewName5 = document.getElementById('crewmate-5-name');
        crewName5Value = crewName5.value;
        crewRank5 = document.getElementById('crewmate-5-rank');
        crewRank5Value = parseInt(crewRank5);
    }
    //crew 6
    if (shipType + crewSupplement >= 6) {
        crewName6 = document.getElementById('crewmate-6-name');
        crewName6Value = crewName6.value;
        crewRank6 = document.getElementById('crewmate-6-rank');
        crewRank6Value = parseInt(crewRank6);
    }
    //crew 7
    if (shipType + crewSupplement >= 7) {
        crewName7 = document.getElementById('crewmate-7-name');
        crewName7Value = crewName7.value;
        crewRank7 = document.getElementById('crewmate-7-rank');
        crewRank7Value = parseInt(crewRank7);
    }
    //crew 8
    if (shipType + crewSupplement >= 8) {
        crewName8 = document.getElementById('crewmate-8-name');
        crewName8Value = crewName8.value;
        crewRank8 = document.getElementById('crewmate-8-rank');
        crewRank8Value = parseInt(crewRank8);
    }
    //crew 9
    if (shipType + crewSupplement >= 9) {
        crewName9 = document.getElementById('crewmate-9-name');
        crewName9Value = crewName9.value;
        crewRank9 = document.getElementById('crewmate-9-rank');
        crewRank9Value = parseInt(crewRank9);
    }
    //crew 10
    if (shipType + crewSupplement >= 10) {
        crewName10 = document.getElementById('crewmate-10-name');
        crewName10Value = crewName10.value;
        crewRank10 = document.getElementById('crewmate-10-rank');
        crewRank10Value = parseInt(crewRank10);
    }
};

// Error check
function checkReportErrors() {
    // reset
    errorCount = 0;
    warningCount = 0;
    // Check voyage number
    voyageNumber = document.getElementById('voyage-number');
    voyageNumberValue = voyageNumber.value;
    if (voyageNumberValue == '') { 
        document.getElementById('error-voyage-number').classList.remove('d-none');
        errorCount++;
    }
    else { 
        document.getElementById('error-voyage-number').classList.add('d-none');
    }
    // Check faction
    if (faction == '') { 
        document.getElementById('error-faction').classList.remove('d-none');
        errorCount++;
    }
    else { 
        document.getElementById('error-faction').classList.add('d-none');
    }
    // Check ship name
    shipName = document.getElementById('ship-name');
    shipNameValue = shipName.value;
    if (shipNameValue == '') { 
        document.getElementById('error-ship-name').classList.remove('d-none');
        errorCount++;
    }
    else { 
        document.getElementById('error-ship-name').classList.add('d-none');
    }
    // Check ship type
    if (shipType == '0') { 
        document.getElementById('error-ship-type').classList.remove('d-none');
        errorCount++;
    }
    else { 
        document.getElementById('error-ship-type').classList.add('d-none');
    }
    // Check job type
    if (jobRate == '0') { 
        document.getElementById('error-job-type').classList.remove('d-none');
        errorCount++;
    }
    else { 
        document.getElementById('error-job-type').classList.add('d-none');
        // Check crew ranks vs job types
        if ((jobType == 'Errand' && crewRank1Value < 5) || (jobType == 'Heist' && crewRank1Value < 8)) {
            document.getElementById('error-rank').classList.remove('d-none');
            errorCount++;
        }
        else {
            document.getElementById('error-rank').classList.add('d-none');
        }
        // Heist eligible, but not declared
        if ((shipType >= 3 && jobType == 'Errand' && crewRank1Value > 6)) {
            document.getElementById('warning-crew-rank').classList.remove('d-none');
            warningCount++;
        }
        else {
            document.getElementById('warning-crew-rank').classList.add('d-none');
        }
    }
    // Crew names are empty
    if ((shipType + crewSupplement >= 1 && crewName1Value == '')
        || (shipType + crewSupplement >= 2 && crewName2Value == '')
        || (shipType + crewSupplement >= 3 && crewName3Value == '')
        || (shipType + crewSupplement >= 4 && crewName4Value == '')
        || (shipType + crewSupplement >= 5 && crewName5Value == '')
        || (shipType + crewSupplement >= 6 && crewName6Value == '')
        || (shipType + crewSupplement >= 7 && crewName7Value == '')
        || (shipType + crewSupplement >= 8 && crewName8Value == '')
        || (shipType + crewSupplement >= 9 && crewName9Value == '')
        || (shipType + crewSupplement >= 10 && crewName10Value == '')) {
        document.getElementById('warning-crew-name').classList.remove('d-none');
        warningCount++;
    }
    else {
        document.getElementById('warning-crew-name').classList.add('d-none');
    }
    // activity log is empty
    checkActivityLog();
    // activity log empty
    if (activityRows == 0) {
        warningCount++;
        document.getElementById('warning-activity-missing').classList.remove('d-none');
    }
    else {
        document.getElementById('warning-activity-missing').classList.add('d-none');
    }
    // check activities for empties
    if ((activityRows >= 1 && activity1Value == '')
        || (activityRows >= 2 && activity2Value == '') 
        || (activityRows >= 3 && activity3Value == '') 
        || (activityRows >= 4 && activity4Value == '') 
        || (activityRows >= 5 && activity5Value == '') 
        || (activityRows >= 6 && activity6Value == '') 
        || (activityRows >= 7 && activity7Value == '') 
        || (activityRows >= 8 && activity8Value == '') 
        || (activityRows >= 9 && activity9Value == '') 
        || (activityRows >= 10 && activity10Value == '')
        || (activityRows >= 11 && activity11Value == '') 
        || (activityRows >= 12 && activity12Value == '') 
        || (activityRows >= 13 && activity13Value == '') 
        || (activityRows >= 14 && activity14Value == '') 
        || (activityRows >= 15 && activity15Value == '') 
        || (activityRows >= 16 && activity16Value == '') 
        || (activityRows >= 17 && activity17Value == '') 
        || (activityRows >= 18 && activity18Value == '') 
        || (activityRows >= 19 && activity19Value == '') 
        || (activityRows >= 20 && activity20Value == '')
        || (activityRows >= 21 && activity21Value == '') 
        || (activityRows >= 22 && activity22Value == '') 
        || (activityRows >= 23 && activity23Value == '') 
        || (activityRows >= 24 && activity24Value == '') 
        || (activityRows >= 25 && activity25Value == '')) {
        warningCount++;
        document.getElementById('warning-activity-empty').classList.remove('d-none');
    }
    else {
        document.getElementById('warning-activity-empty').classList.add('d-none');
    }
    // check activity numbers for negatives
    if ((activityRows >= 1 && activity1QtyValue < 1)
        || (activityRows >= 2 && activity2QtyValue < 1) 
        || (activityRows >= 3 && activity3QtyValue < 1) 
        || (activityRows >= 4 && activity4QtyValue < 1) 
        || (activityRows >= 5 && activity5QtyValue < 1) 
        || (activityRows >= 6 && activity6QtyValue < 1) 
        || (activityRows >= 7 && activity7QtyValue < 1) 
        || (activityRows >= 8 && activity8QtyValue < 1) 
        || (activityRows >= 9 && activity9QtyValue < 1) 
        || (activityRows >= 10 && activity10QtyValue < 1)
        || (activityRows >= 11 && activity11QtyValue < 1)
        || (activityRows >= 12 && activity12QtyValue < 1) 
        || (activityRows >= 13 && activity13QtyValue < 1) 
        || (activityRows >= 14 && activity14QtyValue < 1) 
        || (activityRows >= 15 && activity15QtyValue < 1) 
        || (activityRows >= 16 && activity16QtyValue < 1) 
        || (activityRows >= 17 && activity17QtyValue < 1) 
        || (activityRows >= 18 && activity18QtyValue < 1) 
        || (activityRows >= 19 && activity19QtyValue < 1) 
        || (activityRows >= 20 && activity20QtyValue < 1)
        || (activityRows >= 21 && activity21QtyValue < 1)
        || (activityRows >= 22 && activity22QtyValue < 1) 
        || (activityRows >= 23 && activity23QtyValue < 1) 
        || (activityRows >= 24 && activity24QtyValue < 1) 
        || (activityRows >= 25 && activity25QtyValue < 1)) {
        errorCount++;
        document.getElementById('error-activity-negative').classList.remove('d-none');
    }
    // Check gold
    goldStart = document.getElementById('gold-start');
    goldStartValue = goldStart.value;
    goldEnd = document.getElementById('gold-end');
    goldEndValue = goldEnd.value;
    // gold missing
    if (goldStartValue === '' || goldEndValue === '') { 
        document.getElementById('error-gold-missing').classList.remove('d-none');
        errorCount++;
    }
    else { 
        document.getElementById('error-gold-missing').classList.add('d-none');
        totalGold = goldEndValue - goldStartValue;
    }
    // gold negative
    if (totalGold < 0) { 
        document.getElementById('error-gold-negative').classList.remove('d-none');
        errorCount++;
    }
    else { 
        document.getElementById('error-gold-negative').classList.add('d-none');
    }
    // Check doubloons
    doubloonStart = document.getElementById('doubloon-start');
    doubloonStartValue = doubloonStart.value;
    doubloonEnd = document.getElementById('doubloon-end');
    doubloonEndValue = doubloonEnd.value;
    // doubloon missing
    if (doubloonStartValue === '' || doubloonEndValue === '') { 
        document.getElementById('error-doubloon-missing').classList.remove('d-none');
        errorCount++;
    }
    else { 
        document.getElementById('error-doubloon-missing').classList.add('d-none');
        totalDoubloonCount = (doubloonEndValue - doubloonStartValue);
    }
    // doubloon negative
    if (totalDoubloonCount < 0) { 
        document.getElementById('error-doubloon-negative').classList.remove('d-none');
        errorCount++;
    }
    else { 
        totalDoubloonGold = totalDoubloonCount * 25;
        document.getElementById('error-doubloon-negative').classList.add('d-none');
    }
    // Check for participation totals
    checkCrewCut();
    if (crewSupplement > 0) {
        // all crew participate between 1-100%
        if ((shipType + crewSupplement >= 1 && crewPercent1Value < 1) 
            || (shipType + crewSupplement >= 2 && crewPercent2Value < 1) 
            || (shipType + crewSupplement >= 3 && crewPercent3Value < 1) 
            || (shipType + crewSupplement >= 4 && crewPercent4Value < 1) 
            || (shipType + crewSupplement >= 5 && crewPercent5Value < 1) 
            || (shipType + crewSupplement >= 6 && crewPercent6Value < 1) 
            || (shipType + crewSupplement >= 7 && crewPercent7Value < 1) 
            || (shipType + crewSupplement >= 8 && crewPercent8Value < 1) 
            || (shipType + crewSupplement >= 9 && crewPercent9Value < 1) 
            || (shipType + crewSupplement >= 10 && crewPercent10Value < 1) 
            || (shipType + crewSupplement >= 1 && crewPercent1Value > 100) 
            || (shipType + crewSupplement >= 2 && crewPercent2Value > 100) 
            || (shipType + crewSupplement >= 3 && crewPercent3Value > 100) 
            || (shipType + crewSupplement >= 4 && crewPercent4Value > 100) 
            || (shipType + crewSupplement >= 5 && crewPercent5Value > 100) 
            || (shipType + crewSupplement >= 6 && crewPercent6Value > 100) 
            || (shipType + crewSupplement >= 7 && crewPercent7Value > 100) 
            || (shipType + crewSupplement >= 8 && crewPercent8Value > 100) 
            || (shipType + crewSupplement >= 9 && crewPercent9Value > 100) 
            || (shipType + crewSupplement >= 10 && crewPercent10Value > 100)) {
            document.getElementById('error-participation-percentage').classList.remove('d-none');
            errorCount++;
        }
        else {
            document.getElementById('error-participation-percentage').classList.add('d-none');
        }
        // percentage sum matches ship capacity
        crewParticipation = +crewPercent1Value + +crewPercent2Value + +crewPercent3Value + +crewPercent4Value + +crewPercent5Value + +crewPercent6Value + +crewPercent7Value + +crewPercent8Value + +crewPercent9Value + +crewPercent10Value;
        if (crewParticipation != shipType * 100) {
            document.getElementById('crew-participation').innerHTML = crewParticipation;
            document.getElementById('crew-participation-total').innerHTML = shipType * 100;
            document.getElementById('error-participation').classList.remove('d-none');
            errorCount++;
        }
        else {
            document.getElementById('error-participation').classList.add('d-none');
        }
    }
    // Individual bonus checks
    checkBonusReset();
    checkBonusStraightShip();
    checkBonusFullHouse();
    checkBonusRoyalFlush();
    checkBonusUnitedDeck();
    checkBonusLogic();
    checkBonusDice();
    checkBonusPaiGow();
    checkBonusBlackjack();
    checkBonusCrapsTable();
    checkBonusTotal();
    // Check for stowaway presence and explain missing payout and report obligations
    if (crewStowawayPresent == true) {
        document.getElementById('info-stowaway').classList.remove('d-none');
    }
    else {
        document.getElementById('info-stowaway').classList.add('d-none');
    }
    // Check summary
    voyageSummary = document.getElementById('voyage-summary');
    voyageSummaryValue = voyageSummary.value;
    if (voyageSummaryValue == '') { 
        document.getElementById('error-summary').classList.remove('d-none');
        errorCount++;
    }
    else { 
        document.getElementById('error-summary').classList.add('d-none');
    }
    // Show errors or success
    if (errorCount > 0) {
        document.getElementById('report-error-count').innerHTML = errorCount;
        document.getElementById('errors-true').classList.remove('d-none');
        document.getElementById('errors-warning').classList.add('d-none');
        document.getElementById('errors-false').classList.add('d-none');
        document.getElementById('report-container').classList.add('d-none');
        document.getElementById('generate-report').classList.remove('btn-muted');
        document.getElementById('generate-report').classList.add('btn-selected');
    }
    else if (warningCount > 0) {
        document.getElementById('report-warning-count').innerHTML = warningCount;
        document.getElementById('errors-true').classList.add('d-none');
        document.getElementById('errors-warning').classList.remove('d-none');
        document.getElementById('errors-false').classList.add('d-none');
        document.getElementById('report-container').classList.remove('d-none');
        document.getElementById('generate-report').classList.remove('btn-selected');
        document.getElementById('generate-report').classList.add('btn-muted');    
    }
    else {
        document.getElementById('errors-true').classList.add('d-none');
        document.getElementById('errors-warning').classList.add('d-none');
        document.getElementById('errors-false').classList.remove('d-none');
        document.getElementById('report-container').classList.remove('d-none');
        document.getElementById('generate-report').classList.remove('btn-selected');
        document.getElementById('generate-report').classList.add('btn-muted');
    }
    // Create totals
    totalPlunder = totalGold + totalDoubloonGold;
    totalJobPay = Math.round(totalPlunder * jobRate);
    totalFactionVault = totalJobPay + totalBonus;
    checkCrewPayout();
};

// Generate Report
function printNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function generateReport() {
    // gather crew data
    checkCrew();
    checkCrewRanks();
    // check for errors
    checkReportErrors();
    // Scroll to success or failure
    document.getElementById('section-report').scrollIntoView();
    // Populate Text
    document.getElementById('report-faction-name').innerHTML = factionFleet;
    document.getElementById('report-voyage-number').innerHTML = voyageNumberValue;
    document.getElementById('report-ship-type').innerHTML = shipTypeEmoji;
    document.getElementById('report-ship-name').innerHTML = shipNameValue;
    document.getElementById('report-job-type').innerHTML = jobType;
    document.getElementById('report-job-rate').innerHTML = jobRate * 100;
    document.getElementById('report-voyage-summary').innerHTML = voyageSummaryValue;
    // Populate Gold
    document.getElementById('starting-gold-value').innerHTML = printNumber(goldStartValue);
    document.getElementById('ending-gold-value').innerHTML = printNumber(goldEndValue);
    document.getElementById('total-gold-value').innerHTML = printNumber(totalGold);
    document.getElementById('report-total-gold-value').innerHTML = printNumber(totalGold);
    // Populate Doubloons
    document.getElementById('starting-doubloon-value').innerHTML = printNumber(doubloonStartValue);
    document.getElementById('ending-doubloon-value').innerHTML = printNumber(doubloonEndValue);
    document.getElementById('total-doubloon-count').innerHTML = printNumber(totalDoubloonCount);
    document.getElementById('total-doubloon-gold').innerHTML = printNumber(totalDoubloonGold);
    document.getElementById('report-doubloon-count').innerHTML = printNumber(totalDoubloonCount);
    document.getElementById('report-doubloon-gold').innerHTML = printNumber(totalDoubloonGold);
    // Populate Totals
    document.getElementById('total-plunder').innerHTML = printNumber(totalPlunder);
    document.getElementById('report-plunder').innerHTML = printNumber(totalPlunder);
    document.getElementById('total-job-type').innerHTML = jobType;
    document.getElementById('total-job-rate').innerHTML = jobRate * 100;
    document.getElementById('total-job-pay').innerHTML = printNumber(totalJobPay);
    // Populate Faction Vault Cut
    document.getElementById('faction-icon').innerHTML = factionIcon;
    document.getElementById('total-faction').innerHTML = factionVault;
    document.getElementById('total-faction-vault').innerHTML = printNumber(totalFactionVault);
    document.getElementById('report-faction-icon').innerHTML = factionIconReport;
    document.getElementById('report-faction-vault').innerHTML = factionVaultAccount;
    document.getElementById('report-faction-vault-amount').innerHTML = printNumber(totalFactionVault);
};
