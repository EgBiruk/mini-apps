const names = ["Алиса", "Борис", "Виктория"];

function myFunc (name1, name2, name3) {
    console.log(name1, name2, name3);
}

myFunc(...names);