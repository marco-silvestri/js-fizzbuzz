// Print 100 nubmbers. Change multiples of 3 with the word of Fizz, mulitples of 5 with Buzz

var numbersCollection = [];
var currentNumber = 0;

for (var i = 0; i < 100; i++) {
  ++currentNumber;
  if (currentNumber % 3 == 0 && currentNumber % 5 == 0) {
    numbersCollection.push('FizzBuzz');
  }
  else if (currentNumber % 3 == 0) {
    numbersCollection.push('Fizz');
  }
  else if (currentNumber % 5 == 0) {
    numbersCollection.push('Buzz');
  }
  else {
    numbersCollection.push(currentNumber);
  }
}

console.log(numbersCollection);
