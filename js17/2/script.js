async function getUsers() {
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(!response.ok){
        throw new Error('Ошибка статус-кода')
    }
    const data = await response.json();
    const usersList = document.querySelector('.list-group');
    data.forEach(user => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = `${user.name} (${user.email})`;
        usersList.appendChild(li);
    })
    } catch (error) {
        console.error(error);
    }
}
getUsers();