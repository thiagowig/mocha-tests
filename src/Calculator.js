exports.sum = function(numberOne, numberTwo) {
  return numberOne + numberTwo;
};

exports.subtract = function(numberOne, numberTwo) {
  return numberOne - numberTwo;
};

exports.slowMethod = function() {
  console.log("Doing the heavy integration");
  return false;
};

exports.myMethod = function() {
  return exports.slowMethod();
};
