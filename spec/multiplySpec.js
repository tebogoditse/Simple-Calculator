describe("A function", function() {

  it("Should return 0", function() {
    expect(multiply(0, 0)).toBe(0);
  });

  it("Should return 2", function() {
    expect(multiply(1, 2)).toBe(2);
  });

  it("Should return 20", function() {
    expect(multiply(4, 5)).toBe(20);
  });

  it("Should return 30", function() {
    expect(multiply(10, 3, 1)).toBe(30);
  });

  it("Should return -30", function() {
    expect(multiply(10, 3, -1)).toBe(-30);
  });

  it("Should return 100", function() {
    expect(multiply(2, 2, 2, 2)).toBe(16);
  });
})
