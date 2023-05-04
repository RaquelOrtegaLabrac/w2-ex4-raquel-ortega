import { checkIfHasVowels } from "./utils.js";

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
