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
    outputField.innerHTML += '<li>' + 'FizzBuzz' + '</li>';
  }
  else if (currentNumber % 3 == 0) {
    numbersCollection.push('Fizz');
    outputField.innerHTML += '<li>' + 'Fizz' + '</li>';
  }
  else if (currentNumber % 5 == 0) {
    numbersCollection.push('Buzz');
    outputField.innerHTML += '<li>' + 'Buzz '+ '</li>' ;
  }
  else {
    numbersCollection.push(currentNumber);
    outputField.innerHTML += '<li>' + currentNumber + '</li>' ;
  }
}

// Print the output


//console.log(numbersCollection);
