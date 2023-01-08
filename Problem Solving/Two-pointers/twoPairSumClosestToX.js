//we need to find two pairs from two sorted array with the sum that is closest to x

let arr1 = [1, 4, 5, 7];
let arr2 = [10, 20, 30, 40];
let x = 32;
let n = 4;
let m = 4;

//naive approach
let min = Infinity;
let num1;
let num2;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    let ans = Math.abs(arr1[i] + arr2[j] - x);
    if (min > ans) {
      min = ans;
      num1 = arr[i];
      num2 = arr[j];
    }
  }
}

// let newarr = arr1.concat(arr2);
// console.log(newarr);
// console.log(typeof newarr);
