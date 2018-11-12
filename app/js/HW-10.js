// Замыкания задачи на проверку внизу код ниже попытка разобратся.
//Задача 1
getBigName(userName); //"UNDEFINED"  визов функции с неопределенным аргументом поскольку переменная userName оглашена но не определена (Хойстинг)

function getBigName(name){// присвоение неопределенной переменной в функцию
  name = name + ""; // превращение значение переменной в строку "undefined"
  return name.toUpperCase(); // преобразование строки в верхний регистр
}

var userName = "Ivan"; // обьявление и определение переменной userName

// Задача 2
function test (){
  var name = "Vasiliy"; // создание дополнительной переменной name  и присвоение значения
  return getBigName(userName); // вызов функции getBigName с лексическим окружениемнапервом уровне  var name и на втором  userName которое присваивается в аргумент функции
}
function getBigName(name){ // значение переменной userName присвоено в аргумент name, (здесь не понятно почему оно не перезаписуется значением var name из лексического окруженияс  места вызова функции)
  name = name + ""; // трансформация в строку
  return name.toUpperCase(); // возврат пределаной строки "IVAN"
}
var userName = "Ivan";
test(); // вызов функции с переменной  userName в лексическом окржении разделе scope

//Задача 3
var food = 'cucumber'; // создание и определение переменной

(function(){//        функция самовызова с var food = 'cucumber' в [scope]
  var food = 'bread'; //  изменение значение переменной  ведб  var  не блочной видимости
  getFood();// в момент вызова  создается новое LE в которое должно попасть измененное занчение var food = 'bread'
})()//  но нет почему не понимаю

function getFood(){ // создание функции с var food = 'cucumber' в [scope]
  console.log(food);
}

var a = 1;
(function getA (){
  var a = 2;
  getRes();
})();

function getRes(){
  console.log(a);
}


function numberGenerator() {
  // Локальная «свободная» переменная, которая доступна только в замыкании
  var num = 1;
  function checkNumber() {
    console.log(num);
  }
  num++;
  return checkNumber;
}

var number = numberGenerator();
number(); // 2




// -----------------------------------------------ДЗ----------------------------------------------------
// Задача 1
var dollar, // Определение переменных
  getDollar;

  (function(){// Оглашение функции самовызова
    var dollar = 0; //присвоеие значение переменной
    getDollar = function (){ //оглашение внутрненней функции в LE которой пойдет значение var dollar = 0;
      return dollar;
    }
  }());

dollar = 30; //переопредиление переменной
getDollar(); // вызов функции со снимком состояние LE  без изменения значения переменной dollar  позврат значения из LE  = "0";

//Задача 2
var greet = "Hallo";
(function(){
  var text = ' World';
  console.log(greet + text); //  покажет фразу "Hello world"  так как из данной позиции чрез scope 1 get var text = ' World' & scope2 get var greet = "Hallo"
}());
// console.log(greet + text); // невозможно выполнить функцию покольку она не получает доступа к переменной  text,  она ихолированна в функции самовызова

//Задача 3
/**
 * minus - вычетание одного аргумента функции из второго
 * @param {Number} firstNum - аргумент с котоого вычитают
 * @param {Number} secondNum -  вычитаемы аргумент
 */
const minus = function (firstNum = 0) {
  return function (secondNum = 0){
    return firstNum - secondNum;
  }
}
// minus()();

//Задача 4
/**
 * MultiplyMaker -   умножение первой базовой введенной переменной на аргумент функции без имени, а потом резуьтат на введенные переменные
 * @param {*} numbBase пограмно заданный первый множетель 
 * @param {number} numb - второй множетель
 */
function MultiplyMaker (numbBase) {
 let prevRes = numbBase;
  return  function (numb = 1) {
    return prevRes *= numb;
  };
};
let multiply = MultiplyMaker(2);
// multiply(2);

//Задача 5
/**
 * moduleStr -  модуль-функция обработки строки
 * @param {String} someNewStr -  новая строка
 * 
 */
const moduleStr = (function(){
  let str = "";

  function setStr(someNewStr){
    switch (typeof someNewStr){
      case "undefined":
        str = '';
        break;
      case "number":
        str = String(someNewStr);
        break;
      case "string": 
        str = someNewStr;
    }
    return "Done";
  }

  function getStr(){
    return str;
  }

  function getStrLenght(){
    return str.length;
  }

  function getReversedStr(){
    let strReversed = ""
    for (let i = str.length-1; i > -1; i--){
      strReversed += str[i];
    }
    return strReversed;
  }
  return {
    setStr: setStr,
    getStr: getStr,
    getLenght: getStrLenght,
    reverse: getReversedStr
  };
})()

//Задача 6
/**
 * Calculator -  модуль калькулятор
 * @param {Number} numb -   первоначальное значение
 * @param {Number} component -  соответствующий параметр математической функции
 */

const Calculator = (function(){
  let baseValue;
  function setValue(numb){
    return baseValue = numb;
  }

  function sum (component){
    baseValue += component;
    return this;
  }
  function minus (component){
    baseValue -= component;
    return this
  }
  function multiply (component){
    baseValue *= component;
    return this;
  }

  function divide (component){
    baseValue /= component;
    return this
  }

  function raise (component){
    baseValue = Math.pow(baseValue, component)
    return this;
  }

  function getResult(){
    return Math.round(baseValue*100)/100;
  }

  return {
    setValue: setValue,
    sum: sum,
    minus: minus,
    multiply: multiply,
    divide: divide,
    raise: raise,
    getResult: getResult
  }
})();

