// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
// Examples:
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

const isSubsequence = (str1, str2) => {
  let arrStr2 = [];

  for (let i = 0; i < str2.length; i++) {
    if (str1.includes(str2[i])) {
      arrStr2.push(str2[i]);
    }
  }

  let setStr1 = new Set([...str1]);
  let setStr2 = new Set(arrStr2);

  let toCompare = [...setStr1].join("").toString();
  let result = [...setStr2].join("").toString();

  if (toCompare === result) {
    return true;
  }

  return false;
};

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false
