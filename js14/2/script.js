const ul = document.querySelector('.list-group');


let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');

xhr.send();

xhr.onload = function() {
   let responseObj = xhr.response;
   const todoArr = JSON.parse(responseObj);
   for (i = 0; i<20; i++) {
    let li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = `${i + 1}. ${todoArr[i].title}`;
    ul.appendChild(li);
   }
}


