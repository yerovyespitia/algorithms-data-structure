// Write a function called sumZero which accepts a sorted array of ints.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values taht sum to zero o undefined
// if a pair does not exist

// Naive solution
// const sumZero = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// };

// Multiple pointers
const sumZero = (arr) => {
  let arrLength = arr.length - 1;
  let negativePointer = arr[0];
  let positivePointer = arr[arrLength];

  for (let i = 0; i < arr.length; i++) {
    let sum = negativePointer + positivePointer;
    if (sum === 0) {
      return [negativePointer, positivePointer];
    } else if (sum > 0) {
      arrLength = arrLength - 1;
      positivePointer = arr[arrLength];
    } else {
      negativePointer = arr[i + 1];
    }
  }
};

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2,2]
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
