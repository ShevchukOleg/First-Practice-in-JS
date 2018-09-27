// alert ("Hallo world!");
// let z = prompt ("plese enter your name");
// alert ("Hi " + z + " !");
let str = "Hallo world!";
const g = 9.81;
console.log(str[4]);
console.log(str.charAt(4));
// разница: если символа нет charAt выдает пустую строку а [] - undefined
console.log(str.length);
console.log(str.indexOf("rl"));
// .indexOf(al, 1) поиск подстроки с позиции. Можно применять ~x = -(x+1)
console.log(str.lastIndexOf("rl"));
// Взятие подстроки
// console.log(str.substring(start [, end]));
// From start to end (exceptionally)
// console.log(str.substr(start [, length]));
console.log(str.slice(5, 11));
// Юникод:
// console.log(str1.fromCharCode(code));
// console.log(str.charCodeAt(pos));

console.log(isNaN(str));
console.log(isFinite(str));
function isNumeric(str) {
  return !isNaN(parseFloat(str)) && isFinite(str);
}
console.log(parseFloat( "80.2px"));
console.log(g.toFixed(1));
console.log(Math.round(g));
var n = 3.465;
console.log("Внимание!")
console.log( n.toFixed(2));
// Округляет математичесик правильно  при спорной "5"
console.log( Math.round(n));
console.log( Math.round(n * 100) / 100 ); 

console.log(Math.floor(g));
console.log(Math.ceil(g));