//GLOBAL VARIABLES
let newGame = true; //Later, when saves are incorporated, will need to develop this further. For now every refresh is a new game.
let totalUpgrades = 0;


//CLASS OBJECTS//

const Building = class {
    constructor (name, cost, owned, automaticPower) {
        this.name = name;
        this.cost = cost;
        this.owned = owned; 
        this.automaticPower = automaticPower;
    }
    displayStats() {
        return this.name + "<br><br>" + "Owned: "+ this.owned + "<br>" + "Cost: " + this.cost.toFixed(2) + "<br>" + "Automatic power: " + this.automaticPower.toFixed(2);
    }
    checkCost() {
        if (clickablePlayArea.score >= this.cost) {
            return true;
        }    
    }
  
    
}

const ClickablePlayArea = class {
    constructor (name, score, clickPower) {
        this.name = name;
        this.score = score;
        this.clickPower = clickPower;
    
    }
    displayStats() {
        return this.name + "<br><br>" + "Score: " + this.score.toFixed(2) + "<br><br>" + "Click Power: " + 
        this.clickPower.toFixed(2) + "<br><br>" + "Total Auto Power: " 
        + (buildingOne.automaticPower +
           buildingTwo.automaticPower +
           buildingThree.automaticPower + 
           buildingFour.automaticPower +
           buildingFive.automaticPower +
           buildingSix.automaticPower).toFixed(2);
        
    }
}

//Instantiate class objects//

//Buildings
const buildingOne = new Building('Building One', 10, 0, 0);
const buildingTwo = new Building('Building Two', 20, 0, 0);
const buildingThree = new Building('Building Three', 40, 0, 0);
const buildingFour = new Building('Building Four', 80, 0, 0);
const buildingFive = new Building('Building Five', 160, 0, 0);
const buildingSix = new Building('Building Six', 320, 0, 0);

//Play area
const clickablePlayArea = new ClickablePlayArea('Click me!', 0, 1);



//END CLASS OBJECTS

// INITIALIZE BUTTONS

//Clickable play area button
const clickablePlayAreaButton = document.getElementById("play-area-button");
clickablePlayAreaButton.innerHTML = clickablePlayArea.displayStats();

//Buildings
const buildingOneButton = document.getElementById("building-one-button");
buildingOneButton.innerHTML = buildingOne.displayStats();

const buildingTwoButton = document.getElementById("building-two-button");
buildingTwoButton.innerHTML = buildingTwo.displayStats();

const buildingThreeButton = document.getElementById("building-three-button");
buildingThreeButton.innerHTML = buildingThree.displayStats();

const buildingFourButton = document.getElementById("building-four-button");
buildingFourButton.innerHTML = buildingFour.displayStats();

const buildingFiveButton = document.getElementById("building-five-button");
buildingFiveButton.innerHTML = buildingFive.displayStats();

const buildingSixButton = document.getElementById("building-six-button");
buildingSixButton.innerHTML = buildingSix.displayStats();

//END INITIALIZE BUTTONS

//LOGIC

//Update the clickable play area
const updateClickablePlayArea = () => {
    clickablePlayAreaButton.innerHTML = clickablePlayArea.displayStats();
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
        buildingNum.cost = (buildingNum.cost**1.25)
        buildingNum.owned+=1;
        buildingNum.automaticPower = (buildingNum.owned**1.1);
        buildingNumButton.innerHTML = buildingNum.displayStats();
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
   clickablePlayArea.score += (buildingOne.automaticPower + buildingTwo.automaticPower + buildingThree.automaticPower + buildingFour.automaticPower + buildingFive.automaticPower + buildingSix.automaticPower); 
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