// given two strings, write a function to determine if the second string
// is an anagram of the first. An anagram is a word, phrase, or name formed
// by rearranging the letters of another, such as cinema from iceman

// Solution with arrays
// const validAnagram = (str1, str2) => {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let arr1 = [...str1].sort().join("").toString();
//   let arr2 = [...str2].sort().join("").toString();
//   if (arr1 === arr2) {
//     return true;
//   }
//   return false;
// };

// Solution with frequency pattern
const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let count = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    count[letter] ? (count[letter] += 1) : (count[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];

    if (!count[letter]) {
      return false;
    } else {
      count[letter] -= 1;
    }
  }

  return true;
};

console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
