getBigName(userName); //"UNDEFINED"  визов функции с неопределенным аргументом поскольку переменная userName оглашена но не определена (Хойстинг)

function getBigName(name){// присвоение неопределенной переменной в функцию
  name = name + ""; // превращение значение переменной в строку "undefined"
  return name.toUpperCase(); // преобразование строки в верхний регистр
}

var userName = "Ivan";

//---------------------------------------------------------------------------------------------------------


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

//---------------------------------------------------------------------------------------------------------

var a = 1;
(function getA (){
  var a = 2;
  getRes();
})();

function getRes(){
  console.log(a);// 1
}

//---------------------------------------------------------------------------------------------------------
function numberGenerator() {
  var num = 1;
  function checkNumber() {
    console.log(num);
  }
  num++;
  return checkNumber; // как в checkNumber  попадает значение 2?
}

var number = numberGenerator();
number(); // 2

//---------------------------------------------------------------------------------------------------------


var x = 10;

function foo() {
  var y = x + 5;
  return y;
}

function bar() {
  var x = 2;
  return foo();
}

function main() {
  console.log(foo()); // Статическая область: 15; Динамическая область: 15
  console.log(bar()); // Статическая область: 15; Динамическая область: 7
  return 0;
}