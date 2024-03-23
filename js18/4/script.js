function meanScore(...args) {
    let sum = 0;
    let count = 0;
    for (let arg of args) {
        if (typeof arg !== 'number') {
            console.error('Все значения аргументов должны быть числами!')
            return;
        }

        sum+=arg;
        count++;
    }
    const avg = sum/count;
    return avg.toFixed(2)
}

console.log(meanScore(1, 2, 3)); 
console.log(meanScore(10, 20, 30, 40)); 
console.log(meanScore(5, '6', 7));