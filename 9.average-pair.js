// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
// Bonus Constraints:
// Time: O(N)
// Space: O(1)
// Sample Input:
// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

const averagePair = (arr, num) => {
  if (arr.length === 0 || arr.length === 1) {
    return false;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // console.log(`pair`, [arr[left], arr[right]]);

    let sum = arr[left] + arr[right];
    let avg = sum / 2;

    // console.log(`sum`, sum);
    // console.log(`avg`, avg);

    if (avg === num) {
      return true;
      // console.log(`it's true`);
    } else if (avg < num) {
      left++;
    } else {
      right--;
    }

    // console.log(`avg`, sum / 2);
  }

  return false;
};

// averagePair([1, 2, 3], 2.5);
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
