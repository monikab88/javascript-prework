function playGame(playerInput) {
	clearMessages ()

	
	let getMoveName = function (ComputerMove){
		if(ComputerMove == 1){
	  	  return 'kamień';
		} else if (ComputerMove == 2){
		  printMessage('Mój ruch to: ' + ComputerMove);
	      return 'papier';
		} else {
      	  printMessage('Mój ruch to: ' + ComputerMove);
          return 'nożyce';
		}
	}

	const randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowana liczba to: ' + randomNumber);

	let ComputerMove = getMoveName(randomNumber);


	console.log('Gracz wpisał: ' + playerInput);

	let PlayerMove = getMoveName(playerInput);

	console.log('moves:', ComputerMove, PlayerMove);

	let displayResult = function (ComputerMove, PlayerMove){
	printMessage('Zagrałem ' + ComputerMove + ', a Ty ' + PlayerMove);
  
		if( ComputerMove == 'kamień' && PlayerMove == 'papier'){
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
		} else if( ComputerMove == 'papier' && PlayerMove == 'kamień'){
			printMessage('Ja wygrywam!');
		} else if( ComputerMove == 'nożyce' && PlayerMove == 'papier'){
			printMessage('Ja wygrywam!');
		} else if( ComputerMove == 'nożyce' && PlayerMove == 'nożyce'){
			printMessage('Remis');
		} else {
			printMessage('Ty wygrywasz!');
		  }
  	}
		displayResult (ComputerMove,PlayerMove);
}
	document.getElementById('play-rock').addEventListener('click', function(){
		playGame(1);
	});

	document.getElementById('play-paper').addEventListener('click', function(){
		playGame(2);
	});

	document.getElementById('play-scissors').addEventListener('click', function(){
		playGame(3);
	});
	
	console.log('Gracz wybrał: ' + playerInput);

