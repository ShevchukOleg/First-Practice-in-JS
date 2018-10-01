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
