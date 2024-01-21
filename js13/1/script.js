function myMessage(msgNum) {
    console.log(`Сообщение номер ${msgNum}`)
}

msgNum = 1;

const myInterval = setInterval(() => {
if (msgNum < 6) {
    console.log(`Сообщение номер ${msgNum}`)
    msgNum++;
} else {
    clearInterval(myInterval);
}
}, 2000)


