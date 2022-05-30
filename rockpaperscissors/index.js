let comScore = 0
let userScore = 0
let gameStarted = false

function start () { 
    if (gameStarted === false) {
    document.getElementById("computerScore").textContent = "Computer Score: " + comScore
document.getElementById("userScore").textContent = "Your Score: " + userScore
    gameStarted = true
    }
}
let letters = ["Rock", "Paper", "Scissors"]

let random = " "

function generateRandomly() {
    if (gameStarted === true) {
    //let random = " "
    for (let i = 0; i < 1; i++) {
        random = letters[Math.floor(Math.random() * 3)]
    }
    //return random
    document.getElementById("Pass").textContent = "Computer's Pick: " + random
    }
}


function rock () {
    generateRandomly()
    
    if (random === letters[1]) {
        document.getElementById("Passw").textContent = "YOU LOSE!"
        comScore ++
        document.getElementById("computerScore").textContent = "Computer Score: " + comScore
        document.getElementById("userScore").textContent = "Your Score: " + userScore
    } else if (random === letters[2]) {
        document.getElementById("Passw").textContent = "YOU WIN!"
        userScore ++
        document.getElementById("computerScore").textContent = "Computer Score: " + comScore
        document.getElementById("userScore").textContent = "Your Score: " + userScore
    } else if (random === letters[0]) {
        document.getElementById("Passw").textContent = "IT'S A TIE!"
    }
}

function paper () {
    generateRandomly()
    
    if (random === letters[2]) {
        document.getElementById("Passw").textContent = "YOU LOSE!"
        comScore ++
        document.getElementById("computerScore").textContent = "Computer Score: " + comScore
        document.getElementById("userScore").textContent = "Your Score: " + userScore
    } else if (random === letters[0]) {
        document.getElementById("Passw").textContent = "YOU WIN!"
        userScore ++
        document.getElementById("computerScore").textContent = "Computer Score: " + comScore
        document.getElementById("userScore").textContent = "Your Score: " + userScore
    } else if (random === letters[1]) {
        document.getElementById("Passw").textContent = "IT'S A TIE!"
    }
}

function scissors () {
    generateRandomly()
    
    if (random === letters[0]) {
        document.getElementById("Passw").textContent = "YOU LOSE!"
        comScore ++
        document.getElementById("computerScore").textContent = "Computer Score: " + comScore
        document.getElementById("userScore").textContent = "Your Score: " + userScore
    } else if (random === letters[1]) {
        document.getElementById("Passw").textContent = "YOU WIN!"
        userScore ++
        document.getElementById("computerScore").textContent = "Computer Score: " + comScore
        document.getElementById("userScore").textContent = "Your Score: " + userScore
    } else if (random === letters[2]) {
        document.getElementById("Passw").textContent = "IT'S A TIE!"
    }
}
