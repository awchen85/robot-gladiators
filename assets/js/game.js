var playerName = window.prompt("What is your robot's name?");
var playerHealth= 100;
var playerAttack= 10;
var playerMoney= 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
    //Ask if player wants to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === 'skip' || promptFight === 'SKIP') {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave the fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money for skipping
            playerMoney = playerMoney -10;
            console.log("playerMoney", playerMoney);
            break;
        }
    }
    
    //Remove enemy health by subtracting amount of playerAttack
    enemyHealth = enemyHealth - playerAttack;
    //Log a resulting message to the console so we know it worked
    console.log(
        playerName + " attacked " + enemyNames[i] + ". " + enemyNames[i] + " now has " + enemyHealth + " health remaining. "
    );
    //check enemy health. stop attacking if dead
    if (enemyHealth <= 0) {
        window.alert(enemyNames[i] + " has died.");
    //award player with money for winning
    playerMoney = playerMoney + 20;
    //leave while() loop since enemy is dead
    break;
    } 

    else {
        window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.");
    }

//Remove player's health by subtracing the amount in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    //Log a resulting messgae to the console so we know it worked
    console.log (
        enemyNames[i] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    //check player health
    if (playerHealth <=0) {
        window.alert(playerName + " has died.");
        break;
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}
};

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName[i]);
}

