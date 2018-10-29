
// Задача 1

/**
 * isParent - проверяет наличие связи элементов
 * @param {*} parent - родительский елемент
 * @param {*} child - предпологаемо дочерний элемент
 */
let isParent = (parent, child) => {
  return parent.contains(child); 
}

isParent(document.body.children[0], document.querySelector('mark'));
isParent(document.querySelector('ul'), document.querySelector('mark'));

// Задача 2

/**
 * findLink - поиск ссылок вне заданного элемента
 * @param {text} exclusionParent - исключающий элемент HTML
 */

let findLink = (exclusionParent) => {
  let allLink = document.getElementsByTagName('a');
  let allExeptionParents = document.getElementsByTagName(exclusionParent)
  let resList = [];
  
  for (let i = 0; i < allExeptionParents.length; i++){

    for(let z = 0; z < allLink.length; z++ ){
      if (!allExeptionParents[i].contains(allLink[z])){
      resList.push(allLink[i]);
      }
    }
    return resList;
  }
// понимаю что костыль подскажите как правильно? и как запустить цикл в цикле?
}
findLink("ul");

// Задача 3
/**
 * spesialPos - показывает елементы перел и после выбранного элемента
 * @param {*} mainTag  - определяемый элемент
 */
let spesialPos = mainTag => {
  let resList = [];
  let base = document.getElementsByTagName(mainTag);
  for(let i = 0; i < base.length; i++){
    resList.push(base[i].previousElementSibling, base[i].nextElementSibling);
  }
  return resList;
}

spesialPos("ul");

// Задача 4
/**
 * count - считает li в списке
 */
let count = () => {
  let list = document.getElementsByTagName('ul');
  return  list[0].getElementsByTagName('li').length;
}

// В чем проблема закоментированого метода?
// let count1 = () => {
//   let list = document.getElementsByTagName('ul');
//   let serchArr = list[0].children;
//   let sum = 0;

//   for (let i = 0; i < serchArr.length; i++){
//     if(serchArr[i].tagName == 'li'){
//     sum += 1;
//   }

//   }
//   return sum;
// }

// Презентация 23

// Задача 1
/**
 * addNewClass - задает клас на ненумерованный список 
 * @param {*} newClass - имя присваимого класса 
 */
let addNewClass = (newClass) => {
  let list = document.querySelector('ul');
  list.setAttribute('class', newClass);
  return list;
}
addNewClass("list");
// Задача 2
/**
 * setId - первой ссылке после списка присвоить ID
 * @param {*} newId - идентификатор
 */
let setId = newId => {
  let links = document.body.querySelectorAll('a');
  let link = links[links.length - 1];
  link.setAttribute('id', newId);
  return link;
}
setId('link');

//Задача 3

/**
 * etClassOnLi - поиск ссылки после ul и изменение на заданный класс
 * @param {*} NewLiClass - класс для ссылки
 */
let setClassOnLi = NewLiClass => {
  let listLi = document.querySelector('ul').getElementsByTagName('li');

  for(let i = 0; i < listLi.length; i +=2 ){
    listLi[i].setAttribute('class', NewLiClass);
  }

  return listLi;
}
setClassOnLi('item');


// Задача 4

/**
 * setOnA_tegClass - писвоение всем ссыкам класс.
 * @param {*} a_Class - общий класс для ссылок
 */
let setOnA_tegClass = a_Class => {
  let aColection = document.getElementsByTagName('a');

  for (let i = 0; i <aColection.length; i++){
    aColection[i].setAttribute("class", a_Class);
  }
  return aColection;
}
setOnA_tegClass('custom-link');

//Презентация 24
// Задача 1
/**
 * addNewLi - создает новые элементы ненумерованного списка
 */
let addNewLi = () => {
  let parentPosition = document.querySelector('ul');
 
    for (let i = 0; i < 5; i++){
    parentPosition.insertAdjacentHTML('beforeend', `<li class ="new-item">Link ${i+1}</li>`)
   }
}
// addNewLi();

//Задача 2
/**
 * SpesialStrongTag - создает тег strong заполняет текстом и вводит его в первые три сссылки в ненумерованом списке
 */
let SpesialStrongTag = () => {
  let link = document.querySelector('ul').getElementsByTagName('a');
  let strong = document.createElement('strong');
  strong.innerHTML = 'This is strong';

  for (let i = 0; i < 3; i++){
    link[i].insertAdjacentHTML("beforeend", strong);
  }
}

// SpesialStrongTag();

//Задача 3
/**
 * newImage - функция передачи изображения в начало документа
 * @param {url} way - путь к файлу 
 */
let newImage = (way) => {
  let img = document.createElement('img');
  img.setAttribute("src", way);
  img.setAttribute("alt", "Юрий Гагарин");
  document.body.insertAdjacentElement("afterbegin", img);
}

newImage('images/yurij_alekseevich_gagarin_pervyj_kosmonavt_sssr_80_let_93412_1920x1080.jpg');

//Задача 4
/**
 * makeChangesInMark - добавляет в тег mark указанный текст и определяет класс элемента
 * @param {text} colorType - определнени цвета выделения и добавляемого текста
 */
let makeChangesInMark = (colorType) => {
  let mark = document.body.querySelector('mark');
  mark.insertAdjacentText("beforeend", colorType);
  mark.setAttribute('class', colorType );
}  
makeChangesInMark('green');

//Задача 5
//Попытка 1
let sortLi = () => {
    let list = document.querySelectorAll('li'); //перечень 'li'
    let arrContentLi  = [] //колекция текста для сортировки и дальнейшего внедрения

    console.log(list);
    console.log(arrContentLi);
    console.log(list.length) 
    // Созаем масив для сортировки
    for (let i = 0; i < list.length; i++){
      console.log(list[i].textContent);
      arrContentLi.push(list[i]);
    }

    console.log('масив для сортировки: ', arrContentLi);
    // Делаем копию для устранения Хойстинга
    let arr = arrContentLi.slice()
    let arrSpecial =[];
      console.log('Copy non H:', arr);
      console.log('Main:', arrContentLi);

    arr.sort((prev, next) => {
      return next.textContent[4] - prev.textContent[4];
        });

    for (let i = 0; i < arr.length; i++) {
      arrSpecial.push(arr[i]);
      }
     
    
    for (let i = 0; i < list.length; i++){
      console.log(arrSpecial[i].innerHTML)
      list[i].innerHTML = arrSpecial[i].innerHTML;
    }

    return list;
}
// попытка 2
/**
 * sortLi2 - сортировка списка
 */
let sortLi2 = () => {
  let elementUl = document.querySelector("ul");
  let liEllements = elementUl.children;
  let arrToSort = [];

  for (let i = 0; i < liEllements.length; i++){
    arrToSort.push(liEllements[i]);
  }

  arrToSort.sort((prev, next) => {
    return next.textContent[4] - prev.textContent[4];
      });

  for (let i = 0; i < arrToSort.length; i++){
  }

  let arrForInculcation = arrToSort.slice();
 
  while(elementUl.firstChild){
    elementUl.removeChild(elementUl.firstChild);
  }

  for (let i = 0; i < arrForInculcation.length; i++){
      elementUl.appendChild(arrForInculcation[i]);
    }
  return elementUl;
}

// sortLi2();
// На решение последней задачи (методом проб и ошибок) ушло 7 часов, грустно...
