// Задача из лекции
let str = "Hallo world";
let res = "";
for (let i = 0; i < str.length; i++ ) {
  res += str[i] + '*';
}
console.log(res.slice(0, -1));
// Задача 1
let str_1 = 'I am in the easycode';
let str_1_res = '';
for (let i = 0; i < str_1.length; i++) {
  if (i === 0 || str_1[i-1] === ' ') {
    str_1_res += str_1[i].toUpperCase();
  } else if (0 < i && str_1[i-1] != ' '){
    str_1_res += str_1[i];
  } 
}
console.log(str_1_res);
console.log(str_1_res[-1]);

// Задача 2
let str_2 = "tseb eht ma i";
let str_2_res = "";
for (i = str_2.length - 1; i >= 0; i--) {
  str_2_res += str_2[i]; 
}
console.log(str_2_res);
// Задача 3
let n = 1;
n = prompt('Введите основу факториала:', 10); // если пользователь нажмет отмену
if (n) {
  n = n;
} else {
  n = 1;
}


let factorial = 1;
for ( i = 1; i <= n; i++){
  factorial *= i;
}
console.log(factorial);

let r = 1;
while ( n !=0 ) {
  r *= n;
  n--;
}
alert('Факориал числа равен: ' + r);

//Задача 4
let j = 0;
while ( j < 10 ){
  j++;
  console.log(j);
}
// Задача 5 
let str3 = 'JavaScript is a pretty good language';
let str3_res = '';
for (let i = 0; i < str3.length; i++) {
  if (i === 0) {
    str3_res += str3[i].toUpperCase();
  } else if (0 < i && str3[i-1] != ' ' && str3[i] != ' '){
    str3_res += str3[i];
  }else if (str3[i] === ' '){ continue;
  }else if (0 < i && str3[i-1] === ' '){
    str3_res += str3[i].toUpperCase();
  }
}
console.log(str3_res);
  
//Задача 6
for (let np = 1; np <= 15; np++ ){
  if( np % 2 === 1){
  console.log(np);
  }
}
i = 0;
console.log(str3_res[i-1]);