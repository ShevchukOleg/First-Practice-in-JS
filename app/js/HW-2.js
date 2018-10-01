let obj = {product: 'iphone'};

obj.price = 1000;
obj.currency = 'dollar';

obj.details = {model: 'X', color: 'white'};

// Присваивание
let z = 4;
let a = 2;
a += 10;
let b = 0.5;
b *= 18;
let c = 10;
c -= 10;
let x = -10;
x +=a;
let y = 0.2;
y *= z;
let i = 3;
i *=5*y;

i *=i;

// Арифметические операторы
console.log(a++);
console.log(++a);

if (a%2 == 0) {
  console.log('Число парное.');
} else {
  console.log('Число не парное.');
}

// Условные операторы

let str_1 = 'hidden';

if (str_1 == 'hiden') {
  str_1 = 'visible';
} // else {
//   str_1 = 'hidden';
// } -----> в зависмости стоит ли переопределять 

let number = 0.5;

if (number === 0) {
  number = 1;
} else if (number < 0) {
  number = 'less then zero';
} else if (number > 0) {
  number *=10;
}

// преобразование типов
let j = 0 || 'string'; 
// "string" потому что проверяет на правду, 0 = false
j = 1 && 'string';
// выдаст "string" как послуднюю правду
j = null || 25;
// выдаст  25 как единственную правду
j = null && 25;
// выдаст null как первую ложь
j = null || 0 || 35;
// выдаст 35 ка единственную правду
j = null && 0 && 35;
// выдаст null  как первую ложь

// 12+14+"12" сначала произойдет матиматичесое сложение а потом конкатенация result: "2612"
// 3+2-"1" сначала матиматичесое сложение, потом строка "1" преобразуется в число и вычтеться из суммы: 4
// "3"+2-1 сначала конкатенация а потом преобразование в число и вичитание из суммы: 31
// true + 2 = 3 true при переводе в число = 1
// +"10" + 1 унврный + преобразует в число и сложение: 11
//  undefined + 2 = NaN; undefined  при переводе в число = NaN, результат сложения нечисла с числом есть NaN
// null + 5 = 5  null = 0
// true + undefined = NaN; true = 1, undefined = NaN.


