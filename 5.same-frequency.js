// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)
// Sample Input:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

const sameFrequency = (num1, num2) => {
  // Frequency pattern
  let sameNum1 = num1.toString();
  let sameNum2 = num2.toString();

  if (sameNum1.length !== sameNum2.length) {
    return false;
  }

  let counter = {};

  for (let i = 0; i < sameNum1.length; i++) {
    let letter = sameNum1[i];
    counter[letter] ? (counter[letter] += 1) : (counter[letter] = 1);
  }

  for (let i = 0; i < sameNum2.length; i++) {
    let letter = sameNum2[i];

    if (!counter[letter]) {
      return false;
    } else {
      counter[letter] -= 1;
    }
  }

  return true;
};

console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
