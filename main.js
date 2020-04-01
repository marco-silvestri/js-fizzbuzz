// Print 100 nubmbers. Change multiples of 3 with the word of Fizz, mulitples of 5 with Buzz

// References
var outputField = document.getElementById('app__numbers');
var outputFieldAdd;

// Declare array and explicit number
var numbersCollection = [];
var currentNumber = 0;

for (var i = 0; i < 100; i++) {
  ++currentNumber;
  if (currentNumber % 3 == 0 && currentNumber % 5 == 0) {
    numbersCollection.push('FizzBuzz');
    outputField.innerHTML += '<li class="fizz-buzz">' + 'FizzBuzz' + '</li>';
  }
  else if (currentNumber % 3 == 0) {
    numbersCollection.push('Fizz');
    outputField.innerHTML += '<li class="fizz">' + 'Fizz' + '</li>';
  }
  else if (currentNumber % 5 == 0) {
    numbersCollection.push('Buzz');
    outputField.innerHTML += '<li class="buzz">' + 'Buzz '+ '</li>' ;
  }
  else {
    numbersCollection.push(currentNumber);
    outputField.innerHTML += '<li>' + currentNumber + '</li>' ;
  }
}

// Print the output


//console.log(numbersCollection);
