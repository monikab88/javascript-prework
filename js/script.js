function getMoveName(ComputerMove){
	if(ComputerMove == 1){
	  return 'kamień';}
	else if (ComputerMove == '2'){
		printMessage('Mój ruch to: ' + ComputerMove);
	  return 'papier';}
	else {
      printMessage('Mój ruch to: ' + ComputerMove);
      return 'nożyce';}
}
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

console.log('moves:', argComputerMove, argPlayerMove);

function displayResult(argComputerMove, argPlayerMove){
	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
	if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
	  printMessage('Ty wygrywasz!');
	} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
	  printMessage('Tym razem przegrywasz :(');
	} else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
		printMessage('I mamy remis');
	} else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
		printMessage('Remis');
	} else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
		printMessage('Remis');
	} else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
		printMessage('Ty wygrywasz!');
	} else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
		printMessage('Ja wygrywam!');
	} else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
		printMessage('Ja wygrywam!');
	} else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
			printMessage('Remis');
	} else {
			printMessage('Ty wygrywasz!');
		  }
  }
let (argComputerMove, argPlayerMove) = displayResult;
