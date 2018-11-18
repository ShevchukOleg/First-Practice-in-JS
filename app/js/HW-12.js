//Task 1
//old
function Car (name, age) {

  if (!name || typeof name != "string" && !age || !isFinite(age)){
    alert ('Введите корректные данные!');
  }

  this.name = name;
  this.age = age;
  this.getName = function(){
    let fullName = this.name[0].toUpperCase() + this.name.slice(1);
    return fullName;
  }

  this.getAge = function(){
    return (new Date).getFullYear() - this.age;
  }
}

let oldCar = new Car("alfa", 8);
oldCar.getAge();

//new

class Car1 {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  getName() {
    let fullName = this.name[0].toUpperCase() + this.name.slice(1);
    return fullName;
  }

  getAge() {
    return (new Date).getFullYear() - this.age;
  }
}

const secondCar = new Car1("BMW", 3);
secondCar.getName(), secondCar.getAge();

//Task2
function Enigma (str){
    this.Hallo = "Hallo";
    _originalStr = str;
    _transformedStr = '';
  
    this.showSrt = function(){
      return _originalStr;
    }

    this.showModifiedStr = function(){
    for (let i = 0; i < _originalStr.length; i++){
      _transformedStr += _originalStr.charCodeAt(i);
    }
   
    return _transformedStr;
    }

    this.erase = function(){
      _originalStr = "";
      _transformedStr = "";
      return _originalStr, _transformedStr;
    }
}

// const code = new Enigma(prompt('Введите текст', ''));

//Task 3
function Str (string) {
  this.string  = string;
  this.getStr = function(){
    return this.string;
  }

  this.setStr = function(newStr){
    this.string = newStr;
    return this.string;
  }

  this.strLength = function(){
    return this.string.length;
  }
  this.toString = function(){
    return this.string;
  }

  this.valueOf = function() {
    return this.string.length;;
  }

}

const str = new Str('some new str');
