const names = ["Алиса", "Борис", "Виктория", "Григорий", "Дарья"];

let [firstName, secondName, ...otherNames] = names;

console.log(firstName, secondName);

if (otherNames.length < 2) {
    secondName = "Alex";
}

otherNames.forEach(item => console.log(item));