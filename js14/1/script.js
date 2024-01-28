const titleP = document.querySelector('.title');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

xhr.send();

xhr.onload = function() {
   let responseObj = xhr.response;
   const todoArr = JSON.parse(responseObj);
   titleP.textContent = todoArr.title;
}



