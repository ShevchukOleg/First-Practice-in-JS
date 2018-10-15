// Задача 1
function multiply() {
  if (arguments.length === 0) {
    result = 0;
  }
  let result = 1,
  maxNumber = arguments.length;
  for (let i = 0; i < maxNumber; i++){
    result *= arguments[i]; 
  }
  return result;
};

// Задача 3
function reverse(str_1) {
  let resStr_1 = "";
  for (let i = str_1.length-1; i+1; i--){
    resStr_1 += str_1[i];
  }
  return resStr_1;
}

// Задача 4
function toUnicode(str_2) {
  let resStr_2 = "";
  for (let i = 0; i !== str_2.length; i++){
    resStr_2 += str_2.charCodeAt(i) + " ";
  }
  return resStr_2;
}

// Масивы


// Задача 1
function doubleArr(arr) { 
  return arr.concat(arr);
}

// Задача 2
function lustChar(arr) {
  return arr[arr.length - 1];
}

// Задача 3
function countTo(n) {
  let resArr = [];
  let i = 1;
  while (i <= n) {
    resArr.push(i);
    i++
  }
  return resArr;
}

// Задача 4
function delFirstSymbol() {
  let resArr_1 = [];
  for (let i = 0; i != arguments.length; i++){
   arguments[i].shift();
    resArr_1.push(arguments[i]);
  }
  return resArr_1;
}
