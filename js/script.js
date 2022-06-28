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

console.log('moves:', ComputerMove, PlayerMove);

function displayResult(ComputerMove, PlayerMove){
	printMessage('Zagrałem ' + ComputerMove + ', a Ty ' + PlayerMove);
  
	if( computerMove == 'kamień' && PlayerMove == 'papier'){
	  printMessage('Ty wygrywasz!');
	} else if (ComputerMove == 'kamień' && PlayerMove == 'nożyce') {
	  printMessage('Tym razem przegrywasz :(');
	} else if (ComputerMove == 'kamień' && PlayerMove == 'kamień') {
		printMessage('I mamy remis');
	} else if( ComputerMove == 'kamień' && PlayerMove == 'kamień'){
		printMessage('Remis');
	} else if( ComputerMove == 'papier' && PlayerMove == 'papier'){
		printMessage('Remis');
	} else if( ComputerMove == 'papier' && PlayerMove == 'nożyce'){
		printMessage('Ty wygrywasz!');
	} else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
		printMessage('Ja wygrywam!');
	} else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
		printMessage('Ja wygrywam!');
	} else if( ComputerMove == 'nożyce' && PlayerMove == 'nożyce'){
			printMessage('Remis');
	} else {
			printMessage('Ty wygrywasz!');
		  }
  }

displayResult (ComputerMove,PlayerMove)