let txt = "AABAACAADAABAAABAA";
let str = "AABA";

// we need to to find all occurence of pattern str in the txt string?

let n = txt.length;
let m = str.length;
let count = 0;
for (let i = 0; i <= n - m; i++) {
  let val = 0;
  for (let j = 0; j < m; j++) {
    if (txt[i + j] != str[j]) {
      break;
    }
    val++;
  }
  if (val === m) {
    count++;
  }
}

console.log(count);
