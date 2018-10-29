// Задача 1
const products = [
  {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
  {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
  {title: 'prod5', price: 18.9}, {title: 'prod6', price:8},
  {title: 'prod7', price: 19}, {title: 'prod8', price:63},
];

function filterCollection(arr = products, min, max){
  let selectionArr = [];
  selectionArr = products.filter(function(item) {
     return item.price >= min && item.price <= max;
  });
  return selectionArr.sort(function(prev, next){
    return prev.price - next.price;
  });
}
console.log(filterCollection(products, 15,
   25))

let resTask1 = (products, min, max) => {
  let selectionArr = [];
  selectionArr = products.filter(item => {
    return item.price >= min && item.price <= max;
  });
  return selectionArr.sort((prev, next) => prev.price - next.price);
}

//Задача 2
let arrNumbers = [1, 2, 3, 5, 8, 9, 10];

function checkOnTwoness(arr = arrNumbers){
  return arr.map(function(number){
    return {digit: number, odd: !!(number%2)};
  });
}

let arrAlreadyChecked = (arr = arrNumbers) => arr.map( number => ({digit: number, odd:!!(number%2)}));

// Задача 3
let arrDiferentNumb = [12, 4, 50, 1, 0, 18, 40];
function checkOnNull(arr = arrDiferentNumb){
  return arr.some(function(number){
    return number === 0;
  });
}

let resultCheckOnNull = (arr = arrDiferentNumb) => arr.some( number => number === 0);
//Задача 4
let arrWords = ['yes', 'hello', 'no', 'easycode', 'what'];
// Длинный вариант
function threeLetersInWord(arr = arrWords){
  return arr.some(function(word){
    return word.length > 3;
  });
}

// Короткий
let result = arrWords.some(function(word){
  return word.length > 3;
});

let areThreletters = arrWords.some( word => word.length > 3);
// Задача 5
let bigData = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2}, 
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0}, 
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

let sentense = (coddingArr = bigData) => {
  let order = coddingArr.sort((prev, next) => prev.index - next.index);
  let result =  order.reduce( (sum, current) => {
    return sum + current.char;
  }, '');
  return result;
}


// Способ 2 выбор букв в масив по индексам и потом преоюразовать масив в строку.
function dificultWay(arr = bigData){
  let strArr = [];
  for(let i = 0; i < arr.length; i++){
    strArr[arr[i].index] =  arr[i].char;
  }
  return strArr.join('');
}

let dificultMethod = (arr = bigData) => {
  let strArr = [];
  for(let i = 0; i < arr.length; i++){
    strArr[arr[i].index] =  arr[i].char;
  }
  return strArr.join('');
}


// -----------------------------------TODOS---------------------------------------------------------------

let storage = {
  current_todos: [],
  deleted_todos: []
};


/**
 * generate_id - создает произвольную строку 
 * @returns {string} - новый id
 */
const generate_id = () => {
  const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  let id = "";

  for (let i = 0; i < 10; i++) {
      let index = Math.floor(Math.random() * words.length);
      id += words[index]; 
  }

  return id;
}
// Альтернативный метод: создать масив из индексов знаков строки, и отфильтровать масив полученый из строк по этим индексам

/**
 * add_new_todo - функция для добавления новой задачи
 * @param {String} title - заголовок задачи 
 * @param {String} text - текст задачи
 * @returns {void}
 */
const add_new_todo = (title, text) => {
  if (!title) return console.log("Введите заголовок задачи.");
  if (!text) return console.log("Введите текст задачи.");

  const new_todo = { title, text, id: generate_id()};

  storage.current_todos.push(new_todo);

  return storage.current_todos;
}

/**
* delete_todo_item - удаление одной задачи
* @param {sting} id 
*/
const delete_todo_item = id => {
  if (!id) return console.log("Передайте id удаляемой задачи.");

  storage.current_todos = storage.current_todos.filter(todo => todo.id !== id);

  return storage.current_todos;
}

/**
 * 
 * @param {*} id 
 * @param {*} title 
 * @param {*} text 
 */
const edit_todo_item = (id, title, text) => {
  if (!id) return console.log("Передайте id изменяемой задачи.");
  if (!title) return console.log("Введите новый заголовок задачи.");
  if (!text) return console.log("Введите новый текст задачи.");

  let changingToDo = storage.current_todos.some(todo => todo.id === id);

  changingToDo = {title, text, id};
  storage.current_todos = storage.current_todos.filter(todo => todo.id !== id);
  storage.current_todos.push(changingToDo);
  return storage.current_todos;
}