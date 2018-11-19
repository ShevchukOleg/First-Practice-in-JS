class CustomHttp {
  get(url, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);

      xhr.addEventListener("load", () => {
          callback(JSON.parse(xhr.responseText));
      });

      xhr.send();
  }
}

let xhr = new XMLHttpRequest();
xhr.open("GET", "https:/jsonplaceholder.typicode.com/users");

xhr.addEventListener("loadend", () => {
  // console.log(xhr.responseText)
});

xhr.send();
class UserUI {
  constructor() {
      this._container = document.querySelector(".posts-wrapper");
  }

  addUser(user) {
      const template = UserUI._createTemplate(user);
      this._container.insertAdjacentHTML("beforeend", template);
  }

  showEmptyMsg() {
      this._container.insertAdjacentHTML("beforeend", UserUI._emtyContainerTemplate());
  }

  static _createTemplate({id, name, username, email, phone}) {
      return `
      <div class="card mt-3">
          <div class="card-body ">
              <h5 class="card-title" data-id = "${id}">${name}</h5>
              <p class="card-text d-none" >Name: ${username}; E-mail: ${email}; Phone: ${phone}</p>
          </div>
      </div>
      `
  }

  static _emtyContainerTemplate() {
      return `<div class="alert alert-info">Нет пользователей!</div>`
  }
}

function generateUser(users) {
  const ui = new UserUI();
  if (!users.length) return ui.showEmptyMsg();
  users.forEach(user => ui.addUser(user));
}

const http = new CustomHttp();
const apiUrl = "https://jsonplaceholder.typicode.com";

http.get(`${apiUrl}/users`, (res) => {
  generateUser(res);
});

document.addEventListener('click', (e) => {
  console.log(e.target)
  let target = e.target;
  if ( target.classList.contains("card-title") ){
    target.parentElement.querySelector('p.card-text').classList.toggle('d-none');
    return console.log(target.parentElement.querySelector('p.card-text'))
  }
})