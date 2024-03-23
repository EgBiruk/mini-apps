const listGroup = document.querySelector('.list-group');
const userCard = document.querySelector('.user-card');



async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
            throw new Error('Ошибка статус кода');
        }
        const usersData = await response.json()
        for (let i = 0; i < usersData.length; i++) {
            if (i === 0) {
                const template = `
                <li class="list-group-item active">${usersData[i].name}</li>
                `
                listGroup.innerHTML += template;
            } else {
                const template = `
            <li class="list-group-item">${usersData[i].name}</li>
            `
            listGroup.innerHTML += template;
            }
            
        }
        let template2 = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${usersData[0].name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${usersData[0].username}</h6>
        <p class="card-text">${usersData[0].address.street}<br>${usersData[0].address.suite}<br>${usersData[0].address.city}<br>${usersData[0].address.zipcode}</p>
        <p class="card-text">${usersData[0].company.name}</p>
        <a href="${usersData[0].website}" class="card-link">Написать ему</a>
        </div>  
        </div>
        `
        userCard.innerHTML = template2;

        const users = Array.from(document.querySelectorAll('li'));
        listGroup.addEventListener('click', (e) => {
            users.forEach(user => {
                user.classList.remove('active');
            })
            e.target.classList.add('active');
            const index = Array.from(e.target.parentNode.children).indexOf(e.target);
            template2 = `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${usersData[index].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${usersData[index].username}</h6>
            <p class="card-text">${usersData[index].address.street}<br>${usersData[index].address.suite}<br>${usersData[index].address.city}<br>${usersData[index].address.zipcode}</p>
            <p class="card-text">${usersData[index].company.name}</p>
            <a href="${usersData[index].website}" class="card-link">Написать ему</a>
            </div>  
            </div>
            `
            userCard.innerHTML = template2;
        })

    } catch (error) {
        console.error('произошла ошибка');
    }
    
}

getUsers();



