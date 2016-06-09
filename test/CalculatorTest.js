
var expect = require('chai').expect;
var calculator = require('../src/Calculator');

describe ('Calculator test', function() {

  before(function() {
    console.log('Before');
  });

  after(function() {
    console.log('After');
  });

  beforeEach(function() {
    console.log('BeforeEach');
  });

  afterEach(function() {
    console.log('AfterEach');
  });

  describe ('Sum test', function() {
    it.only ('should return 3', function() {
      expect(calculator.sum(1, 2)).to.equal(3);
    });

    it.skip ('should return 10', function() {
      expect(calculator.sum(5, 5)).to.equal(10);
    });
  });

  describe ('Subtract test', function() {
    it ('should return -1', function() {
      expect(calculator.subtract(1, 2)).to.equal(-1);
    });
  });

});
