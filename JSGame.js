let answer = prompt("Play a game?"); 
 if (answer === "yes") {  
    let playerName = prompt("Enter your name"); 
    gameFunction(playerName) 
} else {
    console.log("and...why not?"); 
}

function gameFunction(userInput) {
    let PlayerHP = 40; 
    let GrantHP = 10;
    let attack = 1; 
    let wins = 0;
    
    while (PlayerHP > 0 && GrantHP >= 0) { 
        PlayerHP = PlayerHP - attack; // subtraction of HP (working but wrong)
        GrantHP = GrantHP - attack; // subtraction of HP (working but wrong)
        console.log(userInput + " has " + PlayerHP + " health points left"); 
        console.log("Almighty Grant has " + GrantHP + " health points left"); 

        if (PlayerHP > 0 && GrantHP <= 0) { 
            wins++;
            console.log(wins);
            GrantHP = 10;
        }

        if (wins === 3) {                                    
            console.log(userInput + " wins!");
            break;
        } 

        if (PlayerHP <= 0 && GrantHP >= 0) {
            console.log(userInput + " loses!");
            break;
        }
    }
}

