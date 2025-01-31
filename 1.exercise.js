// given two strings, write a function to determine if the second string
// is an anagram of the first. An anagram is a word, phrase, or name formed
// by rearranging the letters of another, such as cinema from iceman

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let arr1 = [...str1].sort().join("").toString();
  let arr2 = [...str2].sort().join("").toString();
  if (arr1 === arr2) {
    return true;
  }
  return false;
};

console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
