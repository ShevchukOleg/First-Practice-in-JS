// Задача 1
function multiply(){
  let result = 1,
      maxNumber = arguments.length;
      for (let i = 0; i < maxNumber; i++){
        result *= arguments[i]; 
      }
    return result;
};

console.log(multiply(20, 30, 3));
// Задача 2
let str_1 = "Hurricane Michael made landfall on Wednesday afternoon as a category four storm";
function reverse(){
  let resStr_1 = "";
  for (let i = str_1.length-1; i+1; i--){
    resStr_1 += str_1[i];
  }
  return resStr_1;
}
console.log(reverse());
// Задача 4
let str_2 = "hello";
function tr(){
let resStr_2 = "";
for (let i = 0; i !== str_2.length; i++){
  resStr_2 += '' + str_2.charCodeAt(i) + " ";
}
return resStr_2;
}
console.log(tr());

// Масиви
// Задача 1
let arr = [1, 2, 3];
function doubleArr(){
  let doubleArrey = arr.concat(arr);
return doubleArrey;
}
console.log(doubleArr());
// Задача 2
function lustChar(){
  let char = arr[arr.length - 1];
  return char;
}
console.log(lustChar());
// Задача 3
let n = prompt("Введите любое число", 1);
function count(){
  let resArr = [];
  let i = 1;
  while (i <= n){
    resArr.push(i);
    i++
  }
  return resArr;
}
console.log(count());

// Задача 4
function kabum(){
  let resArr_1 = [];
  for (let i = 0; i != arguments.length; i++){
    arguments[i].shift();
    resArr_1.push(arguments[i]);
  }
  return resArr_1;
}
console.log(kabum([1, 2, 3, 4], ["a", "b", "c", "d", "e"], ["A", "B", "C"]));