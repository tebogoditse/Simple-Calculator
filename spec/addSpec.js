describe("A function", function() {

  it("Should return 0", function() {
    expect(add(0, 0)).toBe(0);
  });

  it("Should return -2", function() {
    expect(add(-1, -1)).toBe(-2);
  });

  it("Should return 9", function() {
    expect(add(4, 5)).toBe(9);
  });

  it("Should return 23", function() {
    expect(add(17, 3, 2)).toBe(22);
  });

  it("Should return 50", function() {
    expect(add(10, 25, 10, 5)).toBe(50);
  });

  it("Should return 100", function() {
    expect(add(10, 25, 10, 5, 50)).toBe(100);
  });
})
