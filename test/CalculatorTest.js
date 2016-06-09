
var expect = require('chai').expect;
var sinon = require('sinon');
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
    it ('should return 3', function() {
      expect(calculator.sum(1, 2)).to.equal(3);
    });

    it ('should return 10', function() {
      expect(calculator.sum(5, 5)).to.equal(10);
    });
  });

  describe ('Subtract test', function() {
    it ('should return -1', function() {
      expect(calculator.subtract(1, 2)).to.equal(-1);
    });
  });

  describe ('Stub test', function() {
    it('Testing with stub', function() {
      var stub = sinon.stub(calculator, "sum", function() {
        return "DEDE";
      });

      expect(calculator.sum(1, 2)).to.equal("DEDE");

    });

    it('Testing with stub02', function() {
      var stub = sinon.stub(calculator, "slowMethod", function() {
        return true;
      });

      expect(calculator.myMethod()).to.be.true;
    });
  });

});
