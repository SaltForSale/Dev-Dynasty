//calculator//
let prevVal = '';
let newVal = '';
let resultVal = '';
let mathOperator = '';

//store whether or not decimal was clicked 
//only allow one decimal per val 
let decimalClicked = false;
//Hold values we want sotred in memory
let valMemStored = '';

function numButPress(num) {
  //check if a number has already been clicked
  if (resultVal) {
    //start a new number
    newVal = num;
    //reset to create a new result 
    resultVal = '';
  } else {
    //used to block multiple decimals
    if (num === '.') {
      if (decimalClicked != true) {
        //take the current value of newVal and add the character pressed 
        newVal += num;
        //set decimal check var to true, want allow more
        decimalClicked = true;
      }
    } else {
      newVal += num;
      console.log(newVal);
    }
  }
  //update the display
  document.getElementById('entry').value = newVal;
}
function mathButPress(operator) {
  if (!resultVal) {
    //check if there was a previous calculation by seeing if resultVal has a value
    //If it doesn't, then the current val as a previous for the next calculation
    prevVal = newVal;
  } else {
    //if there is a current result store that as the previous value entered 
    prevVal = resultVal;
  }
  newVal = '';
  decimalClicked = false;
  //store operator 
  mathOperator = operator;
  resultVal = '';
  document.getElementById('entry').value = '';
}

function equalButPress() {
  decimalClicked = false;
  prevVal = parseFloat(prevVal);
  newVal = parseFloat(newVal);

  switch (mathOperator) {
    case '+':
      resultVal = prevVal + newVal
      break

    case '-':
      resultVal = prevVal - newVal
      break

    case '*':
      resultVal = prevVal * newVal
      break

    case '/':
      resultVal = prevVal / newVal
      break

    default:
      resultVal = newVal
  }
  //store the current value as the previous so that i can except to next value in the calculation 
  prevVal = newVal;
  document.getElementById('entry').value = resultVal;
  console.log(resultVal);

}

//clear all except memory
function clearButPress() {
  prevVal = '';
  newVal = '';
  resultVal = '';
  mathOperator = '';
  decimalClicked = false;

  document.getElementById('entry').value = '0';
}
function copyButPress() {
  valMemoryStored = document.getElementById('entry').value;
}
//If a value has been stored paste it in the #entry window and assign its as the newVl
function pasteButPress() {
  if (valMemStored) {
    document.getElementById('entry').valMemStored;
    newVal = valMemStored;
  }
}
//evans code
let pWins = 0;
let cWins = 0;

const getUserChoice = (userChoice) => {
  if (userChoice === "rock") {
    document.getElementById("rock").src = "rockActive.png";
    document.getElementById("scissors").src = "scissors.png";
    document.getElementById("paper").src = "paper.png";
    return userChoice;
  }

  if (userChoice === "scissors") {
    document.getElementById("scissors").src = "scissorsActive.png";
    document.getElementById("rock").src = "rock.png";
    document.getElementById("paper").src = "paper.png";
    return userChoice;
  }

  if (userChoice === "paper") {
    document.getElementById("paper").src = "paperActive.png";
    document.getElementById("rock").src = "rock.png";
    document.getElementById("scissors").src = "scissors.png";
    return userChoice;
  } else {
    console.log("Error, please type:rock, paper, or scissors.");
  }
};
//this is the image output for each click input
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
//this is the random selection of the computer
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    if (userChoice === "rock" && userChoice === computerChoice) {
      document.getElementById("winner").src = "error.png";
      document.getElementById("winnerTag").innerHTML = "No Winner!";
      document.getElementById("compImg").src = "rock.png";
      return "This game is a tie!";
    }
    if (userChoice === "paper" && userChoice === computerChoice) {
      document.getElementById("winner").src = "error.png";
      document.getElementById("winnerTag").innerHTML = "No Winner!";
      document.getElementById("compImg").src = "paper.png";
      return "This game is a tie!";
    }
    if (userChoice === "scissors" && userChoice === computerChoice) {
      document.getElementById("winner").src = "error.png";
      document.getElementById("winnerTag").innerHTML = "No Winner!";
      document.getElementById("compImg").src = "scissors.png";
      return "This game is a tie!";
    }
  }
  //this is the output of all values if the user input and computer input are the same
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      document.getElementById("winner").src = "paper.png";
      document.getElementById("compImg").src = "paper.png";
      document.getElementById("cWins").innerHTML = cWins++;
      document.getElementById("winnerTag").innerHTML = "Winner!";
      return "Sorry, computer won!";
    } else {
      document.getElementById("winner").src = "rock.png";
      document.getElementById("compImg").src = "scissors.png";
      document.getElementById("pWins").innerHTML = pWins++;
      document.getElementById("winnerTag").innerHTML = "Winner!";
      return "Congratulations, you won!";
    }
  }
  //this is the output of all values in relation to a user rock input
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      document.getElementById("winner").src = "scissors.png";
      document.getElementById("compImg").src = "scissors.png";
      document.getElementById("winnerTag").innerHTML = "Winner!";
      document.getElementById("cWins").innerHTML = cWins++;
      return "Sorry, computer won!";
    } else {
      document.getElementById("winner").src = "paper.png";
      document.getElementById("compImg").src = "rock.png";
      document.getElementById("winnerTag").innerHTML = "Winner!";
      document.getElementById("pWins").innerHTML = pWins++;
      return "Congratulations, you won!";
    }
  }
  //this is the output of all values in relation to a user paper input
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      document.getElementById("winner").src = "rock.png";
      document.getElementById("compImg").src = "rock.png";
      document.getElementById("winnerTag").innerHTML = "Winner!";
      document.getElementById("cWins").innerHTML = cWins++;
      return "Sorry, computer won!";
    } else {
      document.getElementById("winner").src = "scissors.png";
      document.getElementById("compImg").src = "paper.png";
      document.getElementById("winnerTag").innerHTML = "Winner!";
      document.getElementById("pWins").innerHTML = pWins++;
      return "Congratulations, you won!";
    }
  }
};
//this is the output of all values in relation to a user scissors input
const playGame = (choice) => {
  const userChoice = getUserChoice(choice);
  const computerChoice = getComputerChoice();
  let ratio = (pWins / cWins).toFixed(2);
  console.log(ratio);
  document.getElementById("ratio").innerHTML = ratio;
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
//this block of code will set the values of computer and user choice
playGame();
const board = document.getElementById('board');
const status = document.getElementById('status');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Initialize the board
for (let i = 0; i < 9; i++) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.setAttribute('data-index', i);
  cell.addEventListener('click', handleCellClick);
  board.appendChild(cell);
}

function handleCellClick(event) {
  const selectedIndex = event.target.getAttribute('data-index');

  if (gameBoard[selectedIndex] === '' && gameActive) {
    gameBoard[selectedIndex] = currentPlayer;
    event.target.textContent = currentPlayer;

    if (checkWinner()) {
      status.textContent = `Player ${currentPlayer} wins!`;
      gameActive = false;
    } else if (gameBoard.every(cell => cell !== '')) {
      status.textContent = "It's a draw!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      status.textContent = `Player ${currentPlayer}'s turn`;
    }
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  return winningCombinations.some(combination => {
    const [a, b, c] = combination;
    return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
  });
}

