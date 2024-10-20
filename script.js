let door1 = document.getElementById("door1");
let door2 = document.getElementById("door2");
let door3 = document.getElementById("door3");
let startButton = document.getElementById("start");

let openDoor1;
let openDoor2;
let openDoor3;

let numClosedDoors = 3;

let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let score = 0;
let highscore = 0;
let currentStreak = document.getElementById("score-number");
let bestStreak = document.getElementById("high-score-number");
currentStreak.innerHTML = score;
bestStreak.innerHTML = highscore;

let curretlyPlaying = true;

function randomDoorGenerator() {
    let doorNumber = Math.floor(Math.random() * 6);
    switch (doorNumber) {
        case 0:
            openDoor1 = botDoorPath;
            openDoor2 = spaceDoorPath;
            openDoor3 = beachDoorPath;
            break;
        case 1:
            openDoor1 = botDoorPath;
            openDoor2 = beachDoorPath;
            openDoor3 = spaceDoorPath;
            break;
        case 2:
            openDoor1 = spaceDoorPath;
            openDoor2 = beachDoorPath;
            openDoor3 = botDoorPath;
            break;
        case 3:
            openDoor1 = spaceDoorPath;
            openDoor2 = botDoorPath;
            openDoor3 = beachDoorPath;
            break;
        case 4:
            openDoor1 = beachDoorPath;
            openDoor2 = spaceDoorPath;
            openDoor3 = botDoorPath;
            break;
        case 5:
            openDoor1 = beachDoorPath;
            openDoor2 = botDoorPath;
            openDoor3 = spaceDoorPath;
            break;
    }
}

function isClick(door) {
    return door.src !== closedDoorPath;
}

function handleDoorClick(door, doorOpen) {
    if (curretlyPlaying && !isClick(door)) {
        door.src = doorOpen;
        numClosedDoors -= 1;
        GameOver(doorOpen);
    }
}

function GameOver(door) {
    if (door === botDoorPath) {
        startButton.innerHTML = "Game over! Play again?"
        curretlyPlaying = false;
        score = 0; 
        currentStreak.innerHTML = score; 
    } else if (numClosedDoors === 1) {
        startButton.innerHTML = 'You win! Play again?';
        score += 1; 
		highscore == score;
        currentStreak.innerHTML = score;
        curretlyPlaying = false;
		if (score > highscore) {
            highscore = score;
            bestStreak.innerHTML = highscore; // Update displayed high score
        }
    }
}


door1.onclick = () => handleDoorClick(door1, openDoor1);
door2.onclick = () => handleDoorClick(door2, openDoor2);
door3.onclick = () => handleDoorClick(door3, openDoor3);

function startButtonClick() {
    door1.src = closedDoorPath;
    door2.src = closedDoorPath;
    door3.src = closedDoorPath;
    randomDoorGenerator();
    curretlyPlaying = true;
    numClosedDoors = 3;
	startButton.innerHTML = "Good luck!"
}

startButton.onclick = startButtonClick;

startButtonClick();
