const leftDoor = document.getElementById('left-door');

const rightDoor = document.getElementById('right-door');

const introArea = document.getElementById('IntroArea');

const messageSent = document.getElementById('message-main');

const winResult = document.getElementById('win-result');

const lossResult = document.getElementById('loss-result');

const winOp = document.getElementById('doggoCoin');

const loseOp = document.getElementById('firewall');

const userName = document.getElementById('username');

const nameInput = document.getElementById('name-input');

const playAgain = document.getElementById('try-again')

// const doors = document.getElementById

function sayName(){
  const nameMain = nameInput.value;
  console.log(nameMain);
  messageSent.textContent = "Welcome User_" + nameMain;
  introArea.style.display = "block";
  username.style.display = "none";
  messageSent.style.display = "block";
  winResult.style.display = "none";
  lossResult.style.display = "none";
  loseOp.style.display = "none";
  winOp.style.display = "none";
  playAgain.style.display = "none";
  leftDoor.style.display = "inline-block";
  rightDoor.style.display = "inline-block";
  
}

function chooseRandomDoor(selection){
  let correctDoor = 
      Math.floor(Math.random() *2)+1;
    if(correctDoor == 1 && selection == "left"){
      leftDoor.style.display = "none";
      rightDoor.style.display = "none";
      winResult.style.display = "block";
      winOp.style.display = "block";
      loseOp.style.display = "none"
      lossResult.style.display = "none";
      playAgain.style.display = "block"
    }
  else if(correctDoor == 2 && selection == "right"){
    leftDoor.style.display = "none";
    rightDoor.style.display = "none";
    winResult.style.display = "block";
    winOp.style.display = "block";
    loseOp.style.display = "none";
    lossResult.style.display = "none";
    playAgain.style.display = "block"
    
  }
  else{
    leftDoor.style.display = "none";
    rightDoor.style.display = "none";
    lossResult.style.display = "block";
    loseOp.style.display = "block";
    winOp.style.display = "none";
    winResult.style.display = "none";
    playAgain.style.display = "block";
    
  }
}