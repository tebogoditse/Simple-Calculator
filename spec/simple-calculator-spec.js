const add = require("../src/add");
const multiply = require("../src/multiply");

describe("Simple Calculator", function() {
  describe("This function should add numbers", function() {

    it("Should add two numbers", function() {
      expect(add(0, 0)).toBe(0);
    });

    it("Should add negative numbers", function() {
      expect(add(-1, -1)).toBe(-2);
    });

    it("Should add two numbers", function() {
      expect(add(4, 5)).toBe(9);
    });

    it("Should add more than two numbers", function() {
      expect(add(17, 3, 2)).toBe(22);
    });

    it("Should add more than two numbers", function() {
      expect(add(10, 25, 10, 5)).toBe(50);
    });

    it("Should add more than two numbers", function() {
      expect(add(10, 25, 10, 5, 50)).toBe(100);
    });

  })

  describe("This function should multiply numbers", function(){

    it("Should multiply two numbers", function() {
      expect(multiply(0, 0)).toBe(0);
    });

    it("Should multiply two numbers", function() {
      expect(multiply(1, 2)).toBe(2);
    });

    it("Should multiply two numbers", function() {
      expect(multiply(4, 5)).toBe(20);
    });

    it("Should multiply more than two numbers", function() {
      expect(multiply(10, 3, 1)).toBe(30);
    });

    it("Should be able multiply negative numbers", function() {
      expect(multiply(10, 3, -1)).toBe(-30);
    });

    it("Should be able to multiply multiple numbers", function() {
      expect(multiply(2, 2, 2, 2)).toBe(16);
    });
  })

})
