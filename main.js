//VARIABLES

//Global variables
let count = 0;
let totalUpgrades = 0;
let upgradePrice = 10;
const incrementCount = document.getElementById("increment-button");
let clickStrength = (1 + (.25*totalUpgrades));
let automaticStrength = (clickStrength**0.25);
let isAutomaticallyUpgrading = false;

//END VARIABLES

//INITIALIZE

//Display initial score on "click me!" button
const totalCount = document.getElementById("increment-button");
totalCount.innerHTML = "Click me!" + "<br><br>" + "Score: " + count.toFixed(2) + "<br><br>" + "Click power: " + "<br>" + clickStrength.toFixed(2);

//Display initial upgrade count and total for Cost ugrade
const buyUpgradeButton = document.getElementById("buy-upgrade-button");
buyUpgradeButton.innerHTML = "Upgrades" + "<br><br>" + "Owned: " + totalUpgrades + "<br><br>" + "Cost: " + upgradePrice;

//END INITIALIZE


//LOGIC

//Handle updating the increment from a manual click on the "click me!" button
const handleIncrement = () => {
    count = (count + clickStrength);
    totalCount.innerHTML = "Click me!" + "<br><br>" + "Score: " + count.toFixed(2) + "<br><br>" + "Click power: " + "<br>" + clickStrength.toFixed(2);
}

//Handle updating the upgrade button
const incrementUpgradePrice = () => {
    upgradePrice = (10 + (2**totalUpgrades));
    buyUpgradeButton.innerHTML = "Upgrades" + "<br><br>" + "Owned: " + totalUpgrades + "<br><br>" + "Cost: " + upgradePrice + "<br><br>" + "Automatic power: " + "<br>" + automaticStrength.toFixed(2);
}

//Transact from the total score in order to buy upgrades
const reduceCountByUpgradeCost = () => {
    count = (count - upgradePrice);
    totalCount.innerHTML = "Click me!" + "<br><br>" + "Score: " + count.toFixed(2) + "<br><br>" + "Click power: " + "<br>" + clickStrength.toFixed(2);
}
//Check to make sure the player can afford to upgrade. Update totalUpgrades, clickStrength, and automaticStrength variables. Call score related functions. 
const buyUpgrade = () => {
    if (count >= upgradePrice) {
        totalUpgrades++;
        clickStrength = (1 + (1.25**totalUpgrades));
        automaticStrength = (clickStrength**0.25);
        //Call reduceCountByUpgradeCost and incrementUpgradePrice in this order or else the score will reduce by the NEXT upgrade cost and not the current one
        reduceCountByUpgradeCost();
        incrementUpgradePrice();
    }
        
    //Check to see if automatically incrementing. If not, enable it.
    if (isAutomaticallyUpgrading === false) {
        initiateAutomaticIncrement();
        isAutomaticallyUpgrading = true;
    }
}

//Update score counter based on automatic interval
const automaticallyIncrement = () => {
    count = (count + (clickStrength**0.25)); 
    totalCount.innerHTML = "Click me!" + "<br><br>" + "Score: " + count.toFixed(2) + "<br><br>" + "Click power: " + "<br>" + clickStrength.toFixed(2);
}

//Set automatic interval for updating score
const initiateAutomaticIncrement = () => {
    setInterval(automaticallyIncrement, 1000); 
}


//END LOGIC

//EVENT HANDLERS

incrementCount.addEventListener("click", handleIncrement);
buyUpgradeButton.addEventListener("click", buyUpgrade);

//END EVENT HANDLERS