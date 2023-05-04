// Const checkVowelsInAWord = (word) => {
//   const vowels = ["a"];
//   return vowels.every((vowel) => word.includes(vowel));
// };

// checkVowelsInAWord("hola");

export const checkIfHasVowels = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.every((vowel) => word.includes(vowel));
};

export default checkIfHasVowels;

export const IsEven = (number) => Object.is(number % 2, 0);
