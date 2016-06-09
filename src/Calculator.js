function Calculator () {};

Calculator.sum = function(numberOne, numberTwo) {
  return numberOne + numberTwo;
};

Calculator.subtract = function(numberOne, numberTwo) {
  return numberOne - numberTwo;
};

Calculator.slowMethod = function() {
  console.log("Doing the heavy integration");
  return false;
}

Calculator.myMethod = function() {
  return Calculator.slowMethod();
}
