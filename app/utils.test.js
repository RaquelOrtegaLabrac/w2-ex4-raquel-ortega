import { checkIfHasVowels, isEven } from "./utils.js";

describe("Given a checkIfHasVowels function", () => {
  describe("When it receives 'murcielago'", () => {
    test("Then it should returns true", () => {
      const word = "murcielago";

      const expectedResult = true;
      const result = checkIfHasVowels(word);
      expect(result).toBe(expectedResult);
    });
  });
});

describe("Given isEven function", () => {
  describe("When it receives 4", () => {
    test("Then it should returns true", () => {
      const number = 4;
      const expectedResult = true;

      const result = isEven(number);
      expect(result).toBe(expectedResult);
    });
  });
});

// Import test from "./utils.js";

// describe("Given a strictEquals function", () => {
//   describe("When it receives 1 and 1", () => {
//     test("Then it should returns true", () => {
//       const valueA = 1;
//       const valueB = 1;
//       const expectedResult = true;

//       const result = test.strictEqual(valueA, valueB);
//       expect(result).toBe(expectedResult);
//     });
//   });
// });
