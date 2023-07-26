const totalCount = document.getElementById("score-display");
let count = 0;
totalCount.innerHTML = "Score: " + count.toFixed(2);

//const resetScoreButton = document.getElementById("reset-score-button");
//resetScoreButton.innerHTML = "Reset score";

const buyUpgradeButton = document.getElementById("buy-upgrade-button");
let totalUpgrades = 0;
let upgradePrice = 15;
buyUpgradeButton.innerHTML = "Buy upgrade: " + totalUpgrades + "\n||\n" + upgradePrice;

const incrementCount = document.getElementById("increment-button");

const handleIncrement = () => {
    if (totalUpgrades === 0) {
        count++;
    } 
    else {
    count = (count + 1 + (1.25**totalUpgrades)); }
    totalCount.innerHTML = "Score: " + count.toFixed(2);
}

/*const resetScore = () => {
    totalUpgrades = 0;
    upgradePrice = 15;
    count = 0;
    buyUpgradeButton.innerHTML = "Buy upgrade: " + totalUpgrades + "\n||\n" + upgradePrice;
    totalCount.innerHTML = "Score: " + count.toFixed(2);
    endAutomaticIncrement();
}*/


const incrementUpgradePrice = () => {
    totalCount.innerHTML = "Score: " + count.toFixed(2);
    upgradePrice = (15 + (2**totalUpgrades));
    buyUpgradeButton.innerHTML = "Buy upgrade: " + totalUpgrades + "\n||\n" + upgradePrice;
}

const reduceCountByUpgradeCost = () => {
    if (count - upgradePrice < 0) {
        count = 0;
    } else {
        count = (count - upgradePrice);
    }
    totalCount.innerHTML = "Score: " + count.toFixed(2);
}

const buyUpgrade = () => {
    if (count >= upgradePrice) {
        totalUpgrades++;
        incrementUpgradePrice();
        reduceCountByUpgradeCost();
        initiateAutomaticIncrement();        
    }
}


const automaticallyIncrement = () => {
    count = (count + 1 + (1.25**totalUpgrades)); 
    totalCount.innerHTML = "Score: " + count.toFixed(2);
}


const initiateAutomaticIncrement = () => {
    setInterval(automaticallyIncrement, 1000); 
}


const endAutomaticIncrement = () => {
    clearInterval(automaticallyIncrement);
}


incrementCount.addEventListener("click", handleIncrement);
//resetScoreButton.addEventListener("click", resetScore);
buyUpgradeButton.addEventListener("click", buyUpgrade);