// Перерменные задачи (var)
// 1
// let price;
// const maxNumb = 1000;
// const userName = 'John';
// let userData;
// 2
// console.log(test);
// var test = 'string';
// Работает хойстинг, консоль выдает что переменная не определена (undefined)
// var x = 'string';
// var x = 'String #2';
// console.log(x);
// Так как переменная была перезаписана консоль выдаст последнее значение (String #2)
// 3
// console.log(test2);
// let test2 = 'string';
// Так как для let не работает эфект хойстинга, консоль выдаст ошыбку(переменная не существует)
// const x1 = 'string';
// x1 = 'String #2';
// console.log(x);
// Так как константы нельзя переопределять произойдет ошибка на 20 строке

// let someVar = 15;
// let someVar = 10;
// Дважды создавать одну перепенную нельзя, изменение переменной должно происходить без ее оглашения

// Строки Задачи
let string = 'some test string';
// первая и последняя буквы
let firstLetter = string.charAt(0);
let lasrLetter = string.charAt(string.length - 1);
console.log('First letter is \"' + firstLetter + "\" and the last letter is \"" + lasrLetter +'\"');
console.log(firstLetter.toUpperCase() + string.slice(1, string.length - 1) + lasrLetter.toUpperCase());
console.log(string.indexOf('string'));

// Конкретно для этой строки подходит метод:
console.log(string.lastIndexOf(' '));
// или
const gap = ' ';
let position = 0;
while (true) {
  let foundPosition = string.indexOf(gap, position);
  if (foundPosition == -1 ) {break};
  console.log('Позиция пробела:')
  console.log(foundPosition);
  position = foundPosition + 1;
};
// Простой вариант
console.log(string.slice(5,9));
// А вдруг первый знак будет пробелом или числом, а нам нужны буквы. 
let firstPos = 5;
let lastPos = 9;
if (isNaN(string.charAt(5)) == true) {
console.log(string.slice(firstPos,lastPos));}
else {console.log(string.slice(firstPos+1,lastPos+1))
};
// Строку с 5 по 9 символы так понимаю включительно
console.log(string.slice(5,10));
let string_2 = string.slice(0, string.length - 6)
console.log(string_2)

let a = 20;
let b = 16;
let resString = a +'' + b +'';
console.log(resString);

// Числа
let p = Math.PI;
console.log(Math.round(p*100)/100);

console.log('Max value is \"'+ Math.max(15, 11, 16, 12, 51, 12, 13, 51) + '\"' + '\nMin value is \"' + + Math.min(15, 11, 16, 12, 51, 12, 13, 51) + '\"');

let randomNumber = Math.random();
console.log(Math.round(randomNumber*100)/100);

let x = +prompt("Please insert the x value" , 1);
console.log(Math.random() * x);

let sum = Math.round((0.7+0.6)*10)/10;
console.log(sum);

let str_3= '100$';
console.log(parseFloat(str_3));