//find if there is any subarray with the given sum[return true/false]

let arr = [1, 4, 20, 3, 10, 5];
let n = 6;
let sum = 33;
/*
we can generate all the sub-arrays first size is 6 so total subarray wil be 21 using n(n+1)/2

and after getting each subarray we can check wheather the sum of that sub-array is equal to the sum or not
*/

function findSum(arr, n) {
  for (let i = 0; i < n; i++) {
    let temp = 0;
    for (let j = i; j < n; j++) {
      temp += arr[j];
      if (temp == sum) {
        console.log(temp);
        return true;
      }
    }
  }
  return false;
}

console.log(findSum(arr, n));
// complexity of this programm will be onabort(n^2)
