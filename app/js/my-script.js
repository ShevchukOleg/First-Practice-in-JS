// // alert ("Hallo world!");
// // let z = prompt ("plese enter your name");
// // alert ("Hi " + z + " !");
// let str = "Hallo world!";
// const g = 9.81;
// console.log(str[4]);
// console.log(str.charAt(4));
// // разница: если символа нет charAt выдает пустую строку а [] - undefined
// console.log(str.length);
// console.log(str.indexOf("rl"));
// // .indexOf(al, 1) поиск подстроки с позиции. Можно применять ~x = -(x+1)
// console.log(str.lastIndexOf("rl"));
// // Взятие подстроки
// // console.log(str.substring(start [, end]));
// // From start to end (exceptionally)
// // console.log(str.substr(start [, length]));
// console.log(str.slice(5, 11));
// // Юникод:
// // console.log(str1.fromCharCode(code));
// // console.log(str.charCodeAt(pos));

// console.log(isNaN(str));
// console.log(isFinite(str));
// function isNumeric(str) {
//   return !isNaN(parseFloat(str)) && isFinite(str);
// }
// console.log(parseFloat( "80.2px"));
// console.log(g.toFixed(1));
// console.log(Math.round(g));
// var n = 3.465;
// console.log("Внимание!")
// console.log( n.toFixed(2));
// // Округляет математичесик правильно  при спорной "5"
// console.log( Math.round(n));
// console.log( Math.round(n * 100) / 100 ); 

// console.log(Math.floor(g));
// console.log(Math.ceil(g));

// function foo(){
//   console.log(2018);
//   return;
// }
// let f = foo();
// console.log(f);

// var a = "g v",
//     b = "2018";
  
// function foo1(){
//   var a = 'l v';
//   console.log(a, b);
// }
// foo1();
// console.log(a);



// var apples = 5;
// 	if (true) {
//   	var apples = 10;
// 	console.log(apples);
// 	}
// 	console.log(apples);
// // Але
//   let apple = 5; // (Глобальна область видимості, псевдо глобальна змінна)
// if (true) {
//   let apple = 10;
//   console.log(apple); // 10 (блокова область видимості, блокова змінна)
// }
// console.log(apple); 

// let variable = "Haha";
// function test(argumentVar){
//   return "Result is: " + argumentVar;
// }
// let functionRes = test(variable);
// console.log(functionRes);

// // Callback
// function getNumber(number, function1Res){
//   return "The number was divided on: " + function1Res + " and result is: " + number/function1Res;
// }
// let number = 100;
// function exemple(){
//   return 50;
// }
// console.log(getNumber(number, exemple()));


let arr = ["Есть", "жизнь", "на", "Марсе"];

let arrLength = [];
for (let i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
}

console.log( arrLength );
let arrLengths = arr.map(function(item){
  return item.length;
});
console.log(arrLengths)