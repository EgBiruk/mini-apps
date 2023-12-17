// Задание 1
// 1) 
// Задать объект с полем name. 
// Задать переменную, которая будет хранить JSON упомянутого объекта. 
// Задать переменную, которая будет хранить результат парсинга предыдущей переменной.
// 2)
// Создать переменную user, в которой хранится объект. 
// Записать переменную в localStorage. 
// Создать переменную newUser, в которой будет храниться JS объект из localStorage


// 1
console.log('1');
const obj = {
    name: 'Egor',
    admin: false
}
console.log(obj);

const jsonObj = JSON.stringify(obj);
console.log(jsonObj);
const strJsonObj = JSON.parse(jsonObj);
console.log(strJsonObj);


// 2
console.log('2');
const user = {
    name: 'Cigan',
    admin: true
}
console.log(user);
localStorage.user = JSON.stringify(user);

newUser = JSON.parse(localStorage.user);

console.log(newUser);