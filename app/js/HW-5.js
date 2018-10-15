// function processString(string, handler) {
//   let newString = "";
//   for (let i = 0; i < string.length; i++){
//     newString += handler(string[i]);
//   }
//   return newString;
// }

// processString('Hallo, everyone!', function(symbol){
//   return symbol.toUpperCase();
// });
// console.log(newString);

// function createAnotherFunction(){
//   return function (value){return value;}
// }


// console.log(createAnotherFunction()('Somthing'))
// let func = createAnotherFunction;
// console.log(func()('Haha'));
// 


// ---------------------------------------Начало ДЗ--------------------------------------------------
// Функции
// Задача 6

function getNewString(arr, handler){
  let res = "New value: ";
  for (let i = 0, max = arr.length; i < max; ++i){
    let middleRes = handler(arr[i]);
    res += middleRes;
  }
  return res;
}

getNewString(['my', 'name', 'is', 'Trinity'], function(item) {
 return item[0].toUpperCase() + item.slice(1);
});

getNewString(['10', '20', '30'], function(item) {
  return item * 10 + ", ";
 });

getNewString([{age: 45, name: "John"}, {age: 20, name: "Aaron"}], function(item) {
  return item.name + " is " + item.age + ", ";
 });

getNewString(['abc', '123'], function(item) {
  let res1 = "";
  for (let i = item.length - 1; i + 1; --i){
    res1 += item[i];
  }
  return res1 + ", ";
 });

//  Масивы
// 1
function srtSortAndReverse(str){
  let arr1 = str.split('');
  let arr2 = arr1.reverse();
  return arr2.join('');
}
srtSortAndReverse("mlkjihgfedcba");
// 2
function arrSortReverse(arr){
  let resArr = arr.sort(function(prev, next){
    return next - prev;
  })
  return resArr;
} 
arrSortReverse([2, 4, 7, 1, -2, 10, -9]);
// 3
function gerCutArr (arr, numb1, numb2){
  return arr.slice(numb1, numb2 +1);
}
gerCutArr(['a', 'b', 'c', 'd', 'e', 'f'], 2, 4);


// 4
let arr3 = ['one', 2, 'three', 4];
let arr4 = arr3.concat(arr3);
// 5 
let arr5 = [1, 2, 3, 4, 5];
arr5.splice(2,2);

// 6
let arr6= [1, 2, 3, 4, 5];
arr6.splice(2, 2, 'three', 'fore');

// 7
let someArr = ['I', 'am', 'an', 'array'];
someArr.splice(3, 0, 'awesome');
// 8 
let arrArr = [[14, 45], [1], ['a', 'c', 'd']];
function sortArrByLength (){
  return arrArr.sort(function(prev, next){
    return prev.length - next.length;
  })
}
// 9
let arrCopy = arrArr.slice(0);
let arrCopy1 = [];
arrCopy1 = arrCopy1.concat(arrArr);
// 10
let cpuArr = [
  {cpu: 'intel', info: {cores:2, cache:3}},
  {cpu: 'intel', info: {cores:4, cache:4}},
  {cpu: 'amd', info: {cores:1, cache:1}},
  {cpu: 'intel', info: {cores:3, cache:2}},
  {cpu: 'amd', info: {cores:4, cache:2}}
];
function sortMultiArr (){
  return cpuArr.sort(function(prev, next){
    return prev.info.cores - next.info.cores;
  })
}
sortMultiArr();
// 11
const products = [
  {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
  {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
  {title: 'prod5', price: 18.9}, {title: 'prod6', price:8},
  {title: 'prod7', price: 19}, {title: 'prod8', price:63},
];

function filterCollection(products, min, max){
  let selectionArr = [];
  for (i = 0; i < products.length; i++) {
    if(products[i].price > min && products[i].price < max)
    selectionArr.push(products[i]);
  };
  return selectionArr.sort(function(prev, next){
    return prev.price - next.price;
  })
}
filterCollection(products, 15, 30);
