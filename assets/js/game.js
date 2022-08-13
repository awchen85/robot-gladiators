var playerName = window.prompt("What is your robot's name?");
var playerHealth= 100;
var playerAttack= 10;
var playerMoney= 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = Math.floor(Math.random() * 60);
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
    //Ask if player wants to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave the fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money for skipping
            playerMoney = Math.max(0, playerMoney - 10);
            console.log("playerMoney", playerMoney);
            break;
        }
    }
    
    //Generate random damage value based on player's attack power
    var damage = randomNumber(playerAttack - 3, playerAttack);

    enemyHealth = Math.max(0, enemyHealth - damage);
    //Log a resulting message to the console so we know it worked
    console.log( playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );
    //check enemy health. stop attacking if dead
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died.");
    //award player with money for winning
    playerMoney = playerMoney + 20;
    //leave while() loop since enemy is dead
    break;
    } 

    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

//Remove player's health by subtracing the amount in the enemyAttack variable
    var damage = randomNumber(enemyAttack - 3, enemyAttack);

    playerHealth = Math.max(0, playerHealth - damage);
    //Log a resulting messgae to the console so we know it worked
    console.log (
        enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    //check player health
    if (playerHealth <=0) {
        window.alert(playerName + " has died.");

        playerMoney = playerMoney + 20;
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}
};
var startGame = function() {
for(var i = 0; i < enemyNames.length; i++) {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1) );
        //pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];
        //reset enemyHealth before starting new fight
        enemyHealth = randomNumber(40, 60);
        //use debugger to pause script from running, check what's going on
        //debugger;
        fight(pickedEnemyName);

        //if we're not at the last enemy in the array
        if (playerHealth > 0 && i < enemyNames.length - 1)
        
        //ask player if they would lke to use store before next round
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        
        //if yes, take them to the store() function
        if (storeConfirm) {
        shop();
        }
    }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    
    endGame();
}

// function to end game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + " .");
    }
    else {
    window.alert("You've lost your robot in battle.");
    }
    // ask player to play again
    var playAgainConfirm= window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}
var shop = function() {
    //ask player what they would like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    //use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": //new case
        case "refill":
            if (playerMoney >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");

            //increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "UPGRADE": //new case
        case "upgrade":
            if (playerMoney >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            //increase attack and decrease money
            playerAttack = playerAttack + 7;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        case "LEAVE": //new case
        case "leave":
        window.alert("Leaving the store.");

        //do nothing so function ends
        break;
    default:
        window.alert("You did not pick a valid option. Try again.");

        //call shop() again to force player to pick a valid option
        shop();
        break;
    }
};

var randomNumber = function(min,max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

//start the game when the page loads
startGame(
    //debugger;
);
