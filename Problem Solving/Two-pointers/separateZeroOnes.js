// an array given with 0 and 1 we need to separate them

let arr = [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0];
let n = 21;

/*

Method:1**************************************

simple approach would be to count the number of zeros in the array and ultimately the numbers of one's will be (arr.length-number of zeros)

then fill them accordingly inside the array


function seperateZeroOnes(arr, n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    // taking count of zeros
    if (arr[i] == 0) {
      count++;
    }
  }
  // running loop from 0 to count-1 to fill array with zeros

  for (let i = 0; i < count; i++) {
    arr[i] = 0;
  }
  //running loop from count to n-1 to print remaining 1

  for (let i = count; i < n; i++) {
    arr[i] = 1;
  }
  return arr;
}

console.log(seperateZeroOnes(arr, n));
**********************************************

*/

/*

Method :2 - simple method using two pointers tecnique

*/

// let arr1 = [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0];
function seperateZeroOnes(arr, n) {
  let left = 0;
  let right = n - 1;
  while (left < right) {
    // check if arr[left] is equal to 0 then move ahead
    while (arr[left] == 0 && left < right) {
      left++;
    }

    //check if arr[right] is equal to 1 then move ahead
    while (arr[right] == 1 && left < right) {
      right--;
    }

    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}

let newarr = seperateZeroOnes(arr, n);
console.log(newarr);
