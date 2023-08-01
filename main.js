//GLOBAL VARIABLES
let newGame = true; //Later, when saves are incorporated, will need to develop this further. For now every refresh is a new game.
let totalUpgrades = 0;

//INITIALIZE VARIABLES
const countAtNewGame = () => {
    if (newGame = true) {
        return count = 0;
    } else 
    {
        return count = null;
    }
}

countAtNewGame();

//OBJECTS//

//Score counter
/*const scoreCounter = {
    scoreCount: count,
    returnCount: function () {
        return this.scoreCount;
    }
}*/

//Clickable play area object
const clickablePlayArea = {
    name: "Click Me!",
    score: 0,
    clickPower: 1,
    initialize: function() {
        return this.name + "<br><br>" + "Score: " + this.score + "<br><br>" + "Click Power: " + this.clickPower;
    },
    update: function() {
        return this.name + "<br><br>" + "Score: " + this.score.toFixed(2) + "<br><br>" + "Click Power: " + this.clickPower.toFixed(2); 
    }
}

//Building objects
const buildingOne = {
    name: "Building One",
    owned: 0,
    cost: 10,
    automaticPower: 0,
    initialize: function() {
        return this.name + "<br><br>" + "Owned: "+ this.owned + "<br>" + "Cost: " + this.cost + "<br>" + "Automatic power: " + this.automaticPower;
    },
    checkCost: function() {
        if (clickablePlayArea.score >= this.cost) {
            return true;
        }
    },
    update: function() {
        return this.name + "<br><br>" + "Owned: "+ this.owned + "<br>" + "Cost: " + this.cost + "<br>" + "Automatic power: " + this.automaticPower;
    }
}

const buildingTwo = {
    name: "Building Two",
    owned: 0,
    cost: 20,
    automaticPower: 0,
    initialize: function() {
        return this.name + "<br><br>" + "Owned: "+ this.owned + "<br>" + "Cost: " + this.cost + "<br>" + "Automatic power: " + this.automaticPower;
    },
    checkCost: function() {
        if (clickablePlayArea.score >= this.cost) {
            return true;
        }
    },
    update: function() {
        return this.name + "<br><br>" + "Owned: "+ this.owned + "<br>" + "Cost: " + this.cost + "<br>" + "Automatic power: " + this.automaticPower;
    }
}

const buildingThree = {
    name: "Building Three",
    owned: 0,
    cost: 40,
    automaticPower: 0,
    initialize: function() {
        return this.name + "<br><br>" + "Owned: "+ this.owned + "<br>" + "Cost: " + this.cost + "<br>" + "Automatic power: " + this.automaticPower;
    },
    checkCost: function() {
        if (clickablePlayArea.score >= this.cost) {
            return true;
        }
    },
    update: function() {
        return this.name + "<br><br>" + "Owned: "+ this.owned + "<br>" + "Cost: " + this.cost + "<br>" + "Automatic power: " + this.automaticPower;
    }
}

const buildingFour = {
    name: "Building Four",
    owned: 0,
    cost: 80,
    automaticPower: 0,
    initialize: function() {
        return this.name + "<br><br>" + "Owned: "+ this.owned + "<br>" + "Cost: " + this.cost + "<br>" + "Automatic power: " + this.automaticPower;
    },
    checkCost: function() {
        if (clickablePlayArea.score >= this.cost) {
            return true;
        }
    },
    update: function() {
        return this.name + "<br><br>" + "Owned: "+ this.owned + "<br>" + "Cost: " + this.cost + "<br>" + "Automatic power: " + this.automaticPower;
    }
}


const buildingFive = {
    name: "Building Five",
    owned: 0,
    cost: 160,
    automaticPower: 0,
    initialize: function() {
        return this.name + "<br><br>" + "Owned: "+ this.owned + "<br>" + "Cost: " + this.cost + "<br>" + "Automatic power: " + this.automaticPower;
    },
    checkCost: function() {
        if (clickablePlayArea.score >= this.cost) {
            return true;
        }
    },
    update: function() {
        return this.name + "<br><br>" + "Owned: "+ this.owned + "<br>" + "Cost: " + this.cost + "<br>" + "Automatic power: " + this.automaticPower;
    }
}

