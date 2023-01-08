//find a triplet that sum to a give value k

//Example:1
let arr = [12, 3, 4, 1, 6, 9];
let k = 24;
let n = 6;
//output: 12,3,9

//Example:2
let arr1 = [1, 2, 3, 4, 5];
let k1 = 9;
let n1 = 5;

//Example:3
let arr2 = [1, 4, 45, 6, 10, 8];
let k2 = 22;
let n2 = 6;
/*

a naive approach would be solve this question using 3 nested loop where first loop will start from "0" index(let's say i ) other will start from i+1, and the next will be from i+2 

time complexity in that case would be of O(N^3);

*/

/* let's use two pointer technique here we fix one element and for other two elements we use two pointers 

time complexity in that case would be of O(N^2);


*/

function tripletSum(arr, n, k) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      let tripletSum = arr[i] + arr[left] + arr[right];

      //condition to check if sum is equal
      if (tripletSum === k) {
        return arr[i] + "," + arr[left] + "," + arr[right];
      }
      //condition if sum is less than k
      else if (tripletSum < k) {
        left++;
      }

      //condition if sum is greater that k
      else {
        right--;
      }
    }
  }
  return false;
}

console.log(tripletSum(arr, n, k));
console.log(tripletSum(arr1, n1, k1));
console.log(tripletSum(arr2, n2, k2));
