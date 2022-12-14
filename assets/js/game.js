/* GAME FUNCTIONS */
/*Generate Random number */
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

var fight = function(enemy) {
    console.log(enemy);
    while(playerInfo.health > 0 && enemy.health > 0) {
    //Ask if player wants to fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave the fight
        if (confirmSkip) {
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            //subtract money for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money);
            break;
        }
    }
    
    //Generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemy.health = Math.max(0, enemy.health - damage);
    //Log a resulting message to the console so we know it worked
    console.log( playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
    );
    //check enemy health. stop attacking if dead
    if (enemy.health <= 0) {
        window.alert(enemy.name + " has died.");
    //award player with money for winning
    playerInfo.money = playerInfo.money + 20;
    //leave while() loop since enemy is dead
    break;
    } 

    else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

//Remove player's health by subtracing the amount in the enemyAttack variable
    var damage = randomNumber(enemy.attack - 3, enemy.attack);

    playerInfo.health = Math.max(0, playerInfo.health - damage);
    //Log a resulting messgae to the console so we know it worked
    console.log (
        enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
    );
    //check player health
    if (playerInfo.health <=0) {
        window.alert(playerInfo.name + " has died.");

        playerInfo.money = playerInfo.money + 20;
        break;
    } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
    }
}
};
// start new game //
var startGame = function() {
      // reset player stats
    playerInfo.reset();

     // fight enemy robot in a loop //
    for(var i = 0; i < enemyInfo.length; i++) {
      if (playerInfo.health > 0) {

            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1) );
            //pick new enemy to fight based on the index of the enemyNames array

            var pickedEnemyObj = enemyInfo[i];
         
            // set health for new enemy
            pickedEnemyObj.health = randomNumber(40, 60);
      
            // pass enemy's variable value into the value of the fight function
            fight(pickedEnemyObj);
    
            //if we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1)
            
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
var endGame = function() {
        // if player is still alive, player wins!
        if (playerInfo.health > 0) {
            window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + " .");
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
    };
    // go to shop
var shop = function() {
        //ask player what they would like to do
        var shopOptionPrompt = window.prompt(
            "Would you like to REFILL your health, UPGRADE your attack or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
        );
        //use switch to carry out action
        switch (shopOptionPrompt) {
            case "REFILL": //new case
            case "refill":
                playerInfo.upgradeAttack();
                break;
            case "UPGRADE": //new case
            case "upgrade":
               playerInfo.upgradeAttack();
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
    // player info
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
     if (this.money >= 7) {
        window.alert("Refilling player's health by 20 for 7 dollars.");
        this.health += 20;
        this.money -= 7;
     }
     else {
        window.alert("You don't have enough money!");
     }
    },
    upgradeAttack: function() {
        if (this.money >=7) {
            window.alert("Upgrading player's attack by 6 or 7.");
        this.attack += 6;
        this.money-= 7;
    }
    else {
        window.alert("You don't have enough money!");
    }
}
};
// enemy info
    var enemyInfo = [
        {
            name: "Roborto",
            attack: randomNumber(10, 14)
        },
        {
            name: "Amy Android",
            attack: randomNumber(10, 14)
        },
        {
            name: "Robo Trumble",
            attack: randomNumber(10, 14)
        }
    ];


// function to end game

//start the game when the page loads
startGame();
