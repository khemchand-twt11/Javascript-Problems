// we need to find in a sorted array if there exists any two numbers with the sum equal to x

/*
let arr = [2, 3, 5, 8, 9, 10, 11];
let x = 13;

//

Method:1

naive approach
function twoSum(arr, n) {
  for (let i = 0; i <= n - 2; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] == x) {
        return true;
      } else if (arr[i] + arr[j] > x) {
        break;
      }
    }
  }
  return false;
}

let ans = twoSum(arr, x);
console.log(ans);


time-complexity = O(N^2);
Auxiliary space = O(1);
*/

//two-pointer approach

/*
= type of two pointers
    - both the pointers are at extreme position
    - both the pointers starts from same position
*/

//Method:2
/*
let arr = [2, 3, 5, 8, 9, 10, 11];
let n = 7;
let x = 17;

function PairSum(arr, n, x) {
  let i = 0;
  let j = n - 1;
  while (i < j) {
    if (arr[i] + arr[j] < x) {
      i++;
    } else if (arr[i] + arr[j] > x) {
      j--;
    } else {
      return true;
    }
  }
  return false;
}

let ans = PairSum(arr, n, x);
console.log(ans);
*/

// Print all the pairs that is equal to the given sum
let arr = [2, 3, 5, 8, 9, 10, 11];
let x = 13;
let n = 7;

function PairSum(arr, n, x) {
  let i = 0;
  let j = n - 1;
  let count = 0;
  while (i < j) {
    if (arr[i] + arr[j] < x) {
      i++;
    } else if (arr[i] + arr[j] > x) {
      j--;
    } else {
      console.log(arr[i], arr[j]);
      count++;
      i++;
      j--;
    }
  }
  return count;
}

let ans = PairSum(arr, n, x);
console.log(ans);
