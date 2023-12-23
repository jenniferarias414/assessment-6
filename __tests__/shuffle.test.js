const shuffle = require("../src/shuffle");

test("checking if Jest works", () => {
  expect(2).toBe(2)
}) //Jest works :)

describe("shuffle should...", () => {
  // CODE HERE
  test('return an array', () => {
    const result = shuffle([1, 2, 3, 4, 5]);
    expect(Array.isArray(result)).toBe(true);
});

test('return an array of the same length as the argument', () => {
  const inputArray = [1, 2, 3, 4, 5];
  const result = shuffle(inputArray);
  expect(result).toHaveLength(inputArray.length);
});

test('have shuffled items around', () => {
  const inputArray = [1, 2, 3, 4, 5];
  const result = shuffle(inputArray);
  expect(result).not.toBe(inputArray); //toEqual works also...
});

});