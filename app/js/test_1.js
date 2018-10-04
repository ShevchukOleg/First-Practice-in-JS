let str = "Hallo";
let res = "";
for (let i = 0; i < str.length; i++ ) {
  res += str[i] + '*';
}
console.log(res.slice(0, -1));