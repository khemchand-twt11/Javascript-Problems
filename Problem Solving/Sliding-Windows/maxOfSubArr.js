//input given an Array find the max of all subarrays of size k

let arr = [1, 4, 2, 10, 23, 3, 1, 0, 20]; //output=39 k =4
let n = 9,
  k = 4;

/*  //by using brute force approach (Method-1)

 assigning max_element to -Infinity
let max_element = -Infinity;

outer loop will go from 0 till n-k, why? because i want window of size 4 and  for the last window i should stop 3 elements before so that window can be made

for (let i = 0; i <= n - k; i++) {
  let sum = 0;

  here j starts from i each time and j will maintain the window size 4 for each increment of i so that we can get subarray of size 4 for that we have used formula

  to create a window of particular size we do (end-start+1= k) from here end will be k+start-1

  for (let j = i; j <= k + i - 1; j++) {
    sum += arr[j];
  }
  simple comparison of sum with max form min problem also simple condition will change here

  if (sum > max_element) {
    max_element = sum;
  }
}

console.log(max_element);

*/
/*
//using Sliding window approach (Method-2)
function fun(arr, n, k) {
  max_sum = 0;
  // first we calculate the sum of first k-size window
  for (let i = 0; i <= k - 1; i++) {
    max_sum = max_sum + arr[i];
  }

  let curr_sum = max_sum;
  for (let i = k; i < n; i++) {
    curr_sum = curr_sum - arr[i - k] + arr[i];
    if (max_sum < curr_sum) {
      max_sum = curr_sum;
    }
  }
  return max_sum;
}
let ans = fun(arr, n, k);
console.log(ans);
*/
// Again using Sliding Window but with different approach (Method -3)
// let arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];
// let n = 9,
//   k = 4;
/*
function maxSub(arr, n, k) {
  let i = 0;
  let j = 0;
  let max = -Infinity;
  let sum = 0;
  while (j < n) {
    sum = sum + arr[j];

    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 == k) {
      if (max < sum) {
        max = sum;
      }
      sum = sum - arr[i];
      i++;
      j++;
    }
  }
  return max;
}
let ans = maxSub(arr, n, k);
console.log(ans);
*/
