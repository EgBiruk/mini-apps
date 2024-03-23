const myObj = {
    num1: 10,
    num3: 30,
    num4: 40,
    num5: 50,
    num6: 60
}

if (!myObj.num1) {
    myObj.num1 = 1;
}

if (!myObj.num2) {
    myObj.num2 = 2;
}

const {num1: myNum1, num2: myNum2, ...fields} = myObj;

console.log(myNum1, myNum2);
console.log(fields);