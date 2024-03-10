const form = document.querySelector('.form');
const input = document.querySelector('.input')
const userCard = document.querySelector('.user-Div')

form.addEventListener('click', (e) => {
    e.preventDefault();
    const userName = input.value;
    async function gitUser() {
        try {
            const response = await fetch(`https://api.github.com/users/${userName}`)
            if (!response.ok) {
                throw new Error('Ошибка статус-кода')
            }
            const userData = await response.json();
            const template = `   
          <div class="user-Card card" style="width: 22rem;">
          <img src="${userData.avatar_url}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="${userData.login}"></h5>
          <p class="card-text">Дата регистрации: ${userData.created_at}</p>
          <p class="card-text">Кол-во публичных репозиториев: ${userData.public_repos}</p>
          <a href="${userData.html_url}" class="btn btn-primary">Профиль пользователя</a>
          </div>
          </div>
            `
            userCard.innerHTML = template;
        } catch (console) {
            console.error(error);
        }
        
    }
    gitUser();
})



