// we need to find number of subarrays having sum less than k

let arr = [2, 5, 6];
let n = 3;
let k = 10;
let count = 0;
for (let i = 0; i < n; i++) {
  let sum = 0;
  for (let j = i; j < n; j++) {
    if (sum + arr[j] < k) {
      sum += arr[j];
      count++;
    } else {
      break;
    }
  }
}
console.log(count);

//o(n^2) = complexity;
