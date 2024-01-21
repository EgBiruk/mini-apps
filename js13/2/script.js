const timeP = document.querySelector(".time");

let timeInterval = setInterval(() => {
    let now = new Date();
    timeP.textContent = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}, 1000)

