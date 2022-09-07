const palindromes = function (phrase) {
  let phraseEdited = phrase
    .toLowerCase()
    .match(/[^_\W]+/g)
    .join("");
  console.log(phraseEdited);

  const phraseArr = phraseEdited.split("");
  console.log(phraseArr);

  //Create another string or array in reverse. Must use slice to create a copy before reversing. Otherwise both arrays are reversed.
  const reversedArr = phraseArr.slice().reverse();

  //Compare the two strings/arrays and return result to complete function.

  return phraseArr.toString() === reversedArr.toString();
};

// Do not edit below this line
module.exports = palindromes;
