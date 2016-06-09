
var expect = require('chai').expect;
var calculator = require('../src/Calculator');

console.log(calculator);

describe ('Calculator test', function() {

  describe ('Sum test', function() {
    it ('should return 3', function() {
      expect(calculator.sum(1, 2)).to.equal(3);
    });
  });

  describe ('Subtract test', function() {
    it ('should return 3', function() {
      expect(calculator.subtract(1, 2)).to.equal(-1);
    });
  });

});
