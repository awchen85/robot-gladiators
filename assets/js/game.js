var playerName = window.prompt("What is your robot's name?");
var playerHealth= 100;
var playerAttack= 10;
var playerMoney= 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
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
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }
    
    //Remove enemy health by subtracting amount of playerAttack
    enemyHealth = enemyHealth - playerAttack;
    //Log a resulting message to the console so we know it worked
    console.log( playerName + ' attacked ' + enemyName + '. ' + enemyNames + ' now has ' + enemyHealth + ' health remaining.'
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
    playerHealth = playerHealth - enemyAttack;
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
        enemyHealth = 50;
        //use debugger to pause script from running, check what's going on
        //debugger;
        fight(pickedEnemyName);
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



//start the game when the page loads
startGame(
    //debugger;
);