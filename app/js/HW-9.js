// Задача 1
const rectangle = {
  width: 20,
  height: 30,

  getSquare () {
    return this.width * this.height;
  }
}

// Задача 2
const price = {
price: 10,
discount: '15%',

getPrice () {
  return this.price;
  },

getPriceWithDiscount () {
  let coef = 1 - parseFloat(this.discount)/100
  return this.getPrice()*coef ;
  }
}

//Задача 3
const user1 = {name: 'Abraham'},

 getUserName = function() {
  return this.name;
};

user1.getUserName = getUserName;

user1.getUserName();
//Задача 4
let object = {
  height: 10,

  increaseHeight(){
    this.height += 1;
    return this.height;
  }
}
//Задача 5
let numerator = {
  value: 1,

  double: function(){
    this.value *= 2;
    return this;
    },

  plusOne: function(){
    this.value += 1;
    return this;
    },

  minusOne: function(){
    this.value -= 1;
    return this;
  }
}
numerator.double().plusOne().plusOne().minusOne().value;

// Задача 6
const user2 = {name: "Abraham"},

otherUser = {
  name: "John",

  getName: function(){return this.name}
}

user2.getName // вызов свойства которого нет у этого обьекта
user2.getName = otherUser.getName; // заимствование метода другого обьекта
user2.getName(); // "Abraham" возвращает заимствованный метод через функцию function(){return this.name} с привязкой к контексту user2
otherUser.getName()// "John"  отдает имя в ключе name,  по контекксту otherUser

// Задача 2.1
function getList() {
  return this.list;
}

let users = {
  length: 4,
  list: ["a", "b", "c"]
}
getList();// неопределено, поскольку в окружении window  нет такогоключя как "list"
users.getList = getList;
users.getList();// присвоит обьекту метод в виде зданой выше функции, вернет масив по ключю "list"
getList.call(users); //передает контекст вызова в обьект users, вернет искомый масив

//Задача 2.2
let productsAccounting = {
  price: 20,
  quantity: 5,
  getCost(){
    return this.quantity * this.price;
  }
}
productsAccounting.getCost();

//Задача 2.3
let detalesAccounting = {
  price: 42,
  quantity: 3
}
detalesAccounting.getCost = productsAccounting.getCost;
detalesAccounting.getCost();

//Задача 2.4
let sizes = {
  width: 5,
  height: 10
},

getSquare = function() {return this.width * this.height};
getSquare.call(sizes);

//Задача 2.5
let numbers = [4, 12, 0, 10, -2, 4];
Math.min.apply(null, numbers);

//Задача 2.6
const element = {
  height: '15px',
  marginTop: '5px',
  marginBottom: '5px',
  getFullHeight: function(){
    return parseFloat(this.height) + parseFloat(this.marginTop) + parseFloat(this.marginBottom);
  }
}

element.getFullHeight()

const block = {
  height: '5px',
  marginTop: '3px',
  marginBottom: '3px'
}

element.getFullHeight.call(block);

//Задача 2.7
let element1 = {
  height: 25,

  getHeight: function() {
    return this.height;
  }
};

let getElementHeight = element1.getHeight.bind(element1);
getElementHeight();
