export const checkIfHasVowels = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.every((vowel) => word.includes(vowel));
};

export const isEven = (number) => Object.is(number % 2, 0);
