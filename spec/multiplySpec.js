describe("This function should multiply numbers", function() {

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