const buildingSix = {
    name: "Building Six",
    owned: 0,
    cost: 320,
    automaticPower: 0,
    initialize: function() {
        return this.name + "<br><br>" + "Owned: "+ this.owned + "<br>" + "Cost: " + this.cost + "<br>" + "Automatic power: " + this.automaticPower;
    },
    checkCost: function() {
        if (clickablePlayArea.score >= this.cost) {
            return true;
        }
    },
    update: function() {
        return this.name + "<br><br>" + "Owned: "+ this.owned + "<br>" + "Cost: " + this.cost + "<br>" + "Automatic power: " + this.automaticPower;
    }
}

//END OBJECTS

// INITIALIZE BUTTONS

//Clickable play area button
const clickablePlayAreaButton = document.getElementById("play-area-button");
clickablePlayAreaButton.innerHTML = clickablePlayArea.initialize();

//Buildings
const buildingOneButton = document.getElementById("building-one-button");
buildingOneButton.innerHTML = buildingOne.initialize();

const buildingTwoButton = document.getElementById("building-two-button");
buildingTwoButton.innerHTML = buildingTwo.initialize();

const buildingThreeButton = document.getElementById("building-three-button");
buildingThreeButton.innerHTML = buildingThree.initialize();

const buildingFourButton = document.getElementById("building-four-button");
buildingFourButton.innerHTML = buildingFour.initialize();

const buildingFiveButton = document.getElementById("building-five-button");
buildingFiveButton.innerHTML = buildingFive.initialize();

const buildingSixButton = document.getElementById("building-six-button");
buildingSixButton.innerHTML = buildingSix.initialize();

//END INITIALIZE BUTTONS

//LOGIC

//Update the clickable play area
const updateClickablePlayArea = () => {
    clickablePlayAreaButton.innerHTML = clickablePlayArea.update();
}

//Handle the increment of the play area button when actively clicked.
const handleIncrement = () => {
    clickablePlayArea.score += clickablePlayArea.clickPower;
    updateClickablePlayArea();
}

//Subtract the cost of upgrades from the total score
const transactScoreCounter = (object) => {
    clickablePlayArea.score -= object.cost;
    updateClickablePlayArea();
} 

//Handle buying building upgrades and updating the innerHTML
const buyBuilding = (buildingNum, buildingNumButton) => {
    if (buildingNum.checkCost()) {
        transactScoreCounter(buildingNum);
        updateClickablePlayArea();
        buildingNum.cost = (buildingNum.cost**1.25).toFixed(2);
        buildingNum.owned+=1;
        buildingNum.automaticPower = (buildingNum.owned**1.1).toFixed(2);
        buildingNumButton.innerHTML = buildingNum.update();
        totalUpgrades++;
        checkForAutomaticIncrement();
        clickablePlayArea.clickPower = 1 + totalUpgrades**.05;
        updateClickablePlayArea();
        
    }
}

//Function called in buyBuilding() that checks if there is exactly one upgrade and, if so, initiates automatic incrementing
const checkForAutomaticIncrement = () => {
    if (totalUpgrades === 1) {
        setInterval(automaticallyIncrement, 1000); 
    } else {
        return null;
    }
}

//Start an automatic interval once a building is purchased to continually increase the score
const automaticallyIncrement = () => {
    clickablePlayArea.score += (buildingOne.owned*1 + buildingTwo.owned*2 + buildingThree.owned*3 + buildingFour.owned*4 + buildingFive.owned*5 + buildingSix.owned*6); 
    updateClickablePlayArea();
}
//END LOGIC

//EVENT LISTENERS

clickablePlayAreaButton.addEventListener("click", handleIncrement);

//These have to be called like this or they will automatically execute before the click is performed.
//It has to do with returning the value of the function when the event listener is encountered.
//So rather than just calling "buyBuilding(param1, param2)", you have to actually call it explictly as a function like so:
buildingOneButton.addEventListener("click", function() { buyBuilding(buildingOne, buildingOneButton)});
buildingTwoButton.addEventListener("click", function() { buyBuilding(buildingTwo, buildingTwoButton)});
buildingThreeButton.addEventListener("click", function() { buyBuilding(buildingThree, buildingThreeButton)});
buildingFourButton.addEventListener("click", function() { buyBuilding(buildingFour, buildingFourButton)});
buildingFiveButton.addEventListener("click", function() { buyBuilding(buildingFive, buildingFiveButton)});
buildingSixButton.addEventListener("click", function() { buyBuilding(buildingSix, buildingSixButton)});
//END EVENT LISTENERS