let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* method 1: execution of forEach loop using Normal Function

arr.forEach(function (item, index) {
  console.log(arr[index]);
});
*/

/* method 2:Execution of forEach loop using Arrow Function
.... here the function that we are passing in  forEach loop is called callback function so basically callback function is the function that is passed to another function as the argument....

arr.forEach((item, index) => {       
console.log(arr[index]);             
});                                  
*/

/* method 3: Execution of code by making a callback function seperately

... here the forEach method will call the print function inside it 
arr.forEach(print);
function print(item, index, arr) {                   
  //   console.log((arr[index] = item));                 
  //   console.log(item);
  //   console.log(index);
  console.log(arr);
}
*/
