let str = "abAAB76cddB";
let n = str.length;
//we need to find first non repeating character inside the string
for (let i = 0; i < n; i++) {
  let val = str[i];
  let count = 0;
  for (let j = i + 1; j < n; j++) {
    if (val == str[j]) {
      break;
    }
    count++;
  }
  if (count == n - i) {
  }
}
