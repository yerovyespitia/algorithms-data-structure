// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.
// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.
// Bonus Constraints:
// If M is the length of message and N is the length of letters:
// Time Complexity: O(M+N)
// Space Complexity: O(N)
// Examples:
// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

const constructNote = (str1, str2) => {
  let counter = {};
  let arr1 = [...str1];

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];
    counter[char] ? (counter[char] += 1) : (counter[char] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];

    if (counter[char]) {
      arr1.splice(char, 1);
    }

    if (arr1.length === 0) {
      return true;
    }
  }
  return false;
};

console.log(constructNote("az", "za")); // true
console.log(constructNote("aa", "abc")); // false
console.log(constructNote("abc", "dcba")); // true
console.log(constructNote("aabbcc", "bcabcaddff")); // true
